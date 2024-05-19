// Third party imports
import { useState, useEffect, useReducer } from "react";
import { FaArrowLeftLong, FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { useMutation } from "@tanstack/react-query";

// User imports
import StepProgressBar from "../../../../Components/StepProgressBar";
import BasicDetails from "./BasicDetails";
import Description from "./Description";
import UploadAttachment from "./UploadAttachment";
import { FlexCenter, FlexCol } from "../../../../Elements/Flex";
import { getItem, setItem } from "../../../../Functions/storage";
import { Btn, Heading } from "../CallPaper";
import { BtnBlueFill } from "../../../../Elements/Button";
import { toast } from "react-toastify";
import axios from "axios";
import Submit from "./Submit";
import { useSelector } from "react-redux";

// export const volumeSchema = z.object({
//   number: z.string().length(5),
//   title: z.string(),
//   description: z.string(),
//   keywords: z.array(z.string()),
//   acceptanceTill: z
//     .string()
//     .refine((date) => {
//       const regex = /^\d{4}-\d{2}-\d{2}$/;
//       return regex.test(date);
//     })
//     .optional(),
//   publishDate: z
//     .string()
//     .refine((date) => {
//       const regex = /^\d{4}-\d{2}-\d{2}$/;
//       return regex.test(date);
//     })
//     .optional(),
//   acceptancePing: z.number().optional(),
//   reviewPing: z.number().optional(),
// });

const detailsInit = {
  volume: "",
  issue: "",
  title: "",
  files: [],
  acceptanceTill: "",
  publishDate: "",
  acceptancePing: "",
  reviewPing: "",
  keywords: [],
  description: { content: "", length: 0 },
  initAt: Date.now(),
};

const detailsReducer = (state, action) => {
  state = { ...state, ...action.payload };
  setItem("form_callpaper", JSON.stringify(state));
  return state;
};

const initDetails = (initialArg) => {
  const localForm = getItem("form_callpaper");
  if (localForm) {
    const parsedLocalForm = JSON.parse(localForm);
    if (Date.now() - parsedLocalForm.initAt < 604800000) {
      //7 days
      initialArg = parsedLocalForm;
    }
    initialArg.files = [];
  }
  setItem("form_callpaper", JSON.stringify(initialArg));
  return initialArg;
};

const Form = ({ stateChangeHandler }) => {
  const user = useSelector((state) => state.user);
  const [step, setStep] = useState(1);
  const [details, dispatchDetails] = useReducer(detailsReducer, detailsInit, initDetails);

  window.addEventListener("keydown", (event) => {
    if (event.key === "Enter") event.preventDefault();
  });

  const callMutation = useMutation({ mutationFn: (promise) => promise });
  const announcmentMutation = useMutation({ mutationFn: (promise) => promise });

  const stepBackHandler = () => setStep((prev) => Math.max(prev - 1, 1));
  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (step === 4) {
      // export const volumeSchema = z.object({
      //   number: z.string().length(5),
      //   title: z.string(),
      //   description: z.string(),
      //   keywords: z.array(z.string()),
      //   acceptanceTill: z
      //     .string()
      //     .refine((date) => {
      //       const regex = /^\d{4}-\d{2}-\d{2}$/;
      //       return regex.test(date);
      //     })
      //     .optional(),
      //   publishDate: z
      //     .string()
      //     .refine((date) => {
      //       const regex = /^\d{4}-\d{2}-\d{2}$/;
      //       return regex.test(date);
      //     })
      //     .optional(),
      //   acceptancePing: z.number().optional(),
      //   reviewPing: z.number().optional(),
      // });

      // export const announcementSchema = z.object({
      //   type: z.enum(announcementTypes).optional(),
      //   subject: z.string(),
      // files
      //   html: z.string(),
      // });

      console.log(user.token);

      announcmentMutation.mutate(
        axios.post(
          `${import.meta.env.VITE_BACKEND_URL}/newsletter/announcement`,
          {
            type: "call",
            subject: `Call for paper : ${details.title}`,
            html: details.desc,
            files: details.files,
          },
          {
            headers: {
              token: user.token,
              dimensions: window.screen.width + window.screen.height,
              "Content-Type": "multipart/form-data",
            },
          }
        )
      );

      const response = {
        number: `${details.volume.toString().padStart(3, "0")}${details.issue.toString().padStart(2, "0")}`,
        ...details,
      };
      delete response.volume;
      delete response.issue;
      delete response.files;
      callMutation.mutate(
        axios.post(`${import.meta.env.VITE_BACKEND_URL}/volume/call`, response, {
          headers: {
            token: user.token,
            dimensions: window.screen.width + window.screen.height,
          },
        })
      );

      console.log(response);
    } else {
      if (step === 1 && details.keywords.length < 3) return toast.error("Please provide atleast 3 keywords");
      if (step === 2 && details.description.length < 100)
        return toast.error("Description should have minimum 100 characters");

      setStep((prev) => Math.min(prev + 1, 4));
    }
  };

  let subHeading = "Basic details";
  if (step === 2) subHeading = "Detailed description";
  else if (step === 3) subHeading = "Upload attachments";

  if (callMutation.isError) console.log(callMutation.error);
  if (announcmentMutation.isError) console.log(announcmentMutation.error);

  if (callMutation.isSuccess) console.log(callMutation.data);

  return (
    <>
      <FlexCenter className="mb-12 ">
        <FaChevronLeft
          onClick={stateChangeHandler}
          className="text-blue-600 hover:scale-105 active:scale-95 hover:-translate-x-0.5 text-xl  transition-all"
        />
        <Heading className="text-center grow">Create call for paper</Heading>
      </FlexCenter>

      <StepProgressBar className="mx-12 mb-12 " steps={4} current={step} />

      <div className="mx-auto px-4 max-w-screen-xl">
        <h1 className="text-2xl mb-6 ">{subHeading}</h1>
        <FlexCol as="form" className="gap-6 mx-4" onSubmit={formSubmitHandler}>
          {step === 1 && <BasicDetails details={details} dispatcher={dispatchDetails} />}
          {step === 2 && <Description details={details} dispatcher={dispatchDetails} />}
          {step === 3 && <UploadAttachment details={details} dispatcher={dispatchDetails} />}
          {step === 4 && <Submit details={details} />}
          {step === 5 && <Status callStatus={callMutation.status} announcementStatus={announcmentMutation.status} />}

          <FlexCenter className="justify-between mt-2">
            <Btn type="button" disabled={step === 1} onClick={stepBackHandler}>
              Back
            </Btn>
            <Btn type="submit" as={BtnBlueFill}>
              {step === 4 ? "Submit" : "Next"}
            </Btn>
          </FlexCenter>
        </FlexCol>
      </div>
    </>
  );
};

export default Form;
