// Third party imports
import { useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { IoIosArrowDown } from "react-icons/io";
import { clsx } from "clsx";

// User imports
import { Flex, FlexCenter, FlexCol } from "../../../Elements/Flex";
import Spinner from "../../../Components/Spinner";
import { Center, CenterAbsolute } from "../../../Elements/Center";
import { Btn, Heading } from "./CallPaper";

const Volume = ({ volume, isActive }) => {
  console.log(volume);

  const [isExpanded, setIsExpanded] = useState(false);
  const expandHandler = () => setIsExpanded((prev) => !prev);

  return (
    <details
      className={clsx(
        "rounded-xl px-6 py-5 transition-all",
        isActive
          ? "border-woodsmoke-900 border-2"
          : "shadow-[0_0_10px_1px_rgba(0,0,0,.2)]",
      )}
    >
      <Flex as="summary" onClick={expandHandler} className="justify-between">
        <FlexCol className="gap-1">
          <h2 className="text-lg font-semibold">{volume.title}</h2>
          <FlexCenter className="text-pale-sky-600 gap-4">
            <span>Volume&nbsp; {parseInt(`${volume.number}`.slice(0, 3))}</span>
            <span className="bg-pale-sky-500 inline-block h-[80%] w-[1.5px]"></span>
            <span>Issue&nbsp; {parseInt(`${volume.number}`.slice(3))}</span>
          </FlexCenter>
        </FlexCol>
        <IoIosArrowDown
          className={clsx(
            "text-xl transition-all duration-200",
            isExpanded && "rotate-180",
          )}
        />
      </Flex>
      <div className=" font-semibold tracking-wide">Description :</div>
    </details>
  );
};

const Details = ({ stateChangeHandler }) => {
  const query = useQuery({
    queryKey: ["allvolume"],
    queryFn: () => axios.get(`${import.meta.env.VITE_BACKEND_URL}/volume/all`),
    staleTime: Infinity,
  });

  return (
    <div className="min-h-screen">
      <FlexCenter className="mb-12 flex-wrap justify-between gap-2">
        <Heading>Call For Paper</Heading>
        <Btn
          className="border-none bg-blue-800 px-3 py-[.65rem] text-[.9rem] text-white hover:bg-blue-900 xsm:px-4 xsm:text-base  sm:px-6  sm:text-[1.1rem]"
          onClick={stateChangeHandler}
        >
          Create New Call
        </Btn>
      </FlexCenter>

      {query.isLoading && (
        <CenterAbsolute
          as={Center}
          className=" w-full flex-col gap-8 md:flex-row"
        >
          <Spinner $thickness=".35rem" className=" h-16 w-16 shrink-0 " />
          <h4 className="text-woodsmoke-800 text-lg tracking-wide">
            Loading the most recent data
            <span className="tracking-widest">....</span>
          </h4>
        </CenterAbsolute>
      )}

      {query.isSuccess && query.data.data && (
        <FlexCol className="gap-7">
          {query.data.data.volumes
            .sort(
              (a, b) =>
                new Date(b.createdAt).getTime() -
                new Date(a.createdAt).getTime(),
            )
            .map((volume) => (
              <Volume
                key={volume._id}
                isActive={volume.status !== "published"}
                volume={volume}
              />
            ))}
        </FlexCol>
      )}
    </div>
  );
};

export default Details;
