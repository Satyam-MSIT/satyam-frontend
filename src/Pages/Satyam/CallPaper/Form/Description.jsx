// User imports
import Quill from "../../../../Components/Quill";
import { Flex } from "../../../../Elements/Flex";

const Description = ({
  details: {
    description: { content, length },
  },
  dispatcher,
}) => {
  const descChangeHandler = (value) => {
    const html = document.createElement("html");
    html.innerHTML = `<body>${value}</body>`;
    const length = html.textContent.length;
    dispatcher({ type: "update description", payload: { description: { content: value, length } } });
  };

  return (
    <div>
      <label for="desc" className="text-base text-[#555555]  ">
        Enter the description of the paper
      </label>
      <Quill id="desc" className=" h-56 mb-12 mt-4" value={content} onChangeHandler={descChangeHandler} />
      <Flex className="justify-between text-sm text-gray-500 tracking-wide">
        <p>Min Length : 100 characters</p>
        <p>Current Length : {length} characters</p>
      </Flex>
    </div>
  );
};

export default Description;
