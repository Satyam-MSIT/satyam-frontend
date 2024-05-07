// Third party
import { useState } from "react";
import { useSelector } from "react-redux";
import { FiSearch } from "react-icons/fi";
import { FaRegBell } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

// User
import { Flex } from "../../Elements/Flex";
import ProfileImage from "../../Components/ProfileImage";

const Searchbar = () => {
  const user = useSelector((state) => state.user);
  const [inputState, setInputState] = useState("collapsed");
  const inputStateToggleHandler = () => setInputState((state) => (state === "collapsed" ? "open" : "collapsed"));

  return (
    <Flex className="w-full h-20 sm:h-16 items-center gap-6 pl-3 pr-2 xsm:pr-4 sm:pr-6 xsm:gap-5 xsm:pl-5 sm:gap-6  md:pl-8 ">
      {/* Input panel */}
      <Flex className="flex-1 items-center gap-2 xsm:gap-3 sm:gap-4">
        <FiSearch className="text-xl text-[#424242] xsm:text-2xl sm:text-[1.6rem]" onClick={inputStateToggleHandler} />
        <input
          type="text"
          placeholder="Find by author, title and keywords"
          className={`w-0 ${inputState === "open" && "w-full"} sm:w-full  bg-transparent text-base placeholder:text-base placeholder:text-[#a4a3ba] focus:outline-none xsm:placeholder:text-base`}
        />
        {inputState === "open" && <IoClose className="text-2xl ml-auto sm:hidden" onClick={inputStateToggleHandler} />}
      </Flex>

      {/* Notification button */}
      <div className={`relative ml-auto transition-all  ${inputState === "open" && "hidden "} sm:block`}>
        <FaRegBell className="text-xl xsm:text-2xl" />
        <div className="absolute left-full top-0 -translate-x-1/2 rounded-full bg-red-500 p-1" />
      </div>

      {/* User profile */}
      <div className={`items-center gap-3 ${inputState === "open" ? "hidden" : "flex"} sm:flex`}>
        <div className={`h-10 w-10 xsm:w-12 xsm:h-12 transition-all  `}>
          {user.image ? (
            <img
              src={user.image}
              alt={user.name}
              className="aspect-square  w-full rounded-full object-cover object-center"
            />
          ) : (
            <ProfileImage name={user.name} fontSize={"text-base"} />
          )}
        </div>

        <div className="-gap-5  flex-col">
          <h3 className="text-lg font-semibold">{user.name}</h3>
          <p className="text-[#424242] text-xs">{user.email}</p>
        </div>
      </div>
    </Flex>
  );
};

export default Searchbar;
