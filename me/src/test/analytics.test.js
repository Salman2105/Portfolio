import { beforeEach, expect, it, vi } from "vitest";
vi.mock("react-ga4", () => ({
  default: { initialize: vi.fn(), send: vi.fn() },
}));
beforeEach(() => vi.resetModules());
it("does not initialize analytics or send usage without consent", async () => {
  const ReactGA = (await import("react-ga4")).default;
  const { trackPage } = await import("../lib/analytics");
  trackPage("/Portfolio/");
  expect(ReactGA.initialize).not.toHaveBeenCalled();
  expect(ReactGA.send).not.toHaveBeenCalled();
});
it("tracks once after opt-in, deduplicates the initial route, and stops after opt-out", async () => {
  const ReactGA = (await import("react-ga4")).default;
  const { setAnalyticsConsent, trackPage } = await import("../lib/analytics");
  setAnalyticsConsent(true);
  trackPage(window.location.pathname);
  expect(ReactGA.initialize).toHaveBeenCalledTimes(1);
  expect(ReactGA.send).toHaveBeenCalledTimes(1);
  setAnalyticsConsent(false);
  trackPage("/another-page");
  expect(ReactGA.send).toHaveBeenCalledTimes(1);
  expect(localStorage.getItem("portfolio-analytics")).toBe("denied");
});
