// Third party
import { lazy, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import SideBar from "../../Components/SideBar";
import { LuLayoutDashboard as DashboardIcon } from "react-icons/lu";
import { BsJournals as JournalsIcon } from "react-icons/bs";
import { HiOutlineMenuAlt2 as MenuIcon } from "react-icons/hi";
import { HiMiniPencilSquare as CreateIcon } from "react-icons/hi2";
import Searchbar from "../Satyam/Searchbar";
import { Flex } from "../../Elements/Flex";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import EditJournal from "./EditJournal";
import { toast } from "react-toastify";

// User Modules
const Dashboard = lazy(() => import("./Dashboard"));
const Upload = lazy(() => import("./Upload"));
const Journals = lazy(() => import("./Journals"));
const JournalDetail = lazy(() => import("./JournalDetail"));

const links = [
  {
    Icon: DashboardIcon,
    link: "/author/dashboard",
    title: "Dashboard",
  },
  {
    Icon: JournalsIcon,
    link: "/author/journals",
    title: "Journals",
  },
  {
    Icon: CreateIcon,
    link: "/author/upload",
    title: "Upload Journal",
  },
];

const Main = styled.main.attrs({
  className:
    "md:no-scrollbar  bg-[#f9faff] relative md:absolute md:left-full md:top-0 md:h-full  md:overflow-y-scroll",
})`
  @media screen and (min-width: 768px) {
    width: calc(100vw - 100%);
  }
`;
const Author = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  console.log(user);

  useEffect(() => {
    if (!user.token || !user.name || !user.email) {
      const redirect = window.location.pathname;
      navigate(`/auth/login?redirect=${redirect}`);
      toast.error("Please login first");
    }
  }, [user]);
  const [navState, setNavState] = useState("collapsed");

  const handleNavStateToggle = () =>
    setNavState((state) => (state === "collapsed" ? "open" : "collapsed"));
  return (
    <div className="overflow-x-hidden">
      <div className="relative block  md:inline-block ">
        <SideBar
          links={links}
          navState={navState}
          navStateToggleHandler={handleNavStateToggle}
        />
        <Main>
          <Flex className="items-center justify-stretch border-b-[1px] border-gray-300 bg-white py-3">
            <div
              className="border-r-[1px] border-r-gray-300 px-2 text-3xl xsm:px-3 sm:px-4 md:hidden"
              onClick={handleNavStateToggle}
            >
              <MenuIcon />
            </div>
            <Searchbar />
          </Flex>

          <Routes>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="journals" element={<Journals />} />
            <Route path="upload" element={<Upload />} />
            <Route path="journals/:id" element={<JournalDetail />} />
            <Route path="journals/edit/:id" element={<EditJournal />} />
          </Routes>
        </Main>
      </div>
    </div>
  );
};

export default Author;
