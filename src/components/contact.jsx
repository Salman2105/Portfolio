import { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
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
      const serviceId = 'service_nml7h2x';
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
            <FaPhoneAlt className="text-sky-500" /> +92-0318-7848331
          </div>
        </div>
      </motion.div>
    </section>
    </>
  );
}
