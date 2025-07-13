import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Integrate with EmailJS, Formspree, or backend here
    alert("Message sent! (Simulation)");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative py-20 bg-slate-50 dark:bg-slate-900 text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto px-4"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-sky-600 dark:text-sky-400 mb-4 flex items-center justify-center gap-3">
          <FaEnvelope className="text-sky-500 text-4xl" /> Contact Me
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mb-10 text-sm">
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
              className="w-full px-4 py-3 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Your Message"
            rows={5}
            className="w-full px-4 py-3 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
          ></textarea>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-sky-600 hover:bg-sky-700 text-white font-medium py-3 px-6 rounded-md shadow-md"
          >
            Send Message
          </motion.button>
        </form>

        <div className="mt-10 text-sm text-slate-500 dark:text-slate-400">
          <div className="flex items-center justify-center gap-2">
            <FaPhoneAlt className="text-sky-500" /> +92-0318-7848331
          </div>
        </div>
      </motion.div>
    </section>
  );
}
