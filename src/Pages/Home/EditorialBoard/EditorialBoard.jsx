// Third party imports
import { FaArrowDownLong } from "react-icons/fa6";

// User imports
import { BtnBlack } from "../../../Elements/Button";
import { FlexCenter } from "../../../Elements/Flex";
import Grid from "../Landing/Grid";

const Element = ({ name }) => {
  return (
    <FlexCenter>
      <img src="" />
      <div>
        <h3>{name}</h3>
      </div>
    </FlexCenter>
  );
};

const EditorialBoard = () => {
  return (
    <main id="editorial-board" className="relative">
      <Grid />
      <section id="editorial-board-hero" className="py-20">
        <h1 className="text-center text-6xl max-w-3/4 text-[#171717] tracking-tight mb-8">
          Meet the Talented Team Behind Our Success
        </h1>
        <h2 className="text-lg text-center w-3/5 mx-auto mb-10 text-[#6b7280]">
          Our team of experts is dedicated to delivering exceptional products and services to our customers. Get to know
          the individuals who make it all happen.
        </h2>

        <BtnBlack as={FlexCenter} className="mx-auto rounded-xl w-fit gap-4 px-8 !py-2 cursor-pointer justify-center ">
          <span>Meet the team</span>
          <FaArrowDownLong className="" />
        </BtnBlack>
      </section>
    </main>
  );
};

export default EditorialBoard;
