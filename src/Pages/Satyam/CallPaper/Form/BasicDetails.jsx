// Third party imports
import { IoClose } from "react-icons/io5";
import styled from "styled-components";

// User imports
import Input from "../../../../Components/Input";
import { Flex, FlexCenter } from "../../../../Elements/Flex";

const ContainerInput = styled.div.attrs({
  className: "grid grid-cols-[1fr] md:grid-cols-[1fr_1fr] gap-6 md:gap-12",
})``;

const InputNumber = (props) => <Input type="number" {...props} />;
const InputDate = (props) => (
  <Input
    type="text"
    min={new Date()}
    placeholder="mm/dd/yyyy"
    onFocus={(event) => (event.target.type = "date")}
    onBlur={(event) => (event.target.type = "text")}
    {...props}
  />
);

const BasicDetails = ({
  details: { volume, issue, title, keywords, acceptanceTill, publishDate, acceptancePing, reviewPing },
  dispatcher,
}) => {
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
      <ContainerInput>
        <InputNumber
          value={volume}
          placeholder="123"
          label="Volume No."
          min={1}
          max={999}
          error_message="Please enter the valid volume no"
          onChange={inputChangeHandler.bind({ type: "update volume no", field: "volume" })}
        />
        <InputNumber
          value={issue}
          placeholder="1"
          label="Issue No."
          min={1}
          max={99}
          error_message="Please enter the valid issue no"
          onChange={inputChangeHandler.bind({ type: "update issue no", field: "issue" })}
        />
      </ContainerInput>

      {/* TODO decide the characters length */}
      <Input
        value={title}
        minLength={5}
        placeholder="TECHNOVATION-23"
        label="Volume Title"
        error_message="Title must be atleast 5 characters long"
        onChange={inputChangeHandler.bind({ type: "update title", field: "title" })}
      />

      <ContainerInput>
        <InputDate
          value={publishDate}
          label="Publishing Date"
          error_message="Please provide the valid publishing date"
          onChange={inputChangeHandler.bind({ type: "update publish date", field: "publishDate" })}
        />
        <InputDate
          value={acceptanceTill}
          label="Acceptance Till"
          error_message="Please provide the valid acceptance till"
          onChange={inputChangeHandler.bind({ type: "update acceptance till", field: "acceptanceTill" })}
        />
      </ContainerInput>

      <ContainerInput>
        {/* TODO decide the max and min value */}
        <InputNumber
          value={acceptancePing}
          placeholder="3"
          required={false}
          label="Acceptance ping duration (in days)"
          min={1}
          max={99}
          error_message="Please enter the valid acceptance ping duration"
          onChange={inputChangeHandler.bind({ type: "update acceptance ping", field: "acceptancePing" })}
        />
        <InputNumber
          value={reviewPing}
          placeholder="5"
          required={false}
          min={1}
          max={99}
          label="Review ping duration (in days)"
          error_message="Please provide the publish date"
          onChange={inputChangeHandler.bind({ type: "update review ping", field: "reviewPing" })}
        />
      </ContainerInput>

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
