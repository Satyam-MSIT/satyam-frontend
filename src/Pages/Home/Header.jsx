// Third party imports
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { useSelector } from "react-redux";

// User imports
import { Flex } from "../../Elements/Flex";
import Logo from "../../Components/Logo";
import ProfileImage from "./../../Components/ProfileImage";
import { BtnBlack } from "../../Elements/Button";

const Header = ({ handleNavStateToggle }) => {
  const user = useSelector((state) => state.user);

  return (
    <Flex
      as="header"
      className="bg-white pb-4 items-center  gap-2 sm:gap-3 md:gap-5 px-3 mt-3 xsm:px-4 sm:px-5  md:px-8">
      <HiOutlineMenuAlt2 className="text-4xl sm:text-4xl md:hidden" onClick={handleNavStateToggle} />

      <Flex as={Link} to="/" className="items-center gap-1 xsm:gap-2 sm:gap-3 md:gap-4">
        <img src="./msit.png" alt="MSIT" className="aspect-auto w-16 xsm-[4.5rem] sm:w-20  " />
        <Logo type="long" size={2.3} />
      </Flex>

      <Flex className="ml-auto gap-2 items-center flex-col-reverse sm:gap-4 sm:flex-row">
        <div className=" text-wrap text-xs xxsm:text-sm  xsm:text-base ">
          <strong> ISSN: </strong> 2319-7897&nbsp;(Print)
        </div>

        {user.token ? (
          <div className="w-12 h-12 xsm:w-14 xsm:h-14 ">
            {user.image ? (
              <img
                src={user.image}
                alt={user.name}
                className="aspect-square w-full rounded-full object-cover object-center"
              />
            ) : (
              <ProfileImage name={user.name} />
            )}
          </div>
        ) : (
          <>
            <Link
              to="/auth/login"
              className="hidden hover:bg-gray-100 transition-all md:block px-5 py-2 rounded-xl border-2 font-medium text-lg text-[#232323] border-gray-300">
              Log in
            </Link>
            <BtnBlack as={Link} to="/auth/signup">
              Get Started
            </BtnBlack>
          </>
        )}
      </Flex>
    </Flex>
  );
};

export default Header;
