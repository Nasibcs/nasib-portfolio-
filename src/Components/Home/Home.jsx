import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import img from "../About/images/image.jpeg";

export default function Landing() {
  return (
    <section className="relative isolate flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden px-5 pb-24 pt-28 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:px-12 xl:mx-auto xl:max-w-7xl">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_55%_at_50%_-15%,rgba(59,130,246,0.08),transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%-10%,rgba(204,255,0,0.09),transparent)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-32 top-1/4 h-[28rem] w-[28rem] rounded-full bg-orange-400/15 blur-[100px] dark:bg-cyber/10"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-1/4 h-72 w-72 rounded-full bg-violet-400/12 blur-[90px] dark:bg-cyber/10"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-zinc-300/70 to-transparent dark:via-cyber/25"
        aria-hidden
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65 }}
        className="relative order-2 flex w-full max-w-md shrink-0 justify-center lg:order-1 lg:max-w-none lg:flex-1"
      >
        <div className="relative">
          <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-orange-300/25 via-transparent to-violet-300/25 opacity-90 blur-xl dark:from-cyber/12 dark:to-cyber/5" />
          <div className="glass-panel-strong relative aspect-square w-[min(85vw,20rem)] overflow-hidden rounded-[2rem] shadow-glass ring-1 ring-zinc-200/80 dark:border dark:border-white/10 dark:bg-charcoal-soft/50 dark:ring-cyber/15 sm:w-[min(72vw,22rem)] md:w-[min(60vw,24rem)] lg:w-[min(42vw,26rem)]">
            <img src={img} alt="Nasib Burhan" className="h-full w-full object-cover" />
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.08 }}
        className="relative order-1 flex w-full max-w-xl flex-col items-center text-center lg:order-2 lg:max-w-2xl lg:items-start lg:text-left xl:max-w-[32rem]"
      >
        <span className="glass-panel mb-5 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-800 dark:border-cyber/25 dark:text-cyber">
          Full stack web developer
        </span>

        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl md:text-6xl lg:text-[3.35rem] lg:leading-[1.1] xl:text-6xl">
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-orange-400 bg-clip-text text-transparent dark:from-cyber dark:via-cyber-glow dark:to-cyber-muted">
            Nasib
          </span>
        </h1>

        <p className="mt-6 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-xl">
          I ship end-to-end products—polished interfaces, solid APIs, and data layers
          that scale. Frontend craft meets backend clarity.
        </p>

        <p className="mt-3 max-w-xl text-base text-zinc-500 dark:text-zinc-500">
          React · TypeScript · Node · REST APIs · SQL & pragmatic architecture.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
          <Link
            to="/projects"
            className="inline-flex items-center justify-center rounded-xl bg-orange-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-600/25 transition hover:bg-orange-500 dark:bg-cyber dark:text-charcoal dark:shadow-cyber hover:dark:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyber dark:focus-visible:outline-cyber"
          >
            View projects
          </Link>
          <Link
            to="/contact"
            className="glass-panel inline-flex items-center justify-center rounded-xl px-8 py-3 text-sm font-semibold text-zinc-800 transition hover:border-cyber/40 hover:text-orange-700 dark:text-zinc-200 dark:hover:border-cyber/35 dark:hover:text-cyber"
          >
            Let&apos;s talk
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
