// Third party imports
import { FaFlask, FaLightbulb, FaBriefcase, FaBookOpenReader, FaGlobe } from "react-icons/fa6";
import { MdOutlineRateReview } from "react-icons/md";

// User Imports
import Card from "../../../Components/Card";

const cards = [
  {
    Icon: FaFlask,
    title: "Empirical Research",
    desc: "Explore insightful empirical studies driving innovation and academic discourse.",
  },
  {
    Icon: FaLightbulb,
    title: "Theoretical Insights",
    desc: "Delve into theoretical frameworks shaping contemporary research paradigms.",
  },
  {
    Icon: FaBriefcase,
    title: "Case Studies",
    desc: "Uncover real-world applications and solutions through in-depth case analyses.",
  },
  {
    Icon: FaBookOpenReader,
    title: "Literature Reviews",
    desc: "Navigate comprehensive literature reviews, synthesizing current knowledge and trends.",
  },
  {
    Icon: FaGlobe,
    title: "Global Participation",
    desc: "Engage with diverse perspectives and contributions from researchers worldwide.",
  },
  {
    Icon: MdOutlineRateReview,
    title: "Peer Review",
    desc: "Upholding rigorous peer-review standards, ensuring scholarly integrity and quality.",
  },
];

const About = () => {
  return (
    <section id="aboutus" className="text-center bg-[rgb(240,241,250)] pt-16 pb-16 mb-12">
      <h2 className="text-xl sm:text-2xl tracking-wide font-bold  text-blue mb-5">ABOUT US</h2>
      <h3 className="text-[#373737] text-3xl xsm:text-4xl sm:text-5xl md:text-6xl  font-bold leading-snug  mx-4 mb-10">
        The leading research
        <br /> journal of MSIT
      </h3>

      <p className="text-[#474b50] mb-12 text-lg mx-8 xsm:mx-8 sm:mx-20 md:mx-32 lg:mx-56 leading-relaxed">
        Satyam Journal offers a platform for quality research, facilitating knowledge exchange among researchers,
        professionals, and students worldwide.
      </p>

      <div className="grid grid-cols-[1fr] md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr] px-8 xsm:px-12 gap-8  md:gap-6 xl:gap-8">
        {cards.map((card) => (
          <Card key={card.title} {...card} />
        ))}
      </div>
    </section>
  );
};

export default About;
