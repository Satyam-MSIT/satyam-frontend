// Third party imports
import styled from "styled-components";

const SpinnerConstruct = styled.div`
  clip-path: polygon(50% 50%, 0 50%, 0 0);
  animation: animater 2s infinite linear backwards;
  border: ${(props) => `${props.$thickness} solid ${props.$color ? props.$color : "#6e97ff"}`};
  @keyframes animater {
    0% {
      clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);
    }
    25% {
      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);
    }
    50% {
      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);
    }
    75% {
      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);
    }
    100% {
      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0% 100%, 0% 0%);
      rotate: 360deg;
    }
  }
`;

const Spinner = ({ className, color, thickness = ".4rem " }) => {
  return (
    <SpinnerConstruct id="spinner" className={`rounded-full ${className}`} $thickness={thickness} $color={color} />
  );
};

export default Spinner;
