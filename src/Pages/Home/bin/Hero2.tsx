import React from "react";
import { Btn, BtnBlack } from "../../../Elements/Button";
import { FlexCol } from "../../../Elements/Flex";

const Hero2 = ({
  heading,
  Name,
  Designation,
  Qualifications,
  Phone,
  Email,
  Area_of_Interest,
  Experience,
  Key_Publications,
  Patents,
  Awards_and_Recognitions,
  Books_published,
  Memberships,
  id,
}) => {
  return (
    <FlexCol className="mt-12 items-center">
      <h1 className="mb-6 text-6xl font-semibold">{heading}</h1>
      <p className="mb-12 w-3/4 text-center text-xl font-light leading-relaxed text-[#8A8A8A]"></p>
      <table>
        <tbody>
          <tr>Name: {Name}</tr>
          <tr>Designation: {Designation}</tr>
          <tr>Qualifications: {Qualifications}</tr>
          <tr>Phone: {Phone}</tr>
          <tr>Email: {Email}</tr>
          <tr>Area of Interest: {Area_of_Interest}</tr>
          <tr>Experience: {Experience}</tr>
        </tbody>
      </table>
      <h1 className="mb-6 text-6xl font-semibold">Key Publications</h1>
      <p className="mb-12 w-3/4 text-center text-xl font-light leading-relaxed text-[#8A8A8A]">{Key_Publications}</p>
      <h1 className="mb-6 text-6xl font-semibold">Patents</h1>
      <p className="mb-12 w-3/4 text-center text-xl font-light leading-relaxed text-[#8A8A8A]">{Patents}</p>
      <h1 className="mb-6 text-6xl font-semibold">Awards and Recognitions</h1>
      <p className="mb-12 w-3/4 text-center text-xl font-light leading-relaxed text-[#8A8A8A]">
        {Awards_and_Recognitions}
      </p>
      <h1 className="mb-6 text-6xl font-semibold">Book Chapter/Books published</h1>
      <p className="mb-12 w-3/4 text-center text-xl font-light leading-relaxed text-[#8A8A8A]">{Books_published}</p>
      <h1 className="mb-6 text-6xl font-semibold">Memberships of Professional bodies</h1>
      <p className="mb-12 w-3/4 text-center text-xl font-light leading-relaxed text-[#8A8A8A]">{Memberships}</p>
    </FlexCol>
  );
};

export default Hero2;
