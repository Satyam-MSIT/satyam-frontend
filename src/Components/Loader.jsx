import { CenterAbsolute } from "../Elements/Center";
import { FlexCol } from "../Elements/Flex";
import Logo from "./Logo";

const Loader = () => {
  return (
    <FlexCol as={CenterAbsolute}>
      <div className="relative ">
        <Logo type="long" size={5} />
        <span className="absolute -bottom-2 left-0 block h-2 w-16  animate-[catcher_.75s_infinite_linear_alternate] rounded-3xl bg-blue" />
      </div>
    </FlexCol>
  );
};

export default Loader;
