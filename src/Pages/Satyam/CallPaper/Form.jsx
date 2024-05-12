// Third party imports
import { useState, useEffect } from "react";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// User imports
import StepProgressBar from "../../../Components/StepProgressBar";
import Quill from "../../../Components/Quill";
import Input from "../../../Components/Input";
import { FlexCenter, FlexCol } from "../../../Elements/Flex";
import { useReducer } from "react";
import { getItem, setItem } from "../../../Functions/storage";
import InputFile from "../../../Components/InputFile";
import { Btn } from "./CallPaper";

// const volumeSchema = z.object({
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
  number: "",
  issue: "",
  title: "",
  files: [],
  acceptanceTill: "",
  publishDate: "",
  acceptancePing: "",
  reviewPing: "",
  keywords: [],
  desc: "",
  initAt: Date.now(),
};

const detailsReducer = (state, action) => {
  switch (action.type) {
    case "update volume no":
      state = { ...state, number: action.payload.number };
      break;
    case "update issue no":
      state = { ...state, issue: action.payload.issue };
      break;
    case "update title":
      state = { ...state, title: action.payload.title };
      break;
    case "update desc":
      state = { ...state, desc: action.payload.desc };
      break;
    case "update files":
      state = { ...state, files: action.payload.files };
      break;
    case "update keywords":
      break;
  }
  setItem("form_callpaper", JSON.stringify(state));
  return state;
};

const Container = ({ step, children }) => {
  return (
    <>
      {step === 1 && <h1>Basic details</h1>}
      {step === 2 && <h1>Enter detailed desc</h1>}
      {step === 3 && <h1>Upload any attachments</h1>}
      {children}
    </>
  );
};

const Step1Form = ({ details: { number, issue, title }, dispatcher }) => {
  function inputChangeHandler(event) {
    dispatcher({ type: this.type, payload: { [`${this.field}`]: event.target.value } });
  }

  return (
    <>
      <div className="grid grid-cols-[1fr] md:grid-cols-[1fr_1fr] gap-4 md:gap-16">
        <Input
          value={number}
          type="number"
          placeholder="123"
          label="Volume No."
          min={1}
          max={999}
          error_message="Please enter the valid volume no"
          onChange={inputChangeHandler.bind({ type: "update volume no", field: "number" })}
        />
        <Input
          value={issue}
          type="number"
          placeholder="1"
          label="Issue No."
          min={1}
          max={10}
          error_message="Please enter the valid issue no"
          onChange={inputChangeHandler.bind({ type: "update issue no", field: "issue" })}
        />
      </div>
      <Input
        value={title}
        placeholder="TECHNOVATION-23"
        label="Volume Title"
        error_message="Please provide the title."
        onChange={inputChangeHandler.bind({ type: "update title", field: "title" })}
      />

      <Input placeholder="Robotics" label="Keywords" error_message="Please provide the title." />
    </>
  );
};

const Step2Form = ({ details: { desc }, dispatcher }) => {
  const descChangeHandler = (value) => dispatcher({ type: "update desc", payload: { desc: value } });
  return <Quill className="h-screen" value={desc} onChangeHandler={descChangeHandler} />;
};

const Step3Form = ({ details: { files }, dispatcher }) => {
  const fileAddHandler = (files) => {
    dispatcher({ type: "update files", payload: { files } });
  };

  return (
    <>
      <div className="h-[50vh] w-full">
        <InputFile multiple={true} accept="image/*,pdf" file={files} fileAddHandler={fileAddHandler} />
      </div>
    </>
  );
};

const Form = () => {
  const [details, dispatchDetails] = useReducer(detailsReducer, detailsInit, (initialArg) => {
    const localForm = getItem("form_callpaper");
    if (localForm) {
      const parsedLocalForm = JSON.parse(localForm);
      // 7 days expiry of data
      if (Date.now() - parsedLocalForm.initAt > 604800000) {
        initialArg = parsedLocalForm;
      }
    } else setItem("form_callpaper", JSON.stringify(initialArg));
    return initialArg;
  });

  const [step, setStep] = useState(3);
  const backHandler = () => setStep((prev) => Math.max(prev - 1, 1));
  const nextHandler = () => setStep((prev) => Math.min(prev + 1, 4));

  // const query = useQuery({
  //   queryKey: ["latestvolume"],
  //   queryFn: () => axios.get(`${import.meta.env.VITE_BACKEND_URL}/volume/latest`),
  //   staleTime: Infinity,
  // });

  // useEffect(() => {
  //   if (query.isSuccess) {
  //     const number = query.data.data.number ? query.data.data.number + 1 : 10;
  //     const issue = query.data.data.issue ? query.data.data.issue + 1 : 2;
  //     dispatchDetails({ type: "update volume no", payload: { number } });
  //     dispatchDetails({ type: "update issue no", payload: { issue } });
  //   }
  // }, [query.data, query.status]);

  return (
    <div>
      <StepProgressBar className="mx-12 my-2" steps={4} current={step} />
      <Container step={step}>
        <FlexCol as="form" className="gap-4">
          {step === 1 && <Step1Form details={details} dispatcher={dispatchDetails} />}
          {step === 2 && <Step2Form details={details} dispatcher={dispatchDetails} />}
          {step === 3 && <Step3Form details={details} dispatcher={dispatchDetails} />}

          <FlexCenter className="justify-between">
            <Btn
              type="button"
              className={`bg-white font-medium ${step === 1 ? "text-gray-400 border-gray-400" : "text-blue-600 border-blue-600"}`}
              onClick={backHandler}>
              Back
            </Btn>
            <Btn className="text-white bg-blue-600" onClick={nextHandler} type="button">
              {step === 4 ? "Submit" : "Next"}
            </Btn>
          </FlexCenter>
        </FlexCol>
      </Container>
    </div>
  );
};

export default Form;
