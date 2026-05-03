import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    emailjs
      .send("nasib_1", "nasib_2", formData, "DNUK7DTyusBxjxR-1")
      .then(() => {
        setLoading(false);
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setLoading(false);
        setSuccess(false);
      });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-zinc-50 to-white px-6 py-24 text-zinc-800 dark:from-charcoal dark:to-charcoal-soft dark:text-zinc-200">
      <div className="w-full max-w-5xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-3 text-center text-sm font-semibold uppercase tracking-widest text-orange-600 dark:text-cyber"
        >
          Contact
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mb-12 text-center text-4xl font-bold tracking-tight text-zinc-900 dark:text-white md:text-5xl"
        >
          Let&apos;s build something
        </motion.p>

        <div className="grid gap-12 md:grid-cols-2">
          <motion.form
            id="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-panel-strong space-y-6 rounded-2xl p-8"
          >
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder=" "
                className="peer w-full rounded-xl border border-zinc-300 bg-transparent px-4 pb-2 pt-5 focus:outline-none focus:ring-2 focus:ring-orange-500 dark:border-zinc-600 dark:focus:ring-cyber"
              />
              <label
                htmlFor="name"
                className="pointer-events-none absolute left-4 top-2.5 text-sm text-zinc-500 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-400"
              >
                Name
              </label>
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder=" "
                className="peer w-full rounded-xl border border-zinc-300 bg-transparent px-4 pb-2 pt-5 focus:outline-none focus:ring-2 focus:ring-orange-500 dark:border-zinc-600 dark:focus:ring-cyber"
              />
              <label
                htmlFor="email"
                className="pointer-events-none absolute left-4 top-2.5 text-sm text-zinc-500 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-400"
              >
                Email
              </label>
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder=" "
                className="peer w-full rounded-xl border border-zinc-300 bg-transparent px-4 pb-2 pt-5 focus:outline-none focus:ring-2 focus:ring-orange-500 dark:border-zinc-600 dark:focus:ring-cyber"
              />
              <label
                htmlFor="message"
                className="pointer-events-none absolute left-4 top-2.5 text-sm text-zinc-500 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-400"
              >
                Message
              </label>
            </div>

            {success === true && (
              <p className="text-sm text-orange-600 dark:text-cyber">Message sent successfully.</p>
            )}
            {success === false && (
              <p className="text-sm text-red-500">Something went wrong. Try again.</p>
            )}

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-orange-600 py-3 font-semibold text-white shadow-lg shadow-orange-600/25 transition hover:bg-orange-500 disabled:opacity-50 dark:bg-cyber dark:text-charcoal dark:shadow-cyber hover:dark:brightness-110"
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center space-y-8"
          >
            <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              Freelance, full-time, or a quick technical chat—drop a line. I usually
              reply within a day or two.
            </p>

            <div className="flex gap-6 text-2xl text-zinc-600 dark:text-zinc-400">
              <a
                href="https://www.linkedin.com/in/nasib-burhan-ab446235b/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-orange-600 dark:hover:text-cyber"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/Nasibcs"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-orange-600 dark:hover:text-cyber"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="#contact-form"
                className="transition hover:text-orange-600 dark:hover:text-cyber"
                aria-label="Jump to contact form"
              >
                <FaEnvelope />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
