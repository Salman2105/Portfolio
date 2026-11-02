import { useEffect, useRef, useState } from "react";
import { ShieldCheck, X } from "lucide-react";
import { setAnalyticsConsent, getAnalyticsConsent } from "../lib/analytics";
export default function Privacy({ open, onClose }) {
  const dialog = useRef(null);
  const [analytics, setAnalytics] = useState(getAnalyticsConsent);
  useEffect(() => {
    if (open && !dialog.current.open) dialog.current.showModal();
  }, [open]);
  const save = () => {
    setAnalyticsConsent(analytics);
    dialog.current.close();
  };
  return (
    <dialog
      ref={dialog}
      className="privacy-dialog"
      aria-labelledby="privacy-title"
      onClose={() => {
        setAnalytics(getAnalyticsConsent());
        onClose();
      }}
      onClick={(event) => {
        if (event.target === dialog.current) dialog.current.close();
      }}
    >
      <div className="dialog-top">
        <ShieldCheck size={24} />
        <button
          className="icon-button"
          aria-label="Close privacy preferences"
          onClick={() => dialog.current.close()}
        >
          <X size={20} />
        </button>
      </div>
      <h2 id="privacy-title">Privacy & preferences</h2>
      <p>
        This portfolio saves your theme and optional analytics preference in
        this browser. Project illustrations are local, and third-party videos
        are not loaded automatically.
      </p>
      <h3>Getting in touch</h3>
      <p>
        The contact form sends your name, email, and message through EmailJS to
        Salman Ahmed for a reply. Email, GitHub, LinkedIn, and WhatsApp links
        open their respective services when you choose them.
      </p>
      <label className="analytics-choice">
        <input
          type="checkbox"
          checked={analytics}
          onChange={(event) => setAnalytics(event.target.checked)}
        />
        <span>
          <strong>Allow optional Google Analytics</strong>
          <span>
            Off by default. When enabled, Google receives page usage data.
            Disabling stops future tracking and removes this site's Google
            Analytics cookies.
          </span>
        </span>
      </label>
      <button className="button button-primary" onClick={save}>
        Save preferences
      </button>
    </dialog>
  );
}
