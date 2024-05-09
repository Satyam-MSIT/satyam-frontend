// Third party imports
import { useState } from "react";
import styled from "styled-components";

// User imports
import StepProgressBar from "../../../Components/StepProgressBar";
import Quill from "../../../Components/Quill";
import Input from "../../../Components/Input";
import { FlexCenter, FlexCol } from "../../../Elements/Flex";

// const volumeSchema = z.object({
//   number: z.number().gte(1).lte(99).optional(),
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

const Btn = styled.button.attrs({
  className:
    "px-5 tracking-wider cursor-pointer hover:scale-[1.01] active:scale-95 py-2 rounded-md border-blue-600 border-2  transition-all bg-blue-600 text-white  text-lg",
})``;

const Form = () => {
  const [volumeNo, setVolumeNo] = useState();
  const [title, setTitle] = useState();
  const [keywords, setKeywords] = useState([]);
  const [step, setStep] = useState(2);
  const [desc, setDesc] = useState("");
  const volumeChangeHandler = (event) => setVolumeNo(event.target.value);
  const titleChangeHandler = (event) => setTitle(event.target.value);
  const descChangeHandler = (value) => setDesc(value);
  const backHandler = () => setStep((prev) => Math.max(prev - 1, 1));
  const nextHandler = () => {
    setStep((prev) => Math.min(prev + 1, 4));
  };

  return (
    <div>
      <StepProgressBar className="mx-12 my-2" steps={4} current={step} />

      <FlexCol as="form" className="gap-4">
        {step === 1 && (
          <>
            <h1>Basic Details</h1>
            <Input
              value={volumeNo}
              type="number"
              placeholder="123"
              label="Volume No."
              min={1}
              max={999}
              error_message="Please enter the valid volume no"
              onChange={volumeChangeHandler}
            />{" "}
            <Input
              value={title}
              placeholder="TECHNOVATION-23"
              label="Volume Title"
              error_message="Please provide the title."
              onChange={titleChangeHandler}
            />
          </>
        )}

        {step === 2 && <Quill className="h-screen" value={desc} onChangeHandler={descChangeHandler} />}

        <FlexCenter className="justify-between">
          <Btn
            type="button"
            className={`bg-white font-medium ${step === 1 ? "text-gray-400 border-gray-400" : "!text-blue-600 border-blue-600"}`}
            onClick={backHandler}>
            Back
          </Btn>
          <Btn onClick={nextHandler} type="button">
            {step === 4 ? "Submit" : "Next"}
          </Btn>
        </FlexCenter>
      </FlexCol>
    </div>
  );
};

export default Form;
