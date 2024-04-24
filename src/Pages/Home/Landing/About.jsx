import { FlexCol } from "../../../Elements/Flex";

const About = () => {
  return (
    <section
      id="aboutus"
      className="py-40 mb-20 bg-[#667aff]  flex sm:grid sm:grid-cols-[1fr_1fr] items-center sm:gap-20 flex-col sm:items-start px-6 xsm:px-12 sm:px-16 md:px-20"
      style={{
        clipPath: "polygon(0 10%,100% 0%,100% 85%,0 100%)",
      }}>
      <FlexCol className="gap-8 items-center sm:items-start">
        <h2 className="text-5xl text-white">About us</h2>
        <p className=" text-lg text-white  leading-8">
          MSIT Journal of Research-SATYAM, ISSN: 2319-7897 is a leading quality & peer-reviewed annually published
          multidisciplinary Research Journal of Maharaja Surajmal Institute of Technology (MSIT).
          <br />
          Satyam provides a platform for researchers, academicians, professionals, practitioners, and students to impart
          and share knowledge in the form of high-quality empirical and theoretical research papers, case studies, and
          literature reviews. The journal aims to provide a platform for a diversity of intellectual pursuits from all
          corners of the society for enrichment and enhancement of the group readers. The Journal welcomes and
          acknowledges high-quality theoretical and empirical original research papers, review papers, and literature
          reviews from researchers, academicians, professionals, practitioners, and students from all over the world.
        </p>
      </FlexCol>
      <img
        className="w-5/6 sm:w-full min-h-fit rounded-2xl aspect-auto"
        src="https://i.ibb.co/FhgPJt8/Rectangle-116.png"
        alt="A group of People"
      />
    </section>
  );
};

export default About;
