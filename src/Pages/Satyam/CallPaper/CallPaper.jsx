// Third party imports
import { useState } from "react";
import Form from "./Form";

const CallPaper = () => {
  const [state, setState] = useState("form");
  const stateChangeHandler = () => setState((prev) => (prev === "details" ? "form" : "details"));

  return (
    <div className="ml-10 mr-4 my-6 px-3 py-2 bg-white rounded-lg">
      {state === "details" && (
        <>
          <h1 className="text-3xl font-ubuntu text-blue-600 font-bold">Call for paper</h1>
          <button onClick={stateChangeHandler}>Create</button>
        </>
      )}

      {state === "form" && <Form />}
    </div>
  );
};

export default CallPaper;
