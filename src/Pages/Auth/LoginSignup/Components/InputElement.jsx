import styled from "styled-components";

import { AiOutlineEye, AiFillEyeInvisible } from "react-icons/ai";
import { FlexCol } from "../../../../Elements/Flex";
import { useState } from "react";

const PasswordIcon = styled.svg.attrs({
  className:
    "absolute right-[1%] top-[37%] -translate-x-1/2 -translate-y-1/2 text-2xl text-gray-600 peer-placeholder-shown:top-[50%] peer-valid:top-[50%]",
})``;

const InputElement = ({ label, error_message, ref, inputOptions }) => {
  const [inputType, setInputType] = useState(inputOptions.type);

  const inputTypeToggleHandler = () =>
    setInputType((inputType) =>
      inputType === "password" ? "text" : "password",
    );

  return (
    <FlexCol className="gap-2">
      <label
        htmlFor={label.toLowerCase()}
        className="text-lg text-[#555555] transition-all md:text-base"
      >
        {label}
      </label>
      <div className="relative">
        <input
          ref={ref}
          {...inputOptions}
          type={inputType}
          id={label.toLowerCase()}
          className={`peer mb-1 w-full rounded-xl  border-[1.5px] px-5 py-4 transition-all placeholder:text-[#aaaaaa] placeholder-shown:border-gray-300  invalid:border-red-400 placeholder-shown:invalid:border-gray-300 focus:outline-none focus:valid:border-blue focus:valid:shadow-[0_0_10px_1px_rgba(51,78,255,0.4)] focus:invalid:border-red-400  focus:invalid:shadow-[0_0_10px_1px_rgba(255,0,0,.3)] md:mb-0 md:py-[.7rem] ${inputOptions.type === "password" ? "tracking-widest" : ""}`}
        />
        {inputOptions.type === "password" &&
          (inputType === "password" ? (
            <PasswordIcon as={AiOutlineEye} onClick={inputTypeToggleHandler} />
          ) : (
            <PasswordIcon
              as={AiFillEyeInvisible}
              onClick={inputTypeToggleHandler}
            />
          ))}
        <p className=" text-sm transition-all peer-placeholder-shown:hidden peer-valid:hidden peer-invalid:text-red-500">
          {error_message}
        </p>
      </div>
    </FlexCol>
  );
};

export default InputElement;
