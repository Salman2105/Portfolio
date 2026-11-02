import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Check,
  Copy,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  X,
} from "lucide-react";
import { FaGithub as Github, FaLinkedinIn as Linkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { profile } from "../data/portfolio";
import { ExternalLink, Reveal } from "./ui";
export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    website: "",
  });
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");
  const [copied, setCopied] = useState(false);
  const whatsApp = useRef(null);
  const copyTimer = useRef(null);
  useEffect(() => () => clearTimeout(copyTimer.current), []);
  const update = (event) =>
    setForm((previous) => ({
      ...previous,
      [event.target.name]: event.target.value,
    }));
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      clearTimeout(copyTimer.current);
      copyTimer.current = setTimeout(() => setCopied(false), 2500);
    } catch {
      toast.error(
        "Copy is unavailable. You can select the email address below.",
      );
    }
  };
  const submit = async (event) => {
    event.preventDefault();
    if (sending || form.website) return;
    if (!form.name.trim() || !form.message.trim()) {
      setStatus("Please enter your name and a message.");
      return;
    }
    setSending(true);
    setStatus("");
    try {
      // EmailJS browser public key is intentionally public; no server credentials belong here.
      await emailjs.send(
        "service_u47gbny",
        "template_6l25lgs",
        {
          from_name: form.name.trim(),
          from_email: form.email.trim(),
          message: form.message.trim(),
          to_name: "Salman",
        },
        "XMelSz741rd9IlMD_",
      );
      setStatus("Thanks for reaching out. Your message has been sent.");
      toast.success("Message sent successfully.");
      setForm({ name: "", email: "", message: "", website: "" });
    } catch {
      setStatus(
        "Your message could not be sent. Please try again or email me directly.",
      );
      toast.error("Message could not be sent.");
    } finally {
      setSending(false);
    }
  };
  const cleanPhone = profile.phone.replace(/\D/g, "");
  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-grid">
        <Reveal className="contact-copy">
          <p className="eyebrow">
            <span>07</span> THE NEXT CONVERSATION
          </p>
          <h2>
            Good work starts
            <br />
            with a <span>hello.</span>
          </h2>
          <p>
            Have a role, a project, or an engineering problem in mind? I’d be
            happy to hear about it.
          </p>
          <p className="contact-interest">
            Interested in full-stack opportunities with teams in Germany and
            around the world.
          </p>
          <div className="contact-email-row">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <button
              className="icon-button"
              onClick={copyEmail}
              aria-label={
                copied ? "Email address copied" : "Copy email address"
              }
            >
              {copied ? <Check size={17} /> : <Copy size={17} />}
            </button>
          </div>
          <div className="contact-location">
            <MapPin size={15} /> {profile.location}
            <span>UTC+5</span>
          </div>
          <div className="contact-socials">
            <ExternalLink href={profile.github}>
              <Github size={17} /> GitHub
            </ExternalLink>
            <ExternalLink href={profile.linkedin}>
              <Linkedin size={17} /> LinkedIn
            </ExternalLink>
            <button onClick={() => whatsApp.current.showModal()}>
              <MessageCircle size={17} /> WhatsApp <ArrowUpRight size={15} />
            </button>
          </div>
        </Reveal>
        <Reveal className="contact-form-wrap" delay={0.08}>
          <form onSubmit={submit} className="contact-form">
            <div className="form-heading">
              <Mail size={22} strokeWidth={1.5} />
              <h3>Let’s connect.</h3>
            </div>
            <div className="form-row">
              <label htmlFor="contact-name">
                Your name
                <input
                  id="contact-name"
                  name="name"
                  autoComplete="name"
                  value={form.name}
                  onChange={update}
                  required
                  maxLength={100}
                  placeholder="Alex Morgan"
                  disabled={sending}
                />
              </label>
              <label htmlFor="contact-email">
                Email address
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={update}
                  required
                  maxLength={254}
                  placeholder="alex@company.com"
                  disabled={sending}
                />
              </label>
            </div>
            <label htmlFor="contact-message">
              What would you like to discuss?
              <textarea
                id="contact-message"
                name="message"
                value={form.message}
                onChange={update}
                required
                minLength={10}
                maxLength={5000}
                rows={5}
                placeholder="A little about your team, project, or opportunity…"
                disabled={sending}
              />
            </label>
            <div className="form-trap" aria-hidden="true">
              <label>
                Website
                <input
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.website}
                  onChange={update}
                />
              </label>
            </div>
            <p className="form-privacy">
              Your name, email, and message are sent through EmailJS so I can
              respond. Please leave out sensitive information.
            </p>
            <button
              className="button button-primary send-button"
              type="submit"
              disabled={sending}
            >
              {sending ? "Sending your message…" : "Send message"}
              <Send size={16} />
            </button>
            <p className="form-status" role="status">
              {status}
            </p>
          </form>
        </Reveal>
      </div>
      <dialog
        ref={whatsApp}
        className="whatsapp-dialog"
        aria-labelledby="whatsapp-title"
        onClick={(event) => {
          if (event.target === whatsApp.current) whatsApp.current.close();
        }}
      >
        <div className="dialog-top">
          <MessageCircle size={23} />
          <button
            className="icon-button"
            onClick={() => whatsApp.current.close()}
            aria-label="Close WhatsApp options"
          >
            <X size={20} />
          </button>
        </div>
        <h2 id="whatsapp-title">Continue on WhatsApp</h2>
        <p>Choose how to open a conversation with {profile.phone}.</p>
        <div className="whatsapp-options">
          <a
            className="button button-primary"
            href={`https://web.whatsapp.com/send?phone=${cleanPhone}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => whatsApp.current.close()}
          >
            WhatsApp Web <ArrowUpRight size={16} />
          </a>
          <a
            className="button button-outline"
            href={`https://wa.me/${cleanPhone}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => whatsApp.current.close()}
          >
            Open WhatsApp <ArrowUpRight size={16} />
          </a>
        </div>
      </dialog>
    </section>
  );
}
