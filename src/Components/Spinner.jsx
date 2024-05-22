// Third party imports
import styled from "styled-components";

// thickness prop
export const Spinner = styled.div`
  border-radius: 100%;
  clip-path: polygon(50% 50%, 0 50%, 0 0);
  animation:
    animater 2s infinite linear alternate,
    rotate 2s infinite linear;
  border: solid ${(props) => (props.$thickness ? props.$thickness : ".4rem")}
    #333333;

  @keyframes rotate {
    from {
      rotate: 0deg;
    }
    to {
      rotate: 1080deg;
    }
  }

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
    }
  }
`;

export default Spinner;
