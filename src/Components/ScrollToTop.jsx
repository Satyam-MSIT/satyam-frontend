// Third party imports
import { useEffect, useCallback, useState } from "react";
import { PiArrowUpBold } from "react-icons/pi";

const ScrollToTop = () => {
  const [isVisibile, setIsVisible] = useState(false);
  const setVisibleHandler = useCallback(() => setIsVisible(document.documentElement.scrollTop > 0), [setIsVisible]);

  useEffect(() => {
    window.addEventListener("scroll", setVisibleHandler);
    return () => window.removeEventListener("scroll", setVisibleHandler);
  }, []);

  return (
    isVisibile && (
      <div title="Scroll to top" className="p-4 rounded-lg bg-[#F7FBFC] hover:bg-[#DEECFF] transition-all active:scale-90 duration-200 fixed bottom-5 right-5">
        <PiArrowUpBold className="text-xl" />
      </div>
    )
  );
};

export default ScrollToTop;
