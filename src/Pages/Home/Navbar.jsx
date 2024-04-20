// Third
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

// User
import { Flex, FlexCol } from "../../Elements/Flex";
import ChevronRight from "./../../assets/img/icons/chevron-right.svg";

const links = [
  {
    href: "/",
    name: "Home",
  },
  {
    name: "About Us",
    children: [
      { href: "/aboutus", name: "About us" },
      {
        href: "/aboutinstitute",
        name: "About Institute",
      },
    ],
  },
  {
    name: "Editorial Board",
    children: [
      { href: "/editorspage", name: "Editors Page" },
      {
        href: "/aboutinstitute",
        name: "About Institute",
      },
    ],
  },
  {
    name: "Guidelines for author",
    children: [
      { href: "/aboutus", name: "About us" },
      {
        href: "/aboutinstitute",
        name: "About Institute",
      },
    ],
  },
  {
    name: "Issues",
    children: [
      { href: "/issues/current", name: "Current Issue" },
      {
        href: "/issues/previous",
        name: "Previous Issue",
      },
      {
        href: "/issues/newsletter",
        name: "Subscribe",
      },
    ],
  },
  {
    name: "Submission",
    children: [
      { href: "/track", name: "Track" },
      {
        href: "/upload",
        name: "Upload",
      },
    ],
  },
  {
    name: "Contact Us",
    href: "/contactus",
  },
];

const NavBarItem = ({ href, name }) => {
  return (
    <NavLink to={href} className="group block pb-4">
      <div className="text-lg hover:text-blue group-[.active]:text-blue">
        {name}
      </div>
    </NavLink>
  );
};

const NavBarItemDropable = ({ name, childs }) => {
  const [dropDownState, setDropDownState] = useState(false);
  const handleDropDownState = () => setDropDownState((prev) => !prev);

  return (
    <Flex
      className="relative cursor-pointer items-center gap-4 pb-4 text-lg hover:text-blue"
      onMouseEnter={handleDropDownState}
      onMouseLeave={handleDropDownState}
    >
      {name}
      <img src={ChevronRight} className="aspect-square w-5 rotate-90" />
      {dropDownState && (
        <FlexCol className="absolute left-1/2 top-full z-10 min-w-56 max-w-min  animate-[slideInUp_200ms_ease-in_forwards]  rounded-b-xl rounded-t-[.2rem] border-t-2 border-blue bg-white shadow-xl ">
          {childs.map((child, index) => (
            <Link
              key={index}
              to={child.href}
              className=" border-b-[.5px] border-grey px-8 py-4  text-center text-lg text-black last:border-none hover:text-blue "
            >
              {child.name}
            </Link>
          ))}
        </FlexCol>
      )}
    </Flex>
  );
};

const Navbar = () => {
  return (
    <Flex className="mb-2 flex items-center justify-center gap-12 px-4  pb-8">
      {links.map((link, index) =>
        link.children ? (
          <NavBarItemDropable
            name={link.name}
            childs={link.children}
            key={index}
          />
        ) : (
          <NavBarItem name={link.name} href={link.href} key={index} />
        ),
      )}
    </Flex>
  );
};

export default Navbar;
