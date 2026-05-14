import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const navType = useNavigationType();

  useEffect(() => {
    // Explicitly set scroll restoration to auto to allow the browser 
    // to handle the scroll position when using back/forward buttons.
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "auto";
    }
  }, []);

  useEffect(() => {
    // Only scroll to top on 'PUSH' (forward) or 'REPLACE' navigation.
    // On 'POP' (Back/Forward buttons), we let the browser restore the position.
    if (navType === "PUSH" || navType === "REPLACE") {
      window.scrollTo(0, 0);
    }
  }, [pathname, navType]);

  return null;
};

export default ScrollToTop;
