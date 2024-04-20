// Third party imports
import { useEffect } from "react";
import { Outlet, Link, useNavigate, useSearchParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";
import { Autoplay } from "swiper/modules";
import { toast } from "react-toastify";
import "swiper/css";
import "swiper/css/pagination";

// User imports
import { FlexCol, Flex } from "../../../Elements/Flex";
import { colors } from "../../../constants";
import Logo from "./../../../Components/Logo";
import testimonials from "./testimonials";
import getRoute from "./../../../Functions/getRoute";

const SwiperElement = ({ testimonial, profile_image, name, title }) => {
  return (
    <div className="rounded-2xl bg-[#0f133a] px-6 py-6 lg:px-8">
      <p className="mb-5 font-sans text-[.9rem] font-light leading-normal tracking-wide lg:mb-6 lg:text-base lg:tracking-wider">
        {testimonial}
      </p>
      <Flex className="items-center gap-3 lg:gap-5">
        <img
          src={profile_image}
          alt={name}
          className="aspect-square w-10 rounded-xl object-contain object-center lg:w-14 lg:rounded-2xl"
        />
        <FlexCol className="gap-1 lg:gap-2">
          <p className="text-base lg:text-lg">{name}</p>
          <p className="text-[.6rem] tracking-widest  lg:text-xs">{title}</p>
        </FlexCol>
      </Flex>
    </div>
  );
};

const radialGradient = `radial-gradient(circle at top left,${colors["--var-blue"].value},${colors["--var-blue"].rgba(0.9)} 50%,${colors["--var-blue"].rgba(0.6)} 60%,${colors["--var-blue"].value})`;

const LoginSignup = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const redirect = searchParams.get("redirect");

  useEffect(() => {
    if (user.token) {
      if (redirect) navigate(redirect);
      else navigate(getRoute(user.current_role));
    }
  }, [user]);

  return (
    <main className="px-6 py-12 md:flex md:min-h-screen  md:items-center md:justify-center md:bg-[#f5f5f5] md:px-6 md:py-8 lg:p-8">
      <div className="md:grid md:max-w-screen-2xl md:grid-cols-[.7fr_1.1fr] md:gap-10 md:rounded-2xl md:bg-white lg:gap-16 lg:rounded-3xl ">
        {/* Left Panel */}
        <div
          className="hidden flex-col justify-between gap-32 rounded-2xl px-6 py-8 text-white md:flex lg:rounded-3xl lg:py-12 "
          style={{
            background: radialGradient,
          }}
        >
          <FlexCol className="gap-16">
            <Link to="/">
              <h1 className="text-3xl font-bold tracking-wide lg:text-4xl">
                Satyam
              </h1>
            </Link>
            <FlexCol className="gap-3 lg:gap-4">
              <h2 className=" text-xl font-medium lg:text-2xl ">
                Commence your
                <br /> publishing journey with us.
              </h2>
              <p className=" text-xs font-thin md:text-base">
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
            className=" w-[18rem] lg:w-[25rem]"
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
        </div>

        <FlexCol className="items-stretch justify-center gap-20 md:gap-0  md:py-12 md:pr-8 lg:pr-12">
          <Link to="/" className="block self-center md:hidden">
            <Logo type="long" size={6} />
          </Link>
          <Outlet />
        </FlexCol>
      </div>
    </main>
  );
};
export default LoginSignup;
