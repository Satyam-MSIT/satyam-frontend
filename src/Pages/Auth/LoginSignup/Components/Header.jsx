import { Link } from "react-router-dom";

const Header = ({ heading, message, route, routeTo }) => {
  return (
    <>
      <h3 className="mb-3 text-4xl font-semibold">{heading}</h3>
      <div className="mb-5 h-[.3rem] w-16 rounded-3xl bg-black md:mb-4"></div>
      <p className="mb-8 text-lg text-darkgrey md:text-base">
        {message}
        {"?  "}
        <Link to={route} className="text-blue-600">
          {routeTo}
        </Link>
      </p>
    </>
  );
};

export default Header;
