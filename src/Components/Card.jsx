import { FlexCol } from "../Elements/Flex";

const Card = ({ Icon, title, desc }) => {
  return (
    <FlexCol className="items-start px-6 rounded-lg pt-6 pb-10  bg-[rgba(255,255,255,1)] duration-200 hover:bg-white transition-all cursor-pointer hover:shadow-xl group">
      <div className="rounded-md border-2 transition-all duration-300 group-hover:bg-[#e9ecfd] border-blue p-3 text-lg mb-6">
        <Icon className="text-blue" />
      </div>
      <h4 className="text-[#373737] text-lg font-bold mb-2">{title}</h4>
      <p className="text-[#474b50] text-left tracking-wide">{desc}</p>
    </FlexCol>
  );
};

export default Card;
