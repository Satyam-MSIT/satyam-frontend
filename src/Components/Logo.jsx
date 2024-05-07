// Third party modules
import PropTypes from "prop-types";

// text-[6rem] text-[4rem] text-[2.5rem] text-[5rem] text-[3rem] text-[1.8rem] text-[2.2rem] text-[2.3rem] text-[2.75rem]
const Logo = ({ size = 3, type = "long", className }) => { 
  return (
    <h1 className={`text-[${size}rem] font-extrabold tracking-wide text-[#333] ${className}`}>
      <span className="text-[100%] text-blue xsm:text-[110%] sm:text-[120%]">S</span>
      {type === "long" && <span className="text-[83.333%] xsm:text-[91.67%] sm:text-[100%]">atyam</span>}
    </h1>
  );
};

Logo.propTypes = {
  type: PropTypes.oneOf(["short", "long"]),
  size: PropTypes.number,
  className: PropTypes.string,
};

export default Logo;
