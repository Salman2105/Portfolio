import { ArrowUp, ArrowUpRight } from "lucide-react";
import { profile } from "../data/portfolio";
export default function Footer({ onPrivacy }) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <a className="brand footer-brand" href="#home">
            <span className="brand-mark">
              s<span>.</span>
            </span>
            <span>
              Salman Ahmed
              <span className="brand-role">Full Stack Developer</span>
            </span>
          </a>
          <p>
            Built with care.
            <br />
            <span>Always a work in progress.</span>
          </p>
          <a className="back-to-top" href="#home">
            Back to top <ArrowUp size={16} />
          </a>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Salman Ahmed</span>
          <div>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              GitHub <ArrowUpRight size={13} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn <ArrowUpRight size={13} />
            </a>
            <button onClick={onPrivacy}>Privacy & preferences</button>
          </div>
          <span>Pakistan · Open to international conversations</span>
        </div>
      </div>
    </footer>
  );
}
