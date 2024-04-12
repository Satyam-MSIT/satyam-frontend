// Third party
import { useState } from "react";
import { FaChevronRight } from "react-icons/fa6";

// User
import { NavLink, Link } from "react-router-dom";
import { Center, CenterCol } from "../Elements/Center";
import { FlexCol } from "../Elements/Flex";

import Settings from "./../assets/img/icons/satyam_sidebar/settings.svg";
import ArrowRight from "./../assets/img/icons/chevron-right.svg";

// type link={
//   icon:Object,
//   link:string,
//   name:string
// }

const LinkElement = ({ link, icon, iconActive, name, navState, className }) => {
  return (
    <NavLink to={link} className={`flex items-center gap-6 ${className} group`}>
      <img
        title={name}
        src={icon}
        id="sidebar"
        className="aspect-square w-6  "
      />
      {navState === "show" && (
        <span className="transition-all group-[.active]:text-blue">{name}</span>
      )}
    </NavLink>
  );
};

const SideBar = ({ links }) => {
  const [navState, setNavState] = useState("collapsed"); //collapsed or show

  const handleNavState = () => {
    setNavState((prevState) =>
      prevState === "collapsed" ? "show" : "collapsed",
    );
  };

  return (
    <FlexCol
      as="aside"
      className="relative min-w-max items-center justify-between gap-10 rounded-xl bg-black px-8 py-6"
      style={{
        minHeight: "calc(100vh - 2rem)",
      }}
    >
      {/* Show Button */}
      <Center
        as="button"
        className="absolute left-full top-[12%] h-9 w-9 -translate-x-1/2 rounded-full bg-[#f5f5f5] shadow-lg  transition-all hover:bg-blue hover:text-white "
        onClick={handleNavState}
      >
        <FaChevronRight
          className={`${navState === "show" ? "rotate-180" : ""} `}
        />
      </Center>

      {/* Icon and other links */}
      <CenterCol className="items-center gap-16">
        {navState === "collapsed" && (
          <Link to="" className=" text-4xl font-bold text-blue">
            S
          </Link>
        )}
        {navState === "show" && (
          <Link to="">
            <img
              src="./../logo.png"
              alt="Satyam"
              className=" aspect-auto w-36"
            />
          </Link>
        )}
        <FlexCol className="items-center gap-10">
          {links.map((link) => (
            <LinkElement key={link.link} {...link} navState={navState} />
          ))}
        </FlexCol>
      </CenterCol>

      {/* Settings */}
      <LinkElement
        link="settings"
        icon={Settings}
        navState={navState}
        name="Settings"
      />
    </FlexCol>
  );
};

export default SideBar;
