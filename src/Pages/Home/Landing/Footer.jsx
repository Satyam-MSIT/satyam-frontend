import Logo from "./../../../Components/Logo";
import { Flex, FlexCenter, FlexCol } from "./../../../Elements/Flex";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Info = ({ Icon, data, link }) => {
  return (
    <FlexCenter className="gap-4">
      <Icon />
      <a href={link}>{data}</a>
    </FlexCenter>
  );
};

const FooterSection = ({ heading, links }) => {
  return (
    <div>
      <h4>{heading}</h4>
      {links.map((link) => (
        <Link key={link.link} to={link.link}>
          {link.content}
        </Link>
      ))}
    </div>
  );
};

const Footer = () => {
  return (
    <section id="footer" className="grid items-start grid-cols-[.4fr_1fr] gap-32 grid-flow-row  px-6">
      <FlexCol>
        <Logo size={3} className="mb-2" />
        <p className="mb-4">Satyam - Journal of research MSIT</p>
        <FlexCol className="gap-2">
          <Info Icon={IoCallOutline} data="+91 88888-88888" />
          <Info Icon={CiMail} data=" satyamjournal@msit.in" />
          <Info Icon={CiLocationOn} data="C-4 MARKET, Fire Station Rd, Janakpuri, New Delhi, Delhi, 110058" />
        </FlexCol>
      </FlexCol>
      <Flex className="flex-wrap justify-between">
        <FooterSection heading="Getting Started" links={[{ link: "/egegf", content: "eguifgiuewui" }]} />
        About Us Contact Us Submission Guidelines Copyright Information Privacy Policy Terms of Use
        <FooterSection heading="About" links={[{ link: "/#aboutus", content: "eguifgiuewui" }]} />
        <FooterSection heading="Getting Started" links={[{ link: "egfiegufu", content: "eguifgiuewui" }]} />
      </Flex>
    </section>
  );
};

export default Footer;
