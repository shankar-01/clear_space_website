"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  const firstMenuItems = [
    // { title: "Home", href: "/" },
    { title: "About", href: "/about" },
  ];

  const secondMenuItems = [
    { title: "Pricing", href: "/pricing" },
    { title: "FAQs", href: "/faqs" },
    { title: "Reviews", href: "/reviews" },
    { title: "Gallery", href: "/gallery" },
    { title: "Areas", href: "/coverage" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-[#003366] text-white sticky top-0 z-50 shadow-md">
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
        >
          <span className="font-medium">Menu</span>
          <i className={`fas ${isMobileMenuOpen ? "fa-times" : "fa-bars"}`} />
        </button>

        {/* Desktop & Mobile Navigation */}
        <nav
          className={`${isMobileMenuOpen ? "block" : "hidden"
            } lg:flex flex-col lg:flex-row items-center lg:gap-3 absolute lg:static top-full left-0 w-full lg:w-auto bg-[#003366] lg:bg-transparent p-4 lg:p-0 transition-all duration-300`}
        >
          {/* First set */}
          {firstMenuItems.map((item) => (
            <NavItem key={item.title} item={item} isActive={isActive(item.href)} />
          ))}

          {/* Services - Mega Menu */}
          <div
            className="relative group"
            onMouseEnter={() => setOpenSubmenu("services")}
            onMouseLeave={() => setOpenSubmenu(null)}
          >
            <Link
              href="/services"
              className={`block py-2.5 px-3 rounded transition-all duration-300 flex items-center gap-1
                ${isActive("/our-services")
                  ? "bg-[#66CCFF] text-black font-semibold"
                  : "hover:bg-[#66CCFF] hover:text-black"}
              `}
            >
              Services
              <i className="fas fa-chevron-down text-sm" />
            </Link>

            {/* Submenu */}
            {openSubmenu === "services" && (
              <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 p-6 z-50 grid grid-cols-1 md:grid-cols-3 bg-[#003366] text-white shadow-2xl border border-[#006699] rounded-xl w-[90vw] max-w-5xl">
                {/* Column 1 */}
                <div className="space-y-3 flex flex-col">
                  <ServiceItem
                    title="House Clearance"
                    href="/house-clearance"
                    imgSrc="https://www.iclearpropertyservices.co.uk/wp-content/uploads/service-house-clearance.jpg.webp"
                  />
                  <ServiceItem
                    title="Garden Clearance"
                    href="/garden-clearance"
                    imgSrc="https://www.iclearpropertyservices.co.uk/wp-content/uploads/service-garden-clearing.jpg.webp"
                  />
                  <ServiceItem
                    title="Waste Clearance"
                    href="/waste-clearance"
                    imgSrc="https://www.iclearpropertyservices.co.uk/wp-content/uploads/service-waste-clearance.jpg.webp"
                  />
                </div>

                {/* Column 2 */}
                <div className="space-y-3 flex flex-col">
                  <ServiceItem
                    title="Loft Clearance"
                    href="/loft-clearance"
                    imgSrc="https://www.iclearpropertyservices.co.uk/wp-content/uploads/service-loft-clearance.jpg.webp"
                  />
                  <ServiceItem
                    title="Retirement Homes"
                    href="/care-home-room-clearance"
                    imgSrc="https://www.iclearpropertyservices.co.uk/wp-content/uploads/retirement-home-clearance-services.jpg.webp"
                  />
                  <ServiceItem
                    title="Storage"
                    href="/storage"
                    imgSrc="https://www.iclearpropertyservices.co.uk/wp-content/uploads/self-storage-clearance-services-1.jpg.webp"
                  />
                </div>

                {/* Column 3 */}
                <div className="space-y-3 flex flex-col">
                  <ServiceItem
                    title="Garage Clearance"
                    href="/garage-clearance"
                    imgSrc="https://www.iclearpropertyservices.co.uk/wp-content/uploads/service-garage-clearance.jpg.webp"
                  />
                  <ServiceItem
                    title="Office Clearance"
                    href="/office-clearance"
                    imgSrc="https://www.iclearpropertyservices.co.uk/wp-content/uploads/service-office-clearance2.jpg.webp"
                  />
                  <ServiceItem
                    title="Hoarder Clearance"
                    href="/hoarding-clearance"
                    imgSrc="https://www.iclearpropertyservices.co.uk/wp-content/uploads/service-hoarders.jpg.webp"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Second set */}
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
    <li className="list-none">
      <Link
        href={item.href}
        className={`block py-2.5 px-3 rounded transition duration-300
        ${isActive
            ? "bg-[#66CCFF] text-black font-semibold"
            : "hover:bg-[#66CCFF] hover:text-black"}
        `}
      >
        {item.title}
      </Link>
    </li>
  );
}

function ServiceItem({
  title,
  href,
  imgSrc,
}: {
  title: string;
  href: string;
  imgSrc: string;
}) {
  return (
    <Link
      href={href}
      className="flex items-center gap-2 p-2 rounded hover:bg-[#66CCFF] hover:text-black transition"
    >
      <div className="w-40 h-16 rounded overflow-hidden flex-shrink-0">
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <span className="font-medium">{title}</span>
    </Link>
  );
}
