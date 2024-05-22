import Logo from "../../Components/Logo";
import { Flex, FlexCenter, FlexCol } from "../../Elements/Flex";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { SlLocationPin } from "react-icons/sl";

const footerSections = [
  {
    heading: "Getting Started",
    links: [
      { link: "#aboutus", content: "About us" },
      { link: "/guidelines", content: "Submission Guideliness" },
      { link: "/copyrightform", content: "Copyright form" },
    ],
  },
];

const Info = ({ Icon, data, href }) => {
  return (
    <>
      {/* <FlexCenter className="gap-4"> */}
      <Icon className="text-xl" />
      <a href={href} className="justify-self-start">
        {data}
      </a>
      {/* </FlexCenter> */}
    </>
  );
};

const FooterSection = ({ heading, links }) => {
  return (
    <div>
      <h4>{heading}</h4>
      {links.map((link) => (
        <Link key={link.link} to={link.link} onClick={link.onClickHandler}>
          {link.content}
        </Link>
      ))}
    </div>
  );
};

const Footer = () => {
  return (
    <section
      id="footer"
      className="grid grid-flow-row grid-cols-[.4fr_1fr] items-start gap-32  px-6"
    >
      <FlexCol>
        <Logo size={3} className="mb-2" />
        <p className="mb-4">Satyam - Journal of research MSIT</p>
        <div className="grid grid-cols-[.1fr_1fr] items-center justify-items-center gap-3">
          <Info
            Icon={IoCallOutline}
            data="+91 88888-88888"
            href="tel:+918888888888"
          />
          <Info
            Icon={CiMail}
            data=" satyamjournal@msit.in"
            href="mailto: satyamjournal@msit.in"
          />
          <Info
            Icon={SlLocationPin}
            data="C-4 MARKET, Fire Station Rd, Janakpuri, New Delhi, Delhi, 110058"
          />
        </div>
      </FlexCol>

      <Flex className="flex-wrap justify-between">
        <FooterSection heading="Getting Started" links={[]} />
        About Us Contact Us Submission Guidelines Copyright Information Privacy
        Policy Terms of Use
        <FooterSection
          heading="About"
          links={[{ link: "/#aboutus", content: "eguifgiuewui" }]}
        />
        <FooterSection
          heading="Getting Started"
          links={[{ link: "egfiegufu", content: "eguifgiuewui" }]}
        />
      </Flex>
    </section>
  );
};

export default Footer;
