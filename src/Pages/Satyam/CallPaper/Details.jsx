import { FlexCenter, FlexCol } from "../../../Elements/Flex";
import { useQuery } from "@tanstack/react-query";

import axios from "axios";
import Spinner from "../../../Components/Spinner";
import { Center, CenterAbsolute } from "../../../Elements/Center";
import { Btn, Heading } from "./CallPaper";
import { BtnBlue, BtnBlueFill } from "../../../Elements/Button";
import { IoAdd } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

const volumes = [
  {
    _id: "6623f172e03d055660dce972",
    number: "12312",
    title: "Satyam vol 11 (2022-23)",
    description: "desc of vol 12",
    keywords: ["science", "tech", "innovation"],
    acceptanceTill: "2024-08-01T00:00:00.000Z",
    publishDate: "2025-03-01T00:00:00.000Z",
    acceptancePing: 5,
    reviewPing: 5,
    createdAt: "2024-04-20T16:46:42.032Z",
    updatedAt: "2024-04-20T16:46:42.032Z",
  },
  {
    _id: "6623f172e03d055660dcss972",
    number: "12313",
    title: "Satyam vol 11 (2022-23)",
    description: "desc of vol 12",
    keywords: ["science", "tech", "innovation"],
    acceptanceTill: "2024-08-01T00:00:00.000Z",
    publishDate: "2025-03-01T00:00:00.000Z",
    acceptancePing: 5,
    reviewPing: 5,
    createdAt: "2024-04-20T16:46:42.032Z",
    updatedAt: "2024-04-20T16:46:42.032Z",
  },
];

const Volume = ({ data, isLatest }) => {
  const [state, setState] = useState("closed"); // "open" or "closed"
  const stateChangeHandler = () => setState((prev) => (prev === "closed" ? "open" : "closed"));

  return (
    <details
      open={state === "open"}
      className="shadow-[0_0_10px_1px_rgba(0,0,0,.2)] transition-all px-6 rounded-lg pb-5">
      <summary onClick={stateChangeHandler}>
        {isLatest && (
          <span className="inline-block text-white px-4 mt-3 -skew-x-[8deg] tracking-wider animate-[pulse_2s_infinite_linear]  rounded-sm py-[.1rem] bg-green-600 mb-2">
            Latest
          </span>
        )}

        <FlexCenter className="justify-between">
          <h2 className="text-lg">{data.title}</h2>
          <FlexCenter className="gap-6">
            <div className="font-semibold tracking-wide">
              Volume No : <span className="font-normal text-darkgrey">{data.number.slice(0, 3)}</span>
            </div>
            <div className="font-semibold">
              Issue No : <span className="font-normal text-darkgrey">{data.number.slice(3)}</span>
            </div>
            <IoIosArrowDown className={`ml-2 ${state === "open" && "rotate-180"} transition-all duration-200`} />
          </FlexCenter>
        </FlexCenter>
      </summary>
      <div className="font-semibold tracking-wide mt-4">
        Description : <span className="font-normal text-darkgrey">{data.description}</span>
      </div>
    </details>
  );
};

const Details = ({ stateChangeHandler }) => {
  const query = useQuery({
    queryKey: ["latestvolume"],
    queryFn: () => axios.get(`${import.meta.env.VITE_BACKEND_URL}/volume/all`),
    staleTime: Infinity,
  });

  return (
    <div className="min-h-screen ">
      <FlexCenter className="justify-between mb-8">
        <Heading>Call for Paper</Heading>
        <Btn as={BtnBlueFill} onClick={stateChangeHandler}>
          <FlexCenter className="gap-2">
            <IoAdd />
            Create
          </FlexCenter>
        </Btn>
      </FlexCenter>

      {query.isLoading && (
        <CenterAbsolute as={Center} className="gap-6   ">
          <Spinner thickness=".35rem" className="shrink-0 w-16 h-16 " />
          <h4 className="text-xl text-darkgrey">Crunching the latest data for you....</h4>
        </CenterAbsolute>
      )}

      {/* {query.isSuccess && JSON.stringify(query.data.data)} */}
      {/* {query.isSuccess &&
        query.data.data &&
        query.data.data.volumes.map((volume, index) => (
          <Volume key={volume._id} isLatest={index === 0} data={volume} />
        ))} */}

      {query.isSuccess && query.data.data && (
        <FlexCol className="gap-5">
          {volumes.map((volume, index) => (
            <Volume key={volume._id} isLatest={index === 0} data={volume} />
          ))}
        </FlexCol>
      )}
    </div>
  );
};

export default Details;
