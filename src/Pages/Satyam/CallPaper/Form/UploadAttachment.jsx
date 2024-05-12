// Third party imports
import { RiDeleteBin6Line } from "react-icons/ri";

// User imports
import InputFile from "../../../../Components/InputFile";
import { Flex, FlexCenter, FlexCol } from "../../../../Elements/Flex";
import PdfLogo from "./../../../../assets/img/pdfLogo.png";
import ImageLogo from "./../../../../assets/img/imageLogo.png";

const UploadAttachment = ({ details: { files }, dispatcher }) => {
  const fileAddHandler = (files) => {
    dispatcher({ type: "update files", payload: { files: files.filter((file) => file.size < 10 * 1024 * 1024) } });
  };

  const deleteFileHandler = (event) => {
    const name = event.target.dataset["file"];
    dispatcher({ type: "update files", payload: { files: files.filter((file) => file.name !== name) } });
  };

  return (
    <>
      <div className="text-gray-400 mb-4">
        <div className="h-64 mb-2">
          <InputFile multiple={true} accept=".pdf,image/*" files={files} fileAddHandler={fileAddHandler} />
        </div>
        <Flex className="justify-between text-sm text-gray-500 tracking-wide">
          <p>Supported formats : PDF, images</p>
          <p>Maximum Size : 10 MB</p>
        </Flex>
      </div>
      {files.map((file) => (
        <FlexCenter key={file.name} className="justify-between bg-[#f2f5f8] pl-4 pr-6 py-3 rounded-xl">
          <FlexCenter className="gap-4">
            <div className="p-2 bg-white rounded-md border-[1px]">
              <img
                className="w-8 object-contain"
                src={file.name.includes("pdf") ? PdfLogo : ImageLogo}
                alt={file.name.includes("pdf") ? "pdf" : "img"}
              />
            </div>
            <FlexCol className="gap-1">
              <p className="font-medium">{file.name}</p>
              <p className="text-sm text-darkgrey">{Math.floor((file.size * 100) / (1024 * 1024)) / 100} MB</p>
            </FlexCol>
          </FlexCenter>
          <RiDeleteBin6Line
            data-file={file.name}
            className="text-xl cursor-pointer  text-red-600 hover:text-red-900 hover:scale-105"
            onClick={deleteFileHandler}
          />
        </FlexCenter>
      ))}
    </>
  );
};

export default UploadAttachment;
