import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import food from "./images/food.jpg";
import elearn from "./images/elearna (2).png";
import un from "./images/un.png";
import form from "./images/form1.png";
import portfolio from "./images/portfolio .png";
import paint from "./images/paint.png";

const projects = [
  {
    title: "Elearna · Online Learning",
    description:
      "Course delivery, quizzes, and progress UX—frontend experience with scalable content structure.",
    link: "https://elearna-website.vercel.app/",
    repo: "https://github.com/Nasibcs/Elearna-website",
    image: elearn,
    tags: ["React", "JavaScript", "Tailwind"],
  },
  {
    title: "University Admin Panel",
    description:
      "Operations tooling for courses, faculty, and student records—with structured data and robust UI.",
    link: "https://university-admin-panel-dun.vercel.app/",
    repo: "https://github.com/Nasibcs/University-Admin-Panel-",
    image: un,
    tags: ["React", "TypeScript", "Tailwind"],
  },
  {
    title: "Form Validation",
    description:
      "Client-side validation patterns and error handling for React forms—ready to pair with any API.",
    link: "https://from-validation-two.vercel.app/",
    repo: "https://github.com/Nasibcs/From-validation-",
    image: form,
    tags: ["React", "JavaScript", "Tailwind"],
  },
  {
    title: "Portfolio",
    description:
      "This site—showcasing projects and contact. Swap assets and copy anytime as your work grows.",
    link: "https://new-portfolio-seven-taupe.vercel.app/",
    repo: "https://github.com/Nasibcs",
    image: portfolio,
    tags: ["React", "Vite", "Tailwind"],
  },
  {
    title: "Afghan Food Delivery",
    description:
      "Ordering flow for local restaurants—product UI you can extend with payments and a real backend.",
    link: "#",
    repo: "#",
    image: food,
    tags: ["React", "JavaScript", "Tailwind"],
  },
  {
    title: "Afghan Paint",
    description:
      "Business-focused UI for paint and inventory-style workflows—adaptable to your domain model.",
    link: "#",
    repo: "#",
    image: paint,
    tags: ["React", "JavaScript", "Tailwind"],
  },
];

export default function ProjectsSection() {
  return (
    <section className="border-t border-zinc-200/90 bg-gradient-to-b from-white to-zinc-50/90 px-4 py-24 transition-colors dark:border-white/10 dark:from-charcoal dark:to-charcoal-soft sm:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center lg:text-left"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-orange-600 dark:text-cyber">
            Work
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl md:text-5xl">
            Selected projects
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400 lg:mx-0">
            Full stack perspective: interfaces, data, and integration points. Update
            links and thumbnails whenever you ship something new.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
              whileHover={{ y: -6 }}
              className="group relative flex h-full flex-col"
            >
              <div className="glass-panel-strong flex h-full flex-col overflow-hidden rounded-2xl transition duration-300 group-hover:border-cyber/35 group-hover:shadow-[0_0_32px_rgba(204,255,0,0.12)] dark:group-hover:border-cyber/40">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt=""
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/85 via-zinc-950/10 to-transparent dark:from-charcoal/95" />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="mt-2 flex-1 text-zinc-600 dark:text-zinc-400">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg border border-orange-500/25 bg-orange-500/10 px-2.5 py-0.5 text-xs font-medium text-zinc-700 dark:border-cyber/20 dark:bg-cyber/10 dark:text-zinc-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex gap-3">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                        project.link === "#"
                          ? "cursor-not-allowed border border-zinc-200 bg-zinc-100 text-zinc-400 dark:border-zinc-700 dark:bg-charcoal-elevated dark:text-zinc-600"
                          : "bg-orange-600 text-white shadow-md shadow-orange-600/25 hover:bg-orange-500 dark:bg-cyber dark:text-charcoal dark:shadow-cyber hover:dark:brightness-110"
                      }`}
                      onClick={(e) => project.link === "#" && e.preventDefault()}
                    >
                      <FiExternalLink className="h-4 w-4 shrink-0" />
                      Live
                    </a>
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex flex-1 items-center justify-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-semibold transition ${
                        project.repo === "#"
                          ? "cursor-not-allowed border-zinc-200 text-zinc-400 dark:border-zinc-700 dark:text-zinc-600"
                          : "glass-panel border-zinc-300 text-zinc-800 hover:border-orange-400/45 dark:text-zinc-200 dark:hover:border-cyber/40 dark:hover:bg-cyber/5"
                      }`}
                      onClick={(e) => project.repo === "#" && e.preventDefault()}
                    >
                      <FiGithub className="h-4 w-4 shrink-0" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
