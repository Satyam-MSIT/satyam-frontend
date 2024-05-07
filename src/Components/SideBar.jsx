// Third party imports
import { NavLink, Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

// User imports
import Logo from "./Logo";
import { FlexCol } from "../Elements/Flex";
import useDimensions from "../Hooks/useDimensions";

const LinkElementWithChild = ({ Icon, title, subLinks, navState, onClickHandler, className }) => {
  const path = window.location.pathname;
  let isActive = false;

  for (const { link } of subLinks) {
    if (path === link) {
      isActive = true;
      break;
    }
  }

  return (
    <div className={`grid grid-cols-[1fr_5fr] gap-4 items-center ${className} `}>
      <Icon className={`text-[1.7rem] text-[#9897b1] ${isActive && "text-blue"}`} />
      {navState === "open" && <p className={`transition-all text-xl ${isActive && "text-blue"}`}>{title}</p>}

      <FlexCol className="col-[2/3] gap-3 items-start">
        {subLinks.map(({ link, title, onClickHandlerCustom }) =>
          link ? (
            <NavLink key={title} to={link} onClick={onClickHandler} className="group">
              <p className={`group-[.active]:text-blue`}>{title}</p>
            </NavLink>
          ) : (
            <button
              key={title}
              onClick={() => {
                onClickHandler();
                onClickHandlerCustom();
              }}>
              {title}
            </button>
          )
        )}
      </FlexCol>
    </div>
  );
};

const LinkElement = ({ link, Icon, title, navState, onClickHandler, className, isMobile }) => {
  return (
    <NavLink
      to={link}
      className={`group flex items-center gap-4 ${className}`}
      title={title}
      onClick={isMobile && onClickHandler}>
      <Icon className="text-[1.7rem] text-[#9897b1] group-[.active]:text-blue" />
      {navState === "open" && <p className="transition-all group-[.active]:text-blue">{title}</p>}
    </NavLink>
  );
};

const SideBar = ({ links, navState, navStateToggleHandler: handleNavStateToggle }) => {
  const isMobile = useDimensions()?.width < 768;

  return (
    <>
      <FlexCol
        as="aside"
        className={`${navState === "open" && isMobile && "animate-[slideRight_.3s_ease-out_forwards] pr-10 "} top-0 fixed -left-[120%] z-20 h-screen md:h-fit md:min-h-screen overflow-y-scroll md:overflow-visible  gap-12 bg-white  px-7 pb-20 pt-12 transition-all md:relative  md:left-auto md:border-r-[1px]  md:border-r-gray-300 `}>
        {!isMobile && (
          <div
            className={`absolute left-full top-[14%]  -translate-x-1/2 rounded-full bg-gray-100 p-2 transition-all ${navState === "open" ? "rotate-180" : "rotate-0"}`}
            onClick={handleNavStateToggle}>
            <FaAngleRight />
          </div>
        )}

        <div className={`${isMobile ? "flex items-center gap-8 justify-evenly " : "self-center"}`}>
          <Link to="/">
            <Logo
              type={isMobile || navState === "open" ? "long" : "short"}
              className={"leading-10"}
              size={isMobile ? 2.75 : 2.2}
            />
          </Link>
          {isMobile && <IoClose className="text-2xl text-gray-800" onClick={handleNavStateToggle} />}
        </div>

        <FlexCol className="gap-10 self-start">
          {links.map((link) =>
            link.subLinks ? (
              <LinkElementWithChild
                key={link.title}
                {...link}
                navState={navState}
                onClickHandler={handleNavStateToggle}
              />
            ) : (
              <LinkElement
                key={link.link}
                {...link}
                navState={navState}
                onClickHandler={handleNavStateToggle}
                isMobile={isMobile}
              />
            )
          )}
        </FlexCol>
      </FlexCol>
      {isMobile && navState === "open" && (
        <div className="fixed inset-0 w-full h-full bg-[rgba(0,0,0,.2)]  z-10" onClick={handleNavStateToggle} />
      )}
    </>
  );
};

export default SideBar;
