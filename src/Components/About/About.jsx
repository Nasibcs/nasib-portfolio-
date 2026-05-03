import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import image from "./images/image.jpeg";

const skills = [
  "React · Next-style SPA",
  "TypeScript · JavaScript",
  "Node.js · REST APIs",
  "Databases & auth",
  "UI polish & UX",
];

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 via-white to-orange-50/40 dark:from-charcoal dark:via-charcoal dark:to-charcoal-soft">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 py-28 lg:flex-row lg:items-center lg:justify-between lg:px-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          whileHover={{ scale: 1.02 }}
          className="relative shrink-0"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-orange-300/35 to-violet-300/20 blur-2xl dark:from-cyber/14 dark:to-cyber/5" />
          <img
            src={image}
            alt="Nasib Burhan"
            className="relative aspect-square w-[min(100%,22rem)] max-w-md rounded-[1.75rem] border border-zinc-200/90 object-cover shadow-glass dark:border-white/15 dark:shadow-glass-dark md:w-[24rem]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 36 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="glass-panel-strong w-full max-w-2xl rounded-[1.75rem] p-10"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-orange-600 dark:text-cyber">
            About
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-zinc-900 dark:text-white md:text-5xl">
            Building products, not just pages
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            I&apos;m{" "}
            <span className="font-semibold text-orange-600 dark:text-cyber">Nasib</span>—
            a full stack web developer focused on clear architecture, dependable APIs, and
            interfaces that feel fast and intentional.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            From database design and authentication to polished React frontends, I enjoy
            owning features across the stack and shipping maintainable code.
          </p>

          <ul className="mt-8 flex flex-wrap gap-2">
            {skills.map((s) => (
              <li
                key={s}
                className="rounded-lg border border-orange-500/25 bg-orange-500/10 px-3 py-1.5 text-sm font-medium text-zinc-700 dark:border-cyber/20 dark:bg-cyber/10 dark:text-zinc-200"
              >
                {s}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-5 text-xl text-zinc-600 dark:text-zinc-400">
            <a
              href="https://www.linkedin.com/in/nasib-burhan-ab446235b/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-orange-600 dark:hover:text-cyber"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-7 w-7" />
            </a>
            <a
              href="https://github.com/Nasibcs"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-orange-600 dark:hover:text-cyber"
              aria-label="GitHub"
            >
              <FaGithub className="h-7 w-7" />
            </a>
            <Link
              to="/contact"
              className="transition hover:text-orange-600 dark:hover:text-cyber"
              aria-label="Email via contact form"
            >
              <FaEnvelope className="h-7 w-7" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
