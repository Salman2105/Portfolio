import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { FaEnvelope, FaPhoneAlt, FaGlobe, FaWhatsapp, FaTimes } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

export default function Contact() {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // EmailJS configuration - Replace these with your actual values
      const serviceId = 'service_u47gbny';
      const templateId = 'template_6l25lgs';
      const publicKey = 'XMelSz741rd9IlMD_';

      // Template parameters that will be sent to your email
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Salman', // Your name
      };

      const result = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      console.log('Email sent successfully:', result);
      toast.success('Message sent successfully! I will get back to you soon.', {
        duration: 4000,
        position: 'top-center',
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('Failed to send message. Please try again or contact me directly.', {
        duration: 4000,
        position: 'top-center',
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Phone number used in the contact section
  const phoneNumber = "+923187848331";
  // Modal state and refs for centered on-screen modal
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false);
  const phoneBtnRef = useRef(null);
  const overlayRef = useRef(null);
  const modalRef = useRef(null);
  const webBtnRef = useRef(null);

  const openWhatsApp = () => {
    // Open centered modal overlay (no off-screen positioning)
    setShowWhatsAppModal(true);
  };

  // handle choice
  const chooseWhatsApp = (choice) => {
    try {
      const clean = phoneNumber.replace(/\D/g, "");
      const webUrl = `https://web.whatsapp.com/send?phone=${clean}`;
      const appUrl = `whatsapp://send?phone=${clean}`;
      const fallbackUrl = `https://wa.me/${clean}`;

      if (choice === 'web') {
        window.open(webUrl, '_blank');
      } else if (choice === 'app') {
        window.location.href = appUrl;
        setTimeout(() => window.open(fallbackUrl, '_blank'), 700);
      }
    } catch (err) {
      const clean = phoneNumber.replace(/\D/g, "");
      window.open(`https://wa.me/${clean}`, '_blank');
    } finally {
      setShowWhatsAppModal(false);
    }
  };

  // Close on Escape and focus the first actionable button when opened
  useEffect(() => {
    if (!showWhatsAppModal) return;

    // focus the first actionable button inside modal
    const t = setTimeout(() => webBtnRef.current?.focus(), 50);

    const onKey = (e) => { if (e.key === 'Escape') setShowWhatsAppModal(false); };

    document.addEventListener('keydown', onKey);

    return () => {
      clearTimeout(t);
      document.removeEventListener('keydown', onKey);
    };
  }, [showWhatsAppModal]);

  return (
    <>
      <Toaster />
      <section id="contact" className={`relative py-20 text-center transition-colors duration-300 ${
        isDark ? "bg-slate-900 text-white" : "bg-slate-50 text-slate-900"
      }`}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto px-4"
      >
        <h2 className={`text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3 ${
          isDark ? "text-sky-400" : "text-sky-600"
        }`}>
          <FaEnvelope className="text-sky-500 text-4xl" /> Contact Me
        </h2>
        <p className={`mb-10 text-sm ${
          isDark ? "text-slate-400" : "text-slate-600"
        }`}>
          Have a project in mind or just want to say hi? Feel free to send me a message.
        </p>

        <form onSubmit={handleSubmit} className="grid gap-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              className={`w-full px-4 py-3 rounded-md border text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 transition-colors duration-300 ${
                isDark 
                  ? "border-slate-600 bg-slate-800 text-white placeholder-slate-400" 
                  : "border-slate-300 bg-white text-slate-900 placeholder-slate-500"
              }`}
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your Email"
              className={`w-full px-4 py-3 rounded-md border text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 transition-colors duration-300 ${
                isDark 
                  ? "border-slate-600 bg-slate-800 text-white placeholder-slate-400" 
                  : "border-slate-300 bg-white text-slate-900 placeholder-slate-500"
              }`}
            />
          </div>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Your Message"
            rows={5}
            className={`w-full px-4 py-3 rounded-md border text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 transition-colors duration-300 ${
              isDark 
                ? "border-slate-600 bg-slate-800 text-white placeholder-slate-400" 
                : "border-slate-300 bg-white text-slate-900 placeholder-slate-500"
            }`}
          ></textarea>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={isLoading}
            className={`font-medium py-3 px-6 rounded-md shadow-md transition-colors ${
              isLoading 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-sky-600 hover:bg-sky-700 text-white'
            }`}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </motion.button>
        </form>

        <div className={`mt-10 text-sm ${
          isDark ? "text-slate-400" : "text-slate-500"
        }`}>
          <div className="flex items-center justify-center gap-2">
            <FaPhoneAlt className="text-sky-500" />
            <button
              type="button"
              ref={phoneBtnRef}
              onClick={openWhatsApp}
              className={`font-medium text-sky-500 hover:underline focus:outline-none`}
              aria-label="Open phone number in WhatsApp"
            >
              +923187848331
            </button>
          </div>
        </div>
      </motion.div>
      {/* Centered modal overlay for WhatsApp choice */}
      {showWhatsAppModal && (
        <div
          ref={overlayRef}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
          onMouseDown={(e) => { if (e.target === overlayRef.current) setShowWhatsAppModal(false); }}
        >
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            className={`rounded-md shadow-lg p-3 w-72 ring-1 ${isDark ? 'bg-slate-800 text-white ring-slate-700' : 'bg-white text-slate-900 ring-black/5'}`}
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <FaWhatsapp className="text-green-500 w-5 h-5" />
                <span className={`font-medium ${isDark ? 'text-sky-300' : 'text-sky-700'}`}>Open WhatsApp</span>
              </div>
              <button onClick={() => setShowWhatsAppModal(false)} className={`${isDark ? 'text-slate-300 hover:text-slate-100' : 'text-slate-400 hover:text-slate-600'}`}>
                <FaTimes />
              </button>
            </div>

            <p className={`text-xs mb-3 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              Choose where to open the conversation with <strong>+923187848331</strong>.
            </p>

            <div className="flex gap-2">
              <button
                ref={webBtnRef}
                onClick={() => chooseWhatsApp('web')}
                className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-md bg-sky-600 text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-400"
              >
                <FaGlobe className="w-4 h-4" />
                Web
              </button>

              <button
                onClick={() => chooseWhatsApp('app')}
                className={`inline-flex items-center gap-2 px-3 py-2 rounded-md border ${isDark ? 'border-slate-600 hover:bg-slate-700' : 'border-slate-200 hover:bg-slate-50'}`}
              >
                <FaWhatsapp className="w-4 h-4 text-green-500" />
                App
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
    </>
  );
}
