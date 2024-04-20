// Third party modules
import PropTypes from "prop-types";

// text-[6rem] text-[4rem] text-[2.5rem] text-[5rem] text-[3rem]
const Logo = ({ size = 3, type = "long", className }) => {
  return (
    <h1
      className={`text-[${size}rem] font-extrabold tracking-wide text-[#333] ${className}`}
    >
      <span className="text-[80%] text-blue xsm:text-[110%] sm:text-[120%]">
        S
      </span>
      {type === "long" && (
        <span className="text-[66.67%] xsm:text-[91.67%] sm:text-[100%]">
          atyam
        </span>
      )}
    </h1>
  );
};

Logo.propTypes = {
  type: PropTypes.oneOf(["short", "long"]),
  size: PropTypes.number,
  className: PropTypes.string,
};

export default Logo;
