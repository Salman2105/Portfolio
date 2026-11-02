import { useState } from "react";
import { MotionConfig } from "framer-motion";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Privacy from "./components/privacy";
import usePageTracking from "./usePageTracking";
import "./App.css";
export default function App() {
  const [privacy, setPrivacy] = useState(false);
  usePageTracking();
  return (
    <ThemeProvider>
      <MotionConfig reducedMotion="user">
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Home onPrivacy={() => setPrivacy(true)} />
        <Privacy open={privacy} onClose={() => setPrivacy(false)} />
        <Toaster
          position="bottom-center"
          toastOptions={{ className: "site-toast" }}
        />
      </MotionConfig>
    </ThemeProvider>
  );
}
