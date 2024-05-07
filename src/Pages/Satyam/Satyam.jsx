// Third party
import { lazy, useState } from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import { LuLayoutDashboard as DashboardIcon } from "react-icons/lu";
import { LuNewspaper as CallPaperIcon } from "react-icons/lu";
import { TfiAnnouncement as AnnouncmenntIcon } from "react-icons/tfi";
import { CgWebsite as ManageWebsiteIcon } from "react-icons/cg";
import { BsJournals as JournalsIcon } from "react-icons/bs";
import { LuUsers as UsersIcon } from "react-icons/lu";
import { HiOutlineMenuAlt2 as MenuIcon } from "react-icons/hi";

// User
import SideBar from "../../Components/SideBar";
import Searchbar from "./Searchbar";
import { Flex } from "../../Elements/Flex";
import useProtectRoute from "../../Hooks/useProtectRoute";
import Dashboard from "./Dashboard/Dashboard";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const ManageUsers = lazy(() => import("./ManageUsers/ManageUsers"));

const links = [
  {
    Icon: DashboardIcon,
    link: "/satyam/dashboard",
    title: "Dashboard",
  },
  {
    Icon: ManageWebsiteIcon,
    link: "/satyam/managewebsite",
    title: "Manage Website",
  },
  {
    Icon: JournalsIcon,
    link: "/satyam/journals",
    title: "Journals",
  },
  {
    Icon: CallPaperIcon,
    link: "/satyam/callpaper",
    title: "Call for paper",
  },
  {
    Icon: AnnouncmenntIcon,
    link: "/satyam/announcement",
    title: "Announcement",
  },
  {
    Icon: UsersIcon,
    link: "/satyam/manageusers",
    title: "Manage Users",
  },
];

const Main = styled.main.attrs({
  className: "md:no-scrollbar  bg-[#f9faff] relative md:absolute md:left-full md:top-0 md:h-full  md:overflow-y-scroll",
})`
  @media screen and (min-width: 768px) {
    width: calc(100vw - 100%);
  }
`;

const Satyam = () => {
  // Checking whether the page is accessible to the user or not
  useProtectRoute("satyam");

  // navigate the request to /satyam to /satyam/dashboard
  const navigate = useNavigate();
  useEffect(() => {
    const path = window.location.pathname;
    if (path === "/satyam") navigate("/satyam/dashboard", { replace: true });
  }, []);

  const [navState, setNavState] = useState("collapsed");
  const handleNavStateToggle = () => setNavState((state) => (state === "collapsed" ? "open" : "collapsed"));

  return (
    <div className="overflow-x-hidden">
      <div className="relative block  md:inline-block ">
        <SideBar links={links} navState={navState} navStateToggleHandler={handleNavStateToggle} />

        <Main>
          <Flex className="items-center justify-stretch border-b-[1px] border-gray-300 bg-white ">
            <div
              className="border-r-[1px] border-r-gray-300 px-2 text-3xl xsm:px-3 sm:px-4 md:hidden"
              onClick={handleNavStateToggle}>
              <MenuIcon />
            </div>
            <Searchbar />
          </Flex>

          <Routes>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="manageusers" element={<ManageUsers />} />
          </Routes>
        </Main>
      </div>
    </div>
  );
};

export default Satyam;
