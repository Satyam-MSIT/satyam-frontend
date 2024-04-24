// Third
import { Link } from "react-router-dom";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { FaAngleDown } from "react-icons/fa6";

// User
import { Flex, FlexCol } from "../../Elements/Flex";
import useDimensions from "./../../Hooks/useDimensions";

const NavBarItemDropable = ({ title, subLinks }) => {
  const [dropDownState, setDropDownState] = useState(false);
  const handleDropDownState = () => setDropDownState((prev) => !prev);

  return (
    <Flex
      className="relative cursor-pointer text-gray-700 transition-all items-center gap-3 pb-4 text-base  lg:text-[1.1rem] xl:text-[1.2rem] hover:text-blue"
      onMouseEnter={handleDropDownState}
      onMouseLeave={handleDropDownState}>
      {title}
      <FaAngleDown className="text-sm" />
      {dropDownState && (
        <FlexCol className="absolute left-1/2 top-full z-10 w-72  animate-[slideInUp_200ms_ease-in_forwards]  rounded-b-xl rounded-t-[.2rem] border-t-2 border-blue bg-white shadow-xl ">
          {subLinks.map(({ title, link, onClickHandlerCustom }) =>
            link ? (
              <Link
                key={link}
                to={link}
                className=" border-b-[.5px] border-gray-400 px-4 py-4  text-center text-base text-black last:border-none hover:text-blue ">
                {title}
              </Link>
            ) : (
              <button
                className=" border-b-[.5px] border-gray-400 px-4 py-4  text-center text-base text-black last:border-none hover:text-blue"
                onClick={onClickHandlerCustom}>
                {title}
              </button>
            )
          )}
        </FlexCol>
      )}
    </Flex>
  );
};

const Navbar = ({ links }) => {
  const isMobile = useDimensions().width < 768;

  return (
    <Flex
      as="nav"
      className="bg-white items-end  justify-center gap-6 lg:gap-12 xl:gap-16 px-4 xsm:px-8 sm:px-12 md:px-4 lg:px-8 xl:px-12  pb-4 ">
      {!isMobile && (
        <>
          <NavLink to="/" className="group pb-4">
            <p className=" group-[.active]:text-blue text-base lg:text-[1.1rem] xl:text-[1.2rem] text-gray-700 hover:text-blue">
              Home
            </p>
          </NavLink>
          {links.map(({ title, subLinks }) => (
            <NavBarItemDropable title={title} subLinks={subLinks} key={title} />
          ))}
        </>
      )}

      <Flex className="w-full md:w-72 lg:w-96 py-4 px-6 md:px-4 md:py-2 items-center ml-auto gap-4 border-[1px] border-gray-400  rounded-xl ">
        <FiSearch className="text-2xl" />
        <input
          type="text"
          className="w-full placeholder:text-gray-600 py-[.1rem] focus:outline-none"
          placeholder="Find anything here"
        />
      </Flex>
    </Flex>
  );
};

export default Navbar;
