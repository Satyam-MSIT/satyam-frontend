// Third party imports
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { MdOutlineArticle as ArticlesAndIssuesIcon } from "react-icons/md";

// User imports
import Header from "./Header";
import Navbar from "./Navbar";
import SideBar from "../../Components/SideBar";
import useDimensions from "../../Hooks/useDimensions";

const Home = () => {
  const isMobile = useDimensions().width < 768;
  const [navState, setNavState] = useState("collapsed");

  const handleNavStateToggle = () => setNavState((state) => (state === "collapsed" ? "open" : "collapsed"));

  const links = [
    // TODO replace about and publish icon
    {
      Icon: ArticlesAndIssuesIcon,
      title: "About",
      subLinks: [
        {
          title: "About us",
          onClickHandlerCustom: () => {
            const anchor = document.createElement("a");
            anchor.href = "#aboutus";
            anchor.click();
          },
        },
        { link: "/aboutinstitute", title: "About Institute" },
        { link: "/aim", title: "Aim & Scope" },
        { link: "/abstract", title: "Abstract & Indexing" },
        { link: "/announcment", title: "Announcement" },
        { link: "/editorialboard", title: "Editorial Board" },
      ],
    },
    {
      Icon: ArticlesAndIssuesIcon,
      title: "Publish",
      subLinks: [
        { link: "/guidelines", title: "Guidelines for author" },
        { link: "/ieeeformat", title: "IEEE format" },
        { link: "/copyrightform", title: "Download copyright form" },
        { link: "/policies", title: "Policies & Guideliness" },
        { link: "/author", title: "Submission" },
        { link: "/track", title: "Track Submission" },
      ],
    },
    {
      Icon: ArticlesAndIssuesIcon,
      title: "Articles & Issues",
      subLinks: [
        { link: "/issue/latest", title: "Latest Issue" },
        { link: "/issues", title: "All Issues" },
        { link: "/issues/special", title: "Special Issues" },
        {
          title: "Subscribe to Newsletter",
          onClickHandlerCustom: () => {
            handleNewLetterModalToggle();
            handleNavStateToggle();
          },
        },
      ],
    },
  ];

  return (
    <>
      <Header handleNavStateToggle={handleNavStateToggle} />
      <Navbar links={links} />
      {isMobile && <SideBar links={links} navState={navState} navStateToggleHandler={handleNavStateToggle} />}

      <Outlet />
    </>
  );
};

export default Home;
