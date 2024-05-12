import { FlexCenter } from "../../../Elements/Flex";
import { useQuery } from "@tanstack/react-query";

import axios from "axios";
import Spinner from "../../../Components/Spinner";
import { Center, CenterAbsolute } from "../../../Elements/Center";
import { Btn } from "./CallPaper";

const Details = ({ createCallHandler }) => {
  const query = useQuery({
    queryKey: ["latestvolume"],
    queryFn: () => axios.get(`${import.meta.env.VITE_BACKEND_URL}/volume/latest`),
    staleTime: Infinity,
  });

  return (
    <>
      <FlexCenter className="justify-between">
        <h1 className="text-[2rem] text-blue-600 font-bold text-center tracking-wide">Call for Paper</h1>
        <Btn className="border-blue-600 text-blue-600 " onClick={createCallHandler}>
          Create call for paper
        </Btn>
      </FlexCenter>

      <Center className="h-screen ">
        {query.isLoading && (
          <CenterAbsolute as={Center} className="gap-6">
            <Spinner thickness=".35rem" className="shrink-0 w-16 h-16 " />
            <h4 className="text-xl">Crunching the latest data for you ....</h4>
          </CenterAbsolute>
        )}
        {query.isSuccess && query.data.data && <div>{JSON.stringify(query.data.data)}</div>}
      </Center>
    </>
  );
};

export default Details;
