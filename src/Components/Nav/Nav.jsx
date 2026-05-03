import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import ThemeToggle from "../../DarkMode/ThemsToggle";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hidden, setHidden] = useState(false);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    setScrolled(currentScrollY > 10);

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setHidden(true);
    } else {
      setHidden(false);
    }

    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  /* Lock page scroll while mobile menu is open (iOS overscroll won't close menu or scroll behind). */
  useEffect(() => {
    if (!isOpen) return undefined;

    const scrollY = window.scrollY;
    const body = document.body;
    const html = document.documentElement;

    const prevOverflow = body.style.overflow;
    const prevPosition = body.style.position;
    const prevTop = body.style.top;
    const prevLeft = body.style.left;
    const prevRight = body.style.right;
    const prevWidth = body.style.width;
    const prevOverscroll = html.style.overscrollBehavior;

    body.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";
    html.style.overscrollBehavior = "none";

    return () => {
      body.style.overflow = prevOverflow;
      body.style.position = prevPosition;
      body.style.top = prevTop;
      body.style.left = prevLeft;
      body.style.right = prevRight;
      body.style.width = prevWidth;
      html.style.overscrollBehavior = prevOverscroll;
      window.scrollTo(0, scrollY);
    };
  }, [isOpen]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const mobileNavVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 },
  };

  const navVariants = {
    visible: { y: 0 },
    hidden: { y: -100 },
  };

  return (
    <motion.nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-zinc-200/90 bg-white/75 py-3 shadow-sm backdrop-blur-2xl dark:border-white/10 dark:bg-charcoal/80 dark:backdrop-blur-2xl"
          : "bg-transparent py-4"
      }`}
      initial={{ y: -100 }}
      animate={hidden && !isOpen ? "hidden" : "visible"}
      variants={navVariants}
      transition={{ duration: 0.3 }}
    >
      <div
        className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${
          isOpen ? "relative z-[70]" : ""
        }`}
      >
        <div className="flex h-16 items-center justify-between">
          <motion.div whileHover={{ scale: 1.02 }}>
            <Link to="/" className="block leading-tight">
              <span className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-2xl">
                Nasib
              </span>
              <span className="hidden text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-orange-600 dark:text-cyber sm:block">
                Full stack
              </span>
            </Link>
          </motion.div>

          <div className="hidden items-center space-x-8 md:flex">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <motion.li key={item.name} whileHover={{ y: -2 }}>
                  <Link
                    to={item.path}
                    className="group relative font-medium text-zinc-700 transition-colors hover:text-orange-600 dark:text-zinc-300 dark:hover:text-cyber"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 h-0.5 w-0 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 transition-all duration-300 group-hover:w-full dark:from-cyber dark:to-cyber-muted" />
                  </Link>
                </motion.li>
              ))}
            </ul>
            <motion.div whileTap={{ scale: 0.95 }}>
              <ThemeToggle />
            </motion.div>
          </div>

          <div className="flex items-center md:hidden">
            <motion.div whileTap={{ scale: 0.9 }}>
              <ThemeToggle className="mr-4" />
            </motion.div>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-md p-2 text-zinc-700 focus:outline-none dark:text-zinc-200"
            >
              {isOpen ? <IoMdClose className="h-6 w-6" /> : <HiOutlineMenuAlt1 className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[55] flex flex-col items-center justify-center overscroll-none bg-white/85 backdrop-blur-2xl dark:bg-charcoal/92 md:hidden"
            role="presentation"
            onClick={() => setIsOpen(false)}
          >
            <motion.ul
              variants={mobileNavVariant}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="space-y-8 text-center"
              onClick={(e) => e.stopPropagation()}
            >
              {navItems.map((item) => (
                <motion.li key={item.name} variants={itemVariant}>
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 text-2xl font-semibold text-zinc-700 transition-colors hover:text-orange-600 dark:text-zinc-200 dark:hover:text-cyber"
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
