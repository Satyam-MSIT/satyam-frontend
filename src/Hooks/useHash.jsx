// Third party imports
import { useEffect } from "react";

const useHash = () => {
  const hash = window.location.hash;

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
};

export default useHash;
