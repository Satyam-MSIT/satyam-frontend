// Third party imports
import { useRef } from "react";
import { TbUpload } from "react-icons/tb";

// User imports
import { Center } from "../Elements/Center";

const InputFile = ({ files, fileAddHandler, multiple = false, accept }) => {
  const inputRef = useRef();

  const dragOverHandler = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const dropHandler = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const { files: inputFile } = event.dataTransfer;
    if (inputFile && inputFile.length > 0) {
      fileAddHandler([...files, ...inputFile]);
    }
  };

  const changeHandler = (event) => {
    fileAddHandler([...files, ...event.target.files]);
  };

  return (
    <>
      <Center
        as="label"
        ref={inputRef}
        onDragOver={dragOverHandler}
        onDrop={dropHandler}
        htmlFor="attachments"
        className="flex-col gap-5  min-w-fit min-h-fit w-full rounded-md border-[3px] cursor-pointer border-blue-600 border-dashed h-full bg-[#f2f7ff] group">
        <TbUpload className="text-4xl text-darkgrey group-hover:text-blue-600 transition-all" />
        <p className="font-medium text-wrap tracking-widest">
          Drag & Drop or <span className=" text-blue-600">Choose file</span> to upload
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
