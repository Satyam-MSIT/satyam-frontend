// Third party imports
import { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { FaArrowDown } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";

// User imports
import useHash from "../../../Hooks/useHash";
import { BtnBlack } from "../../../Elements/Button";
import { FlexCenter, FlexCol } from "../../../Elements/Flex";
import Grid from "../Landing/Grid";
import data from "./data";

const animateDown = keyframes`
  to{
    transform : translate(0,.15rem)  ;
    opacity:.92;
  }
`;

const AnimateDown = styled(BtnBlack)`
  animation: ${animateDown} 0.75s ease-in-out alternate infinite;
`;

const HeadingHiglighter = styled.div.attrs({
  className: "bg-woodsmoke-950 mb-2 h-[.4rem] -skew-x-12",
})``;

const NavigationLink = styled.a.attrs({
  className: "text-base lg:text-lg text-blue-600 tracking-wide",
})``;

const Element = ({ className, data: { name, designation, email } }) => {
  return (
    <div className={className}>
      <h4 className=" mb-2  text-blue-800">{name}</h4>
      <p className="text-pale-sky-800 mb-2 text-[75%]">{designation}</p>
      {email && (
        <FlexCenter className="gap-4">
          <CiMail className="text-pale-sky-700" />
          <a href={`mailto:${email}`} className="text-woodsmoke-950 text-[70%]">
            {email}
          </a>
        </FlexCenter>
      )}
    </div>
  );
};

const EditorialBoard = () => {
  useHash();

  const editorialBoardMainRef = useRef();
  const showEditorialBoard = () => {
    editorialBoardMainRef?.current?.scrollIntoView({ behaviour: "smooth" });
  };

  useEffect(() => {
    setTimeout(() => {
      if (window.scrollY === 0) showEditorialBoard();
    }, 1500);
  }, []);

  return (
    <main id="editorial-board" className="mb-16">
      {/* Hero Section */}
      <section id="editorial-board-hero" className="relative py-16">
        <Grid />
        <h1 className="text-woodsmoke-950 mx-auto mb-8 max-w-[95%] text-center text-4xl leading-normal tracking-tight xsm:max-w-[90%]  sm:text-5xl sm:leading-[1.6] md:text-6xl md:leading-snug">
          Meet the Talented Team Behind Our Success
        </h1>
        <h2 className="text-pale-sky-500 mx-auto mb-10 max-w-[85%] text-center text-base xsm:max-w-[80%] sm:max-w-[70%] sm:text-lg md:max-w-[60%]">
          Our team of experts is dedicated to delivering exceptional products
          and services to our customers. Get to know the individuals who make it
          all happen.
        </h2>

        <AnimateDown
          as={FlexCenter}
          onClick={showEditorialBoard}
          className="mx-auto w-fit cursor-pointer  justify-center gap-3 rounded-xl !py-3 pl-14 pr-10 text-xl"
        >
          <span>Meet the team</span>
          <FaArrowDown className="text-lg" />
        </AnimateDown>
      </section>

      {/* Editorial Board */}
      <div
        className="mx-auto grid max-w-screen-xl justify-between gap-12 px-6 xsm:px-8 md:grid-cols-[4fr_1fr] md:px-12 "
        ref={editorialBoardMainRef}
      >
        <FlexCol as="section" id="editorial-board-main" className=" gap-12 ">
          <div id="chief-editor" className="pt-12">
            <HeadingHiglighter className="w-12"></HeadingHiglighter>
            <h3 className="mb-4 text-4xl">Chief Editor</h3>
            <Element className="text-2xl" data={data["chief-editor"]} />
          </div>
          <div id="managing-editor">
            <HeadingHiglighter className="w-10"></HeadingHiglighter>
            <h3 className="mb-4 text-3xl">Managing Editor</h3>
            <Element className="text-[1.4rem]" data={data["managing-editor"]} />
          </div>
          <div id="editor">
            <HeadingHiglighter className="w-8"></HeadingHiglighter>
            <h3 className="mb-3 text-2xl">Editors</h3>
            <FlexCol as="ul" className="gap-3">
              {data["editors"].map((editor) => (
                <li key={editor.name + editor.designation}>
                  <Element className="text-[1.3rem]" data={editor} />
                </li>
              ))}
            </FlexCol>
          </div>
          <div id="student-editor">
            <HeadingHiglighter className="w-7"></HeadingHiglighter>
            <h3 className="mb-3 text-xl">Student Editors</h3>
            <FlexCol as="ul" className="gap-3">
              {data["student-editors"].map((student) => (
                <li key={student.name + student.designation}>
                  <Element className="text-[1.2rem]" data={student} />
                </li>
              ))}
            </FlexCol>
          </div>
        </FlexCol>
        <div className="relative hidden pt-12 md:block">
          <FlexCol className="sticky top-12 gap-3">
            <NavigationLink href="#chief-editor">Chief Editor</NavigationLink>
            <NavigationLink href="#managing-editor">
              Managing Editor
            </NavigationLink>
            <NavigationLink href="#editor">Editors</NavigationLink>
            <NavigationLink href="#student-editor">
              Student Editor
            </NavigationLink>
          </FlexCol>
        </div>
      </div>
    </main>
  );
};

export default EditorialBoard;
