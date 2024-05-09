// Third party imports
import { useState } from "react";

// User imports
import Quill from "../../../Components/Quill";
import StepProgressBar from "../../../Components/StepProgressBar";

const CallPaper = () => {
  const [step, setStep] = useState(2);
  const [desc, setDesc] = useState("");
  const changeDescHandler = (value) => setDesc(value);
  console.log(desc);

  return (
    <div>
      <StepProgressBar className="mx-12 my-2" steps={3} current={step} />
      <Quill className="h-screen" value={desc} onChangeHandler={changeDescHandler} />
    </div>
  );
};

export default CallPaper;
