'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';


export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [, setOpenSubmenu] = useState<string | null>(null);
  const [, setIsMobileView] = useState(false);

  // Resize handling (with safe window check)
  useEffect(() => {
    if (typeof window === 'undefined') return;

    function handleResize() {
      setIsMobileView(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false); // Close mobile menu on desktop
        setOpenSubmenu(null);
      }
    }

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + '/');

  const firstMenuItems = [
    // { title: "Home", href: "/" },
    { title: 'About', href: '/about' },
  ];

  const secondMenuItems = [
    { title: 'Services', href: '/services' },
    { title: 'Pricing', href: '/pricing' },
    { title: 'FAQs', href: '/faqs' },
    { title: 'Reviews', href: '/reviews' },
    { title: 'Gallery', href: '/gallery' },
    { title: 'Areas', href: '/coverage' },
    { title: 'Contact', href: '/contact' },
  ];

  return (
    <header className="bg-[#003366] text-white sticky top-0 z-[9999] shadow-md">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <img
              src="/logo1.png"
              alt="Clear Space Logo"
              className="w-fit h-27 object-contain"
            />
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden flex items-center gap-2 text-white"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span className="font-medium">Menu</span>
          <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`} />
        </button>

        {/* Navigation */}
        <nav
          className={`${
            isMobileMenuOpen ? 'block' : 'hidden'
          } lg:flex flex-col lg:flex-row items-start lg:items-center lg:gap-3 absolute lg:static top-full left-0 w-full lg:w-auto bg-[#003366] lg:bg-transparent p-4 lg:p-0 transition-all duration-300`}
        >
          {firstMenuItems.map((item) => (
            <NavItem key={item.title} item={item} isActive={isActive(item.href)} />
          ))}
          {secondMenuItems.map((item) => (
            <NavItem key={item.title} item={item} isActive={isActive(item.href)} />
          ))}
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
    <li className="list-none w-full lg:w-auto">
      <Link
        href={item.href}
        className={`block py-2.5 px-3 rounded transition duration-300 w-full
        ${
          isActive
            ? 'bg-[#66CCFF] text-black font-semibold'
            : 'hover:bg-[#66CCFF] hover:text-black'
        }`}
      >
        {item.title}
      </Link>
    </li>
  );
}
