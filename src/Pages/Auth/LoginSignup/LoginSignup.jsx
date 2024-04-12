// Third party imports
import { Outlet, Link } from "react-router-dom";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// User imports
import { Center } from "../../../Elements/Center";
import { FlexCol, Flex } from "../../../Elements/Flex";
import { colors } from "../../../constants";
import testimonials from "./testimonials";

const Header = ({ heading, message, route, routeTo }) => {
  return (
    <>
      <h3 className="mb-3 text-4xl font-semibold">{heading}</h3>
      <div className="h-[.3rem] w-16 rounded-3xl bg-black"></div>
      <p className="mb-8 mt-4 text-darkgrey">
        {message}
        {"?  "}
        <Link to={route} className="text-blue">
          {routeTo}
        </Link>
      </p>
    </>
  );
};

const InputElement = ({ label, error_message, ref, inputOptions }) => {
  return (
    <FlexCol className="gap-2">
      <label
        htmlFor={label.toLowerCase()}
        className="text-[#555555] transition-all"
      >
        {label}
      </label>
      <input
        ref={ref}
        {...inputOptions}
        id={label.toLowerCase()}
        className={`peer w-[35vw]  rounded-xl border-[1.5px] px-5 py-[.7rem] transition-all  placeholder:text-[#aaaaaa] placeholder-shown:border-gray-300 invalid:border-red-400 placeholder-shown:invalid:border-gray-300 focus:outline-none focus:valid:border-blue  focus:valid:shadow-[0_0_10px_1px_rgba(51,78,255,0.4)] focus:invalid:border-red-400 focus:invalid:shadow-[0_0_10px_1px_rgba(255,0,0,.3)] ${inputOptions.type === "password" ? "tracking-widest" : ""}`}
      />
      <p className="block text-sm transition-all peer-placeholder-shown:hidden peer-valid:hidden peer-invalid:text-red-500">
        {error_message}
      </p>
    </FlexCol>
  );
};

const Button = styled.button.attrs({
  className: `text-white text-xl bg-blue text-center py-3 px-4 rounded-3xl shadow-[0_8px_10px_1px_rgba(51,78,255,0.4)] duration-300 hover:translate-y-0.5 transition-all hover:shadow-[0_8px_10px_1px_rgba(51,78,255,0.6)]`,
  type: "submit",
})``;

const SwiperElement = ({ testimonial, profile_image, name, title }) => {
  return (
    <div className="rounded-2xl bg-[#0f133a] px-8 py-6">
      <p className="mb-6 font-sans text-base font-light leading-normal tracking-wider">
        {testimonial}
      </p>
      <Flex className="items-center gap-5">
        <img
          src={profile_image}
          alt={name}
          className="aspect-square w-14 rounded-2xl object-contain object-center"
        />
        <FlexCol className="gap-2">
          <p className="text-lg">{name}</p>
          <p className="text-xs tracking-widest">{title}</p>
        </FlexCol>
      </Flex>
    </div>
  );
};

const LoginSignup = () => {
  const radialGradient = `radial-gradient(circle at top left,${colors["--var-blue"].value},${colors["--var-blue"].rgba(0.9)} 50%,${colors["--var-blue"].rgba(0.6)} 60%,${colors["--var-blue"].value})`;

  return (
    <Center as="main" className="min-h-screen flex-1 bg-[#f5f5f5] px-8 py-8">
      <div className="grid  max-w-screen-xl grid-cols-[.9fr_1fr] gap-20 rounded-3xl bg-white">
        <FlexCol
          className="justify-between gap-32 rounded-3xl px-8 py-8 text-white"
          style={{
            background: radialGradient,
          }}
        >
          <FlexCol className="gap-16">
            <h1 className="text-4xl font-bold tracking-wide"> Satyam </h1>
            <FlexCol className="gap-2">
              <h2 className="mb-2 text-2xl font-medium ">
                Commence your
                <br /> publishing journey with us.
              </h2>
              <p className="font-spans  text-justify text-base font-thin">
                Explore boundless opportunities for sharing
                <br /> your research and ideas or sharing <br />
                your research and ideas.
              </p>
            </FlexCol>
          </FlexCol>
          <Swiper
            autoplay={{
              delay: 3000,
            }}
            spaceBetween={40}
            loop="true"
            slidesPerView={"auto"}
            modules={[Autoplay]}
            className="w-[23rem] "
          >
            <SwiperSlide>
              <SwiperElement {...testimonials[0]} />
            </SwiperSlide>
            <SwiperSlide>
              <SwiperElement {...testimonials[1]} />
            </SwiperSlide>
            <SwiperSlide>
              <SwiperElement {...testimonials[2]} />
            </SwiperSlide>
          </Swiper>
        </FlexCol>

        <Outlet />
      </div>
    </Center>
  );
};
export default LoginSignup;

export { Header, InputElement, Button };
