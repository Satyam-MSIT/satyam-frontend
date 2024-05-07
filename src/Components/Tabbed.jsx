import { FlexCenter } from "../Elements/Flex";

const TabbedElement = ({ value, Icon, onClickHandler, isActive }) => {
  return (
    <FlexCenter
      onClick={onClickHandler}
      className={`cursor-pointer border-[1px] px-5 py-1  border-grey rounded-full transition-all duration-200 ${isActive && "!border-blue bg-[#e9ecfd] text-blue"}`}>
      {Icon && <Icon />}
      <p className="text-lg font-normal tracking-wide">{value}</p>
    </FlexCenter>
  );
};

const Tabbed = ({ className, elements, onClickHandler, active }) => {
  return (
    <FlexCenter className={`gap-4 ${className}`}>
      {elements.map((element) => (
        <TabbedElement
          {...element}
          isActive={element.value.toLowerCase() === active}
          onClickHandler={() => onClickHandler(element.value.toLowerCase())}
        />
      ))}
    </FlexCenter>
  );
};

export default Tabbed;
