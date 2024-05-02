import { Center, CenterCol } from "../../../Elements/Center";
import { FlexCol } from "../../../Elements/Flex";
import Upload from "./../../../assets/img/icons/alternate-cloud-upload (1).svg";
import Review from "./../../../assets/img/icons/task-view (1).svg";
import Publish from "./../../../assets/img/icons/upload (1).svg";

const PublicationProcessElement = ({ align, data }) => {
  return (
    <div className=" grid grid-cols-[1fr_4px_1fr] pb-32" dir={align === "left" ? "rtl" : "ltr"}>
      <div className="self-center justify-self-center  rounded-full border-8 border-gray-300 p-6">
        <img src={data.icon} className="aspect-square w-20 " />
      </div>
      <div className="bg-darkgrey"></div>
      <FlexCol className={` justify-center  border-gray-600 pb-8  pt-8 ${align === "left" ? "pr-16" : "pl-16"}`}>
        <Center className=" mb-5 h-10 w-10  rounded-full  bg-blue text-xl text-white">{data.content.no}</Center>
        <h3 className="mb-1 text-xl">{data.content.heading}</h3>
        <p className="text-sm text-darkgrey">{data.content.desc}</p>
      </FlexCol>
    </div>
  );
};

const PublicationProcess = () => {
  return (
    <>
      <CenterCol className="gap-8 pt-32">
        <h2 className="text-6xl font-semibold leading-10">Publication Process</h2>
        <p className=" w-3/4 text-center leading-relaxed ">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s
        </p>
        <div className="w-3/4">
          <PublicationProcessElement
            align={"right"}
            data={{
              icon: Upload,
              content: {
                no: 1,
                heading: "Submit Article",
                desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's dummy text ever since the 1500s in less than one minute",
              },
            }}
          />
          <PublicationProcessElement
            align={"left"}
            data={{
              icon: Review,
              content: {
                no: 2,
                heading: "Peer Preview Process",
                desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's dummy text ever since the 1500s in less than one minute",
              },
            }}
          />
          <PublicationProcessElement
            align={"right"}
            data={{
              icon: Publish,
              content: {
                no: 3,
                heading: "Paper Publish",
                desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's dummy text ever since the 1500s in less than one minute",
              },
            }}
          />
        </div>
      </CenterCol>
    </>
  );
};

export default PublicationProcess;
