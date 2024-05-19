// Third party imports
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { useSelector } from "react-redux";

// User imports
import { Flex, FlexCenter } from "../../Elements/Flex";
import Logo from "../../Components/Logo";
import ProfileImage from "./../../Components/ProfileImage";
import { BtnBase, BtnBlack } from "../../Elements/Button";
import ProfileDropDown from "../../Components/ProfileDropDown";

const Header = ({ handleNavStateToggle }) => {
  const user = useSelector((state) => state.user);

  return (
    <FlexCenter
      as="header"
      className="mt-3 gap-2  bg-white px-3 pb-4 xsm:px-4 sm:gap-3 sm:px-5 md:gap-5  md:px-8"
    >
      <HiOutlineMenuAlt2
        className="text-4xl md:hidden"
        onClick={handleNavStateToggle}
      />

      <FlexCenter
        as={Link}
        to="/"
        className=" gap-1 xsm:gap-2 sm:gap-3 md:gap-4"
      >
        <img
          src="./msit.png"
          alt="MSIT"
          className="xsm-[4.5rem] aspect-auto w-16 sm:w-20  "
        />
        <Logo type="long" size={2.3} />
      </FlexCenter>

      <Flex className="ml-auto flex-col-reverse items-end gap-2  sm:flex-row sm:items-center sm:gap-4">
        <div className=" text-wrap text-xs xxsm:text-sm  xsm:text-base ">
          <strong> ISSN: </strong> 2319-7897&nbsp;(Print)
        </div>

        {user.token ? (
          <ProfileDropDown />
        ) : (
          <>
            <BtnBase
              as={Link}
              to="/auth/login"
              className="hidden rounded-xl border-2 px-6 py-2 text-lg tracking-wide  md:block "
            >
              Log in
            </BtnBase>
            <BtnBlack
              className="px-3 py-2 text-xs xsm:px-4 xsm:text-sm sm:px-6 sm:text-base md:text-lg"
              as={Link}
              to="/auth/signup"
            >
              Get Started
            </BtnBlack>
          </>
        )}
      </Flex>
    </FlexCenter>
  );
};

export default Header;
