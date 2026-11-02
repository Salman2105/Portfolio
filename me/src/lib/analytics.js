import ReactGA from "react-ga4";
const measurementId = "G-SHDD77BWT";
let initialized = false;
let lastPage = "";
export function getAnalyticsConsent() {
  try {
    return localStorage.getItem("portfolio-analytics") === "granted";
  } catch {
    return false;
  }
}
export function trackPage(path) {
  if (!getAnalyticsConsent()) return;
  if (!initialized) {
    ReactGA.initialize(measurementId, {
      gaOptions: { send_page_view: false },
      gtagOptions: { send_page_view: false },
    });
    initialized = true;
  }
  if (path !== lastPage) {
    ReactGA.send({ hitType: "pageview", page: path });
    lastPage = path;
  }
}
export function setAnalyticsConsent(allowed) {
  try {
    localStorage.setItem("portfolio-analytics", allowed ? "granted" : "denied");
  } catch {
    /* Session choice still applies below. */
  }
  window[`ga-disable-${measurementId}`] = !allowed;
  if (allowed) trackPage(window.location.pathname);
  else {
    lastPage = "";
    // Remove first-party GA cookies at the paths/domains used by this site.
    const host = window.location.hostname;
    for (const cookie of document.cookie.split(";")) {
      const name = cookie.split("=")[0].trim();
      if (
        name === "_ga" ||
        name.startsWith("_ga_") ||
        name === "_gid" ||
        name.startsWith("_gat")
      ) {
        for (const path of ["/", import.meta.env.BASE_URL]) {
          document.cookie = `${name}=; Max-Age=0; path=${path}`;
          document.cookie = `${name}=; Max-Age=0; path=${path}; domain=${host}`;
          document.cookie = `${name}=; Max-Age=0; path=${path}; domain=.${host}`;
        }
      }
    }
  }
}
