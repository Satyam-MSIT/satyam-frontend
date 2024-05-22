// Third party imports
import { Fragment } from "react";
import { FaCheck } from "react-icons/fa6";
import { clsx } from "clsx";

// User Imports
import { CenterAbsolute } from "../Elements/Center";

const StepProgressBar = ({ className, steps, current }) => {
  const stepArr = Array.from({ length: steps });
  const cols = stepArr
    .map((_, index) => (index + 1 < steps ? ".1fr 1fr" : ".1fr"))
    .join(" ");

  return (
    <div
      className={clsx("grid items-center gap-1 sm:gap-2 md:gap-3", className)}
      style={{
        gridTemplateColumns: cols,
      }}
    >
      {stepArr.map((_, index) => (
        <Fragment key={index}>
          <div
            className={clsx(
              "relative h-10 w-10  rounded-full border-[1px] border-gray-400 text-blackGrey",
              index + 1 === current && "bg-blue-600  text-white",
              index + 1 < current && "bg-blue-700 text-white",
            )}
          >
            <CenterAbsolute>
              {index + 1 < current ? (
                <FaCheck className="text-lg" />
              ) : (
                index + 1
              )}
            </CenterAbsolute>
          </div>
          {index + 1 < steps && (
            <div
              className={clsx(
                "h-2  rounded-full bg-[#e9ecfd]",
                index + 1 < current && "bg-blue-700",
              )}
            >
              <div
                className={clsx(
                  "h-full w-0 rounded-full bg-blue-600 transition-all",
                  index + 1 === current && "w-1/2",
                )}
              />
            </div>
          )}
        </Fragment>
      ))}
    </div>
  );
};

export default StepProgressBar;
