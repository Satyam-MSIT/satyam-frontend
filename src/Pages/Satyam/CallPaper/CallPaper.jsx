// Third party imports
import { useState } from "react";
import styled from "styled-components";

// User imports
import Form from "./Form";
import Details from "./Details";

export const Btn = styled.button.attrs({
  className:
    "px-6 tracking-wider cursor-pointer hover:scale-[1.01] active:scale-95 py-[.4rem] rounded-md border-blue-600 border-2 transition-all  text-lg",
})``;

const CallPaper = () => {
  const [state, setState] = useState("details");
  const stateChangeHandler = () => setState((prev) => (prev === "details" ? "form" : "details"));

  return (
    <div className="ml-10 mr-4 my-6 px-3 py-2 bg-white rounded-lg">
      {state === "details" && <Details createCallHandler={stateChangeHandler} />}

      {state === "form" && <Form />}
    </div>
  );
};

export default CallPaper;
