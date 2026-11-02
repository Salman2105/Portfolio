import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackPage } from "./lib/analytics";
export default function usePageTracking() {
  const { pathname } = useLocation();
  useEffect(() => {
    trackPage(pathname);
  }, [pathname]);
}
