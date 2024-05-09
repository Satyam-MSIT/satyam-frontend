import { Fragment } from "react";
import { Center, CenterAbsolute } from "../Elements/Center";
import { FlexCenter } from "../Elements/Flex";
import { FaCheck } from "react-icons/fa6";

const StepProgressBar = ({ className, steps, current }) => {
  const stepArr = Array.from({ length: steps });
  const cols = stepArr.map((_, index) => `.1fr ${index + 1 < steps ? "1fr" : ""}`).join(" ");

  console.log(cols);

  return (
    <div
      className={`grid ${className} gap-1 sm:gap-2 md:gap-3 items-center`}
      style={{
        gridTemplateColumns: cols,
      }}>
      {Array.from({ length: steps }).map((_, index) => (
        <Fragment>
          <div
            className={` bg-yellow h-10 w-10 relative border-[1px] ${index + 1 <= current ? (index + 1 < current ? "text-white bg-blue-600" : "text-white  bg-blue-400") : "border-gray-400 text-blackGrey"} rounded-full justify-self-center`}>
            <CenterAbsolute>{index + 1 < current ? <FaCheck /> : index + 1}</CenterAbsolute>
          </div>

          {index + 1 < steps && (
            <div className={` rounded-full h-2 w-full ${index + 1 < current ? "bg-blue-600" : "bg-[#e9ecfd]"} `}>
              {index + 1 === current && <div className="w-1/2 bg-blue-400 h-full rounded-full" />}
            </div>
          )}
        </Fragment>
      ))}
    </div>
  );
};

export default StepProgressBar;
