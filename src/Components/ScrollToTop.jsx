// Third party imports
import { useEffect, useCallback, useState } from "react";
import { PiArrowUpBold } from "react-icons/pi";

const scrollToTopHandler = () => document.documentElement.scroll({ top: 0, behavior: "smooth" });

const ScrollToTop = () => {
  const [isVisibile, setIsVisible] = useState(false);
  const checkVisibility = useCallback(() => setIsVisible(document.documentElement.scrollTop > 0), [setIsVisible]);

  useEffect(() => {
    window.addEventListener("scroll", checkVisibility);
    return () => window.removeEventListener("scroll", checkVisibility);
  }, []);

  return (
    isVisibile && (
      <button
        title="Scroll to top"
        className="p-4 rounded-lg bg-[#e9ecfd] hover:bg-[#DEECFF] hover:scale-105 transition-all active:scale-[.85] duration-200 fixed bottom-5 right-5"
        aria-label="Scroll to top"
        onClick={scrollToTopHandler}>
        <PiArrowUpBold className="text-xl" />
      </button>
    )
  );
};

export default ScrollToTop;
