import { useLocation } from "react-router";
import { useEffect } from "react";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  // Scroll to the top of the page when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
