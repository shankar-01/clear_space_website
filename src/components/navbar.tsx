"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaInfoCircle,
  FaConciergeBell,
  FaDollarSign,
  FaQuestionCircle,
  FaStar,
  FaImages,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";

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
    { title: "About", href: "/about", icon: <FaInfoCircle /> },
    { title: "Services", href: "/services", icon: <FaConciergeBell /> },
    { title: "Pricing", href: "/pricing", icon: <FaDollarSign /> },
    { title: "FAQs", href: "/faqs", icon: <FaQuestionCircle /> },
    { title: "Reviews", href: "/reviews", icon: <FaStar /> },
    { title: "Gallery", href: "/gallery", icon: <FaImages /> },
    { title: "Areas", href: "/coverage", icon: <FaMapMarkerAlt /> },
    { title: "Contact", href: "/contact", icon: <FaEnvelope /> },
  ];

  const NavItem = ({
    item,
    isActive,
    onClick,
  }: {
    item: { title: string; href: string; icon?: React.ReactNode };
    isActive: boolean;
    onClick?: () => void;
  }) => (
    <li className="list-none">
      <Link
        href={item.href}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-all relative
        ${
          isActive
            ? "bg-[#66CCFF] text-black font-semibold"
            : "hover:bg-white/10 hover:text-[#66CCFF]"
        }`}
        onClick={onClick}
      >
        {item.icon && <span className="text-lg">{item.icon}</span>}
        {item.title}
      </Link>
    </li>
  );

  return (
    <header className="bg-[#003366] text-white sticky top-0 z-[9999] shadow-lg">
      <div className="w-full mx-auto px-4 py-3 flex justify-between items-center relative">
        {/* Logo */}
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="flex items-center"
        >
          <Link href="/">
            <img
              src="/logo.png"
              alt="Clear Space Logo"
              className="h-12 md:h-16 w-auto object-contain"
            />
          </Link>
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex lg:items-center lg:gap-6">
          <ul className="flex gap-6 items-center">
            {menuItems.map((item) => (
              <NavItem
                key={item.title}
                item={item}
                isActive={isActive(item.href)}
              />
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            type="button"
            className="flex items-center gap-2 text-white"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <motion.span
              initial={{ rotate: 0 }}
              animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <i
                className={`fas ${
                  isMobileMenuOpen ? "fa-times" : "fa-bars"
                } text-xl`}
              />
            </motion.span>
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && isMobileView && (
          <motion.nav
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden px-4"
          >
            <ul className="flex flex-col gap-2 mt-4 bg-[#003366] px-4 py-4 rounded-lg shadow-lg">
              {menuItems.map((item) => (
                <NavItem
                  key={item.title}
                  item={item}
                  isActive={isActive(item.href)}
                  onClick={() => setIsMobileMenuOpen(false)}
                />
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
