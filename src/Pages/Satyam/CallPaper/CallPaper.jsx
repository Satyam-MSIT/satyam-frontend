// Third party imports
import { useState } from "react";
import styled from "styled-components";

// User imports
import Form from "./Form/Form";
import Details from "./Details";
import { BtnBase } from "../../../Elements/Button";

export const Btn = styled(BtnBase).attrs({
  className:
    "tracking-wider  duration-100 ease-in-out active:scale-[.98] border-2 text-lg",
})``;

export const Heading = styled.h1.attrs({
  className:
    "text-2xl xsm:text-3xl sm:text-4xl text-blue-800  font-semibold  tracking-wide",
})``;

const CallPaper = () => {
  const [state, setState] = useState("form"); // "form" or "details"
  const stateChangeHandler = () =>
    setState((prev) => (prev === "details" ? "form" : "details"));

  return (
    <main className="mx-4 my-8 md:m-8 md:mr-10">
      {state === "details" ? (
        <Details stateChangeHandler={stateChangeHandler} />
      ) : (
        <Form stateChangeHandler={stateChangeHandler} />
      )}
    </main>
  );
};

export default CallPaper;
