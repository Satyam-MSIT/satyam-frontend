// Third party modules
import { useState, useEffect } from "react";

// User Modules
import HeroLanding from "./HeroLanding";
import ScrollToTop from "../../../Components/ScrollToTop";
import Grid from "./Grid";
import PublicationProcess from "./PublicationProcess";
import About from "./About";
import FAQ from "./FAQ";
import useHash from "../../../Hooks/useHash";
import { Link } from "react-router-dom";

const Landing = () => {
  useHash();
  const [newsLetterModal, setNewLetterModal] = useState("hidden");
  const handleNewLetterModalToggle = () =>
    setNewLetterModal((state) => (state === "hidden" ? "shown" : "hidden"));

  return (
    <>
      <div className="relative ">
        <Grid />
        <HeroLanding />
        <About />
        <PublicationProcess />
      </div>

      <FAQ />
      <ScrollToTop />
    </>
  );
};

export default Landing;
