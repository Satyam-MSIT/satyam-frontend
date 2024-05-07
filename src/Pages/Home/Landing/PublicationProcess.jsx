// Third party imports
import { gsap } from "gsap";
import { useEffect, Fragment } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import { MdOutlineRateReview } from "react-icons/md";
import { MdOutlinePublishedWithChanges } from "react-icons/md";

// User imports
import { FlexCenter, FlexCol } from "../../../Elements/Flex";
import { Center } from "../../../Elements/Center";
import useDimensions from "../../../Hooks/useDimensions";

const steps = [
  {
    Icon: IoCloudUploadOutline,
    heading: "Submit Article",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's dummy text ever since the 1500s in less than one minute",
  },
  {
    Icon: MdOutlineRateReview,

    heading: "Peer Preview Process",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's dummy text ever since the 1500s in less than one minute",
  },
  {
    Icon: MdOutlinePublishedWithChanges,
    heading: "Paper Publish",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's dummy text ever since the 1500s in less than one minute",
  },
];

const PublicationProcessContent = ({ row, heading, desc }) => {
  const oddRow = row & 1;
  return (
    <FlexCenter
      className={`${oddRow ? "md:col-[2/3]" : "md:col-[1/2] md:flex-row-reverse"} my-6 xsm:my-8 sm:my-12 gap-8 xl:gap-12`}
      style={{
        gridRow: `${row}/${row + 1}`,
      }}>
      <FlexCenter className={`-mx-2  ${!oddRow && " md:rotate-180"} `}>
        <span className="inline-block w-4 h-4 bg-blackGrey rounded-full"></span>
        <span className="inline-block w-12 xsm:w-16 sm:w-20 h-[.3rem] bg-blackGrey -ml-2"></span>
      </FlexCenter>
      <FlexCol className={`content-${row} ${!oddRow && "md:items-end md:text-right"} content text-darkgrey`}>
        <Center className={`count-${row} w-12 h-12  text-white bg-blackGrey  text-xl rounded-full mb-4 font-semibold`}>
          {row}
        </Center>
        <h3 className="text-xl mb-2">{heading}</h3>
        <p className="text-base text-darkgrey ">{desc}</p>
      </FlexCol>
    </FlexCenter>
  );
};

const PublicationProcessIcon = ({ row, Icon }) => {
  const isMobile = useDimensions().width < 768;

  return (
    !isMobile && (
      <Center
        className={`icon-container-${row} ${row & 1 ? "col-[1/2]" : "col-[2/3]"} bg-white rounded-full p-10 border-4 border-blackGrey justify-self-center self-center`}
        style={{
          gridRow: `${row}/${row + 1}`,
        }}>
        <Icon className={`icon-${row} text-[3.25rem] text-blackGrey`} />
      </Center>
    )
  );
};

const PublicationProcess = () => {
  const isMobile = useDimensions().width < 768;

  useEffect(() => {
    const tl1 = gsap.timeline({ repeat: 1000 });
    const tl2 = gsap.timeline({ repeat: 1000 });
    const tl3 = gsap.timeline({ repeat: 1000 });
    const tl4 = gsap.timeline({ repeat: 1000 });

    Array.from({ length: steps.length }).map((_, index) => {
      tl1
        .to(`.content-${index + 1}`, { color: "#334EFF", duration: 2 })
        .to(`.content-${index + 1}`, { color: "black", duration: 1 });
      tl2
        .to(`.count-${index + 1}`, { background: "#334EFF", duration: 2 })
        .to(`.count-${index + 1}`, { background: "#373737", duration: 1 });
      if (!isMobile) {
        tl3
          .to(`.icon-${index + 1}`, { color: "#334EFF", scale: 1.4, opacity: 0.8, duration: 2 })
          .to(`.icon-${index + 1}`, { color: "#373737", scale: 1, opacity: 1, duration: 1 });
        tl4
          .to(`.icon-container-${index + 1}`, { borderColor: "#e9ecfd", duration: 2 })
          .to(`.icon-container-${index + 1}`, { borderColor: "#373737", duration: 1 });
      }
    });
  }, [steps]);

  return (
    <section id="publication-process" className="mb-20 px-6 xsm:px-8 sm:px-10 xl:px-12 mx-auto max-w-screen-xl">
      <h2 className="text-blackGrey text-3xl xxsm:text-4xl xsm:text-5xl sm:text-6xl  font-bold leading-snug text-center mb-3 xsm:mb-4  sm:mb-6 lg:mb-8">
        Publication process
      </h2>
      <p className="text-[#474b50] w-[90%] xsm:w-4/5 md:w-3/4 mx-auto tracking-wide text-[.8rem] xsm:text-base sm:text-lg text-center mb-12 leading-relaxed">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s
      </p>
      <div className="grid grid-cols-[1fr] relative md:grid-cols-[1fr_1fr]">
        <div className="absolute top-0 left-0 md:left-1/2 -translate-x-1/2 w-1 bg-[#373737] -z-10 h-full" />
        {steps.map((step, index) => (
          <Fragment key={step.heading}>
            <PublicationProcessIcon Icon={step.Icon} row={index + 1} />
            <PublicationProcessContent heading={step.heading} desc={step.desc} row={index + 1} />
          </Fragment>
        ))}
      </div>
    </section>
  );
};

export default PublicationProcess;
