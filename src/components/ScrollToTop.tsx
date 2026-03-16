import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    // Scroll all scrollable containers back to top
    document.querySelectorAll('[class*="overflow-y-auto"], [class*="overflow-auto"], main, [role="main"]').forEach((el) => {
      el.scrollTop = 0;
    });
    // Also try the first scrollable child of body
    document.querySelector('.flex-1')?.scrollTo?.(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
