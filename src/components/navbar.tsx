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
  const toggleSubmenu = (menu: string) =>
    setOpenSubmenu(openSubmenu === menu ? null : menu);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  const firstMenuItems = [
    { title: "Home", href: "/" },
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
    <nav
      className="flex flex-col lg:flex-row items-center justify-between uppercase tracking-wider relative z-50 text-[16.5px] font-outfit font-medium gap-2"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
    >
      {/* Mobile menu button */}
      <button
        type="button"
        className="lg:hidden flex items-center justify-between w-full py-2 px-4"
        onClick={toggleMobileMenu}
      >
        <span className="font-medium">MENU</span>
        <span className="w-6 h-6 flex items-center justify-center">
          <span className={`fas ${isMobileMenuOpen ? "fa-times" : "fa-bars"}`} />
        </span>
      </button>

      {/* Menu */}
      <ul
        className={`${isMobileMenuOpen ? "block" : "hidden"
          } lg:flex flex-col lg:flex-row w-full lg:w-auto bg-white lg:bg-transparent px-4 lg:px-0 gap-2`}
      >
        {/* First set of links */}
        {firstMenuItems.map((item) => (
          <li key={item.title} className="relative group">
            <Link
              href={item.href}
              className={`block py-2.5 px-3 rounded transition-all duration-300
                ${isActive(item.href)
                  ? "bg-gray-100 font-semibold"
                  : "hover:bg-gray-100 hover:bg-opacity-40"
                }
              `}
            >
              {item.title}
            </Link>
          </li>
        ))}

        {/* Services - Mega Menu */}
        <li
          className="relative group"
          onMouseEnter={() => toggleSubmenu("services")}
          onMouseLeave={() => toggleSubmenu("services")}
        >
          <div className="flex items-center">
            <Link
              href="/services"
              className={`block py-2.5 px-3 rounded transition-all duration-300 flex items-center gap-1
                ${isActive("/our-services")
                  ? "bg-gray-100 font-semibold"
                  : "hover:bg-gray-100 hover:bg-opacity-40"
                }
              `}
            >
              Services
              <span className="fas fa-chevron-down text-sm" />
            </Link>

            <button
              className="lg:hidden p-2"
              onClick={() => toggleSubmenu("services")}
            >
              <span className="fas fa-chevron-down"></span>
            </button>
          </div>

          {openSubmenu === "services" && (
            <div 
            style={{
              display: "flex",
              justifyContent: "space-between",
              boxSizing: "border-box",
            }}
            className="absolute left-1/2 transform -translate-x-1/2 bg-[#6a7f94] shadow-2xl border border-gray-200 rounded-xl mt-2 p-6 z-50 grid grid-cols-1 md:grid-cols-3">
              {/* Column 1 */}
              <div className="space-y-3" style={{ display: "flex", flexDirection: "column", boxSizing: "border-box" }}>
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
              <div className="space-y-3">
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
              <div className="space-y-3">
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
        </li>

        {/* Second set of links */}
        {secondMenuItems.map((item) => (
          <li key={item.title} className="relative group">
            <Link
              href={item.href}
              className={`block py-2.5 px-3 rounded transition-all duration-300
                ${isActive(item.href)
                  ? "bg-gray-100 font-semibold"
                  : "hover:bg-gray-100 hover:bg-opacity-40"
                }
              `}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

const ServiceItem = ({
  title,
  href,
  imgSrc,
}: {
  title: string;
  href: string;
  imgSrc: string;
}) => (
  <Link
    href={href}
    className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded transition"
  >
    <div className="w-40 h-16 rounded overflow-hidden flex-shrink-0">
      <img
        src={imgSrc}
        alt={title}
        className="w-full h-full object-cover"
        width={120}
        height={120}
        loading="lazy"
      />
    </div>
    <span className="font-medium">{title}</span>
  </Link>
);
