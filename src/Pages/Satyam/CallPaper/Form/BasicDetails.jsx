// Third party imports
import { IoClose } from "react-icons/io5";

// User imports
import Input from "../../../../Components/Input";
import { Flex, FlexCenter } from "../../../../Elements/Flex";

const BasicDetails = ({ details: { volume, issue, title, keywords }, dispatcher }) => {
  function inputChangeHandler(event) {
    dispatcher({ type: this.type, payload: { [`${this.field}`]: event.target.value } });
  }

  const keywordKeyDownHandler = (event) => {
    const value = event.target.value;
    if (event.key === "Enter" && value) {
      event.target.value = "";
      if (keywords.filter((keyword) => keyword === value).length) return;
      dispatcher({ type: "update keywords", payload: { keywords: [value, ...keywords] } });
    }
  };

  const keywordDeleteHandler = (event) => {
    const value = event.target.dataset["keyword"];
    dispatcher({ type: "update keywords", payload: { keywords: keywords.filter((keyword) => keyword !== value) } });
  };

  return (
    <>
      <div className="grid grid-cols-[1fr] md:grid-cols-[1fr_1fr] gap-4 md:gap-12">
        <Input
          value={volume}
          type="number"
          placeholder="123"
          label="Volume No."
          min={1}
          max={999}
          error_message="Please enter the valid volume no"
          onChange={inputChangeHandler.bind({ type: "update volume no", field: "volume" })}
        />
        <Input
          value={issue}
          type="number"
          placeholder="1"
          label="Issue No."
          min={1}
          max={99}
          error_message="Please enter the valid issue no"
          onChange={inputChangeHandler.bind({ type: "update issue no", field: "issue" })}
        />
      </div>
      <Input
        value={title}
        placeholder="TECHNOVATION-23"
        label="Volume Title"
        error_message="Please provide the title."
        onChange={inputChangeHandler.bind({ type: "update title", field: "title" })}
      />

      <Input placeholder="Robotics" required={false} label="Keywords" onKeyDown={keywordKeyDownHandler} />
      {keywords.length > 0 && (
        <Flex className="flex-wrap gap-4">
          {keywords.map((keyword) => (
            <FlexCenter key={keyword} className="rounded-2xl text-darkgrey bg-[#f7f8fa] px-4  py-2 ">
              {keyword}
              <IoClose className="ml-3" data-keyword={keyword} onClick={keywordDeleteHandler} />
            </FlexCenter>
          ))}
        </Flex>
      )}
    </>
  );
};

export default BasicDetails;
