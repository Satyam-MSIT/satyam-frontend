// Third party imports
import { useState } from "react";
import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";
import { CiMail } from "react-icons/ci";

// User imports
import { FlexCenter, FlexCol } from "../../../Elements/Flex";

const faqs = [
  {
    summary: "What are the benefits of regular exercise?",
    detail:
      "Improved cardiovascular health, increased strength, better mood.Improved cardiovascular health, increased strength, better mood.",
  },
  {
    summary: "How can I improve my sleep quality?",
    detail: "Maintain a consistent sleep schedule, create a relaxing bedtime routine.",
  },
  {
    summary: "What is the best diet for weight loss?",
    detail: "Balanced diet with whole foods like fruits, vegetables, lean proteins, and whole grains.",
  },
  {
    summary: "How can I reduce stress in my daily life?",
    detail: "Exercise regularly, practice deep breathing, engage in hobbies.",
  },
  {
    summary: "What are the symptoms of COVID-19?",
    detail: "Fever, cough, shortness of breath, fatigue, loss of taste or smell.",
  },
  {
    summary: "How can I protect myself from COVID-19?",
    detail: "Wash hands frequently, wear masks in public, practice physical distancing.",
  },
];

const Summary = styled.summary`
  &::marker {
    font-size: 0;
  }
  &::-webkit-details-marker {
    display: none;
  }
`;

const Container = styled.div.attrs({
  className: " border-2 w-full rounded-lg border-[#e0e5e9] bg-[#f9fafc]",
})``;

const highlight = "text-[#02020a] font-medium tracking-wide";

const FAQElement = ({ summary, detail }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const expandToggle = () => setIsExpanded((prev) => !prev);

  return (
    <Container as="details" onClick={expandToggle}>
      <Summary className="pr-3 pl-6 py-[.85rem] flex justify-between">
        <h3 className={highlight}>{summary}</h3>
        <IoIosArrowDown
          className={`text-xl text-blackGrey cursor-pointer transition-all duration-300 ${isExpanded && "rotate-180"}`}
        />
      </Summary>
      <p className="pr-3 pl-6 pt-1 pb-4  text-blackGrey leading-relaxed ">{detail}</p>
    </Container>
  );
};

const FAQ = () => {
  return (
    <section id="faq" className="relative mb-12">
      <h2 className="text-blackGrey text-5xl sm:text-6xl  font-bold leading-snug text-center mb-4 xsm:mb-6  sm:mb-8 md:mb-10 ">
        FAQs
      </h2>

      {/* Background ring for desktop */}
      <div className="absolute top-44 left-0 -z-20 -translate-x-1/2 border-[4.5rem] hidden md:block w-64 aspect-square border-[#deecff] rounded-full" />

      <FlexCol className="gap-4 items-center w-[90%] xsm:w-4/5 sm:w-3/4 md:w-[65%] lg:w-3/5 xl:w-1/2 max-w-screen-sm mx-auto">
        {faqs.map((faq) => (
          <FAQElement key={faq.summary} {...faq} />
        ))}

        <Container as={FlexCol} className="pr-3 pl-6 py-[.85rem]">
          <FlexCenter className="justify-between mb-3">
            <FlexCenter className="gap-3 flex-wrap text-blackGrey">
              <CiMail className="text-3xl " />
              <a href="mailto: satyamjournal@msit.in" className="text-wrap text-base font-mono tracking-wider">
                satyamjournal@msit.in
              </a>
            </FlexCenter>
            <Container
              as="a"
              href="mailto: satyamjournal@msit.in"
              className={`max-w-fit hidden sm:block bg-white px-4 hover:text-blue transition-all duration-300 py-2 ${highlight}`}>
              Contact Us
            </Container>
          </FlexCenter>
          <h3 className={`${highlight} text-lg`}>Have more questions?</h3>
          <p className="text-blackGrey ">Contact at our email with any question you have.</p>
        </Container>
      </FlexCol>
    </section>
  );
};

export default FAQ;
