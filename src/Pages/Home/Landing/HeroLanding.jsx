// Third party
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// User
import useDimensions from "../../../Hooks/useDimensions";
import { CenterCol } from "../../../Elements/Center";
import { BtnBlack } from "../../../Elements/Button";
import { Flex } from "../../../Elements/Flex";
import { getItem, setItem } from "../../../Functions/storage";

const HeroLanding = () => {
  const query = useQuery({
    queryKey: ["latestvolume"],
    queryFn: () => axios.get(`${import.meta.env.VITE_BACKEND_URL}/volume/latest`),
    staleTime: Infinity,
  });

  let label = getItem("current_volume") ?? "Getting the latest volume...";
  if (query.isSuccess) {
    if (query.data.data.success) {
      setItem("current_volume", query.data.data.title);
      label = query.data.data.title;
    } else {
      label = "Read Current Issue";
    }
  }

  if (query.isError) label = "Read Current Issue";

  return (
    <CenterCol as="main">
      <Flex
        as={Link}
        to="/issues/latest"
        className="mt-10 mb-8 xsm:mb-10 sm:mb-12  items-center gap-4 rounded-3xl bg-white py-[.4rem] pl-2 pr-4 shadow-[0_1px_10px_1px_rgba(0,0,0,.2)]">
        <button className="rounded-[2rem] bg-blue px-4 py-1  text-white">New</button>
        <span className="bold text-sm font-medium" title={label}>
          {label.length > 25 ? label.slice(0, 25) + "...." : label}
        </span>
        <FaAngleRight className="text-lg" />
      </Flex>

      <h1 className="mb-4 xsm:mb-6 sm:mb-8 text-2xl xxsm:text-[2rem] xsm:text-[2.5rem] sm:text-5xl md:text-6xl leading-10">
        <span className="font-semibold">MSIT</span> Journal of Research
      </h1>
      <h2 className="mb-8 text-3xl xsm:text-4xl sm:text-5xl font-bold leading-10 tracking-wider text-blue">SATYAM</h2>
      <p className="mb-8 w-11/12 xxsm:w-5/6 sm:w-3/5 md:w-1/2 text-center text-lg leading-relaxed text-[#8A8A8A]">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard
      </p>
      <BtnBlack as={Link} to="/author" className="mb-12 !text-lg px-8 py-3 xsm:px-8 sm:px-8 md:px-10 xxsm:!text-xl">
        Make Submission
      </BtnBlack>
    </CenterCol>
  );
};

export default HeroLanding;
