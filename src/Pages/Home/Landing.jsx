import { Routes, Route } from "react-router-dom";

import HeroLanding from "./Landing/HeroLanding";
import Grid from "./Grid";
import PublicationProcess from "./Landing/PublicationProcess";
import Header from "./Header";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About/About";
import Faq from "./Faq";
import EditorsPage from "./EditorsPage";

import Modals from "./Modal";
import Footer from "./Footer";

const Landing = () => {
  return (
    <>
      <div className="relative mb-20 pb-12">
        <Grid />

        <header className="bg-[rgba(255,255,255,.4)]">
          <Header />
          <Navbar />
        </header>

        <Routes>
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
        </Routes>
      </div>
      <Routes>
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
      </Routes>
      </>
  );
};

export default Landing;
