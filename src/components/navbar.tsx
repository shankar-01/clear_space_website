"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => {
      const isMobile = window.innerWidth < 1024;
      setIsMobileView(isMobile);
      if (!isMobile) {
        setIsMobileMenuOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  const menuItems = [
    { title: "About", href: "/about" },
    { title: "Services", href: "/services" },
    { title: "Pricing", href: "/pricing" },
    { title: "FAQs", href: "/faqs" },
    { title: "Reviews", href: "/reviews" },
    { title: "Gallery", href: "/gallery" },
    { title: "Areas", href: "/coverage" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-[#003366] text-white sticky top-0 z-[9999] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center relative">
        {/* Logo */}
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="flex items-center"
        >
          <Link href="/">
            <img
              src="/logo1.png"
              alt="Clear Space Logo"
              className="h-12 md:h-16 w-auto object-contain"
            />
          </Link>
        </motion.div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="lg:hidden flex items-center gap-2 text-white"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <motion.span
            initial={{ rotate: 0 }}
            animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <i className={`fas ${isMobileMenuOpen ? "fa-times" : "fa-bars"} text-xl`} />
          </motion.span>
        </button>

        {/* Nav Items */}
        <nav className={`lg:flex lg:items-center lg:gap-6 ${isMobileView ? "block" : ""}`}>
          {isMobileView ? (
            <AnimatePresence>
              {isMobileMenuOpen && (
                <motion.ul
                  key="mobile-menu"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-2 mt-4 bg-[#003366] px-2 py-4 rounded-lg shadow-lg"
                >
                  {menuItems.map((item) => (
                    <NavItem key={item.title} item={item} isActive={isActive(item.href)} />
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          ) : (
            <ul className="flex gap-6 items-center">
              {menuItems.map((item) => (
                <NavItem key={item.title} item={item} isActive={isActive(item.href)} />
              ))}
            </ul>
          )}
        </nav>
      </div>
    </header>
  );
}

function NavItem({
  item,
  isActive,
}: {
  item: { title: string; href: string };
  isActive: boolean;
}) {
  return (
    <li className="list-none">
      <Link
        href={item.href}
        className={`block px-4 py-2 rounded-lg text-sm transition-all relative
        ${
          isActive
            ? "bg-[#66CCFF] text-black font-semibold"
            : "hover:bg-white/10 hover:text-[#66CCFF]"
        }`}
      >
        {item.title}
      </Link>
    </li>
  );
}
