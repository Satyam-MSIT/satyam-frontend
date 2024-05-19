// Third party imports
import { useState } from "react";
import styled from "styled-components";

// User imports
import Form from "./Form/Form";
import Details from "./Details";
import { BtnBase } from "../../../Elements/Button";

export const Btn = styled(BtnBase).attrs({
  className: " tracking-wider hover:scale-[1.05] duration-50 active:scale-[.98] border-2 text-lg",
})``;

export const Heading = styled.h1.attrs({
  className: "text-4xl text-blue-600 font-semibold  tracking-wide",
})``;

const CallPaper = () => {
  const [state, setState] = useState("form"); // "form" or "details"
  const stateChangeHandler = () => setState((prev) => (prev === "details" ? "form" : "details"));

  return (
    <div className="ml-6  mr-4 my-6 p-6 bg-white rounded-lg">
      {state === "details" && <Details stateChangeHandler={stateChangeHandler} />}
      {state === "form" && <Form stateChangeHandler={stateChangeHandler} />}
    </div>
  );
};

export default CallPaper;
