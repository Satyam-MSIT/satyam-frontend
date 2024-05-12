// Third party imports
import styled from "styled-components";

const SpinnerConstruct = styled.div`
  clip-path: polygon(50% 50%, 0 50%, 0 0);
  animation: animater 2s infinite linear backwards;
  border-width: ${(props) => props.$thickness};
  @keyframes animater {
    0% {
      clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);
      border-color: "#6e97ff";
    }
    25% {
      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);
      border-color: red;
    }
    50% {
      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);
      border-color: yellow;
    }
    75% {
      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);
      border-color: orange;
    }
    100% {
      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0% 100%, 0% 0%);
      rotate: 360deg;
      border-color: green;
    }
  }
`;

const Spinner = ({ className, thickness = ".4rem " }) => {
  return <SpinnerConstruct id="spinner" className={`rounded-full ${className}`} $thickness={thickness} />;
};

export default Spinner;
