import { Btn, BtnBlack } from "../../../Elements/Button";
import { FlexCol } from "../../../Elements/Flex";

const Hero1 = ({ heading, desc, id }) => {
  return (
    <FlexCol className="mt-12 items-center">
      <h1 className="mb-6 text-6xl font-semibold">{heading}</h1>
      <p className="mb-12 w-3/4 text-center text-xl font-light leading-relaxed text-[#8A8A8A]">{desc}</p>
    </FlexCol>
  );
};

export default Hero1;
