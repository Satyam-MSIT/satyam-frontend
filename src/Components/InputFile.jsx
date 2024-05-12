// Third party imports
import { useRef } from "react";
import { FaPlus } from "react-icons/fa6";

// User imports
import { Center } from "../Elements/Center";

const InputFile = ({ file, fileAddHandler, multiple = false, accept }) => {
  const inputRef = useRef();

  const dragOverHandler = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };
  const dropHandler = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const { files } = event.dataTransfer;
    if (files && files.length > 0) {
      fileAddHandler([...file, ...files]);
    }
  };

  const changeHandler = (event) => {
    fileAddHandler([...file, ...event.target.files]);
  };

  return (
    <>
      <Center
        as="label"
        ref={inputRef}
        onDragOver={dragOverHandler}
        onDrop={dropHandler}
        htmlFor="attachments"
        className="flex-col gap-5  min-w-fit min-h-fit w-full rounded-md border-[3px] cursor-pointer border-blue-700 border-dashed h-full bg-[#f2f7ff] ">
        <div className="bg-blue-700 p-3 rounded-full text-white text-xl">
          <FaPlus />
        </div>
        <p className="text-black font-medium tracking-wider">
          Drag and Drop file here or <span className="underline underline-offset-2">Choose file</span>
        </p>
      </Center>
      <input
        type="file"
        accept={accept}
        id="attachments"
        multiple={multiple}
        className="opacity-0"
        onChange={changeHandler}
      />
    </>
  );
};

export default InputFile;
