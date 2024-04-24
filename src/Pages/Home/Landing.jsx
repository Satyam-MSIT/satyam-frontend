// Third party modules
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { MdOutlineArticle as ArticlesAndIssuesIcon } from "react-icons/md";

// User Modules
import Header from "./Header";
import Navbar from "./Navbar";
import HeroLanding from "./Landing/HeroLanding";
import SideBar from "../../Components/SideBar";
import useDimensions from "../../Hooks/useDimensions";

import Grid from "./Grid";
import PublicationProcess from "./Landing/PublicationProcess";
import Hero from "./bin/Hero";
import About from "./Landing/About";
import Faq from "./bin/Faq";
import EditorsPage from "./bin/EditorsPage";

import Modals from "./bin/Modal";
import Footer from "./bin/Footer";
import { useEffect } from "react";

const Landing = () => {
  const isMobile = useDimensions().width < 768;
  const [navState, setNavState] = useState("collapsed");
  const [newsLetterModal, setNewLetterModal] = useState("hidden");

  const handleNavStateToggle = () => setNavState((state) => (state === "collapsed" ? "open" : "collapsed"));
  const handleNewLetterModalToggle = () => setNewLetterModal((state) => (state === "hidden" ? "shown" : "hidden"));

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
            anchor.href = "/#aboutus";
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
      <div className="relative mb-20 pb-12">
        <Grid />
        <HeroLanding />
        <About />
        <PublicationProcess />

        {/* <Routes>
          <Route index element={<HeroLanding />} />
          <Route
            path="/aboutus"
            element={
              <Hero
                heading="About us"
                desc=" Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard"
                id="#aboutus"
              />
            }
          />
        </Routes> */}
      </div>
      {/* <Routes>
        <Route index element={<About />} />
      </Routes>
      <Routes>
        <Route index element={<PublicationProcess />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/editorspage" element={<EditorsPage />} />
        <Route path="/issues/newsletter" element={<Modals />} />
      </Routes>

      <Routes>
        <Route index element={<Faq />} />
      </Routes>
      <Routes>
        <Route index element={<Footer />} />
      </Routes> */}
    </>
  );
};

export default Landing;
