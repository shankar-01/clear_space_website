"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhoneAlt,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

export default function FooterSection() {
  return (
    <footer className="w-full bg-[#e6f3ff] text-[#003366] py-12">
      <div className="w-fullcontainer mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center mb-4">
              <img src="/logo2.png" alt="Clear Space Logo" className="w-max-30 w-fit h-15 mr-2" />
              {/* <h3 className="text-xl font-bold">Clear Space</h3> */}
            </div>
            <p className="text-[#003366cc] mb-4 text-sm">
              Professional property clearance services across Surrey and London.
              Fast, reliable, and environmentally responsible.
            </p>
            <div className="flex space-x-4 mt-3">
              <a href="#" aria-label="Facebook" className="text-[#003366] hover:text-[#66CCFF] transition">
                <FontAwesomeIcon icon={faFacebookF} size="lg" />
              </a>
              <a href="#" aria-label="Instagram" className="text-[#003366] hover:text-[#66CCFF] transition">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
              <a href="#" aria-label="Twitter" className="text-[#003366] hover:text-[#66CCFF] transition">
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-[#003366cc]">
              {[
                "House Clearance",
                "Garden Clearance",
                "Loft Clearance",
                "Office Clearance",
                "Storage Clearance",
                "Hoarder Clearance",
              ].map((service) => (
                <li key={service}>
                  <a href="#services" className="hover:text-[#66CCFF] transition">{service}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coverage */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Coverage Areas</h4>
            <ul className="space-y-2 text-sm text-[#003366cc]">
              {[
                "Greater London",
                "Surrey",
                "Berkshire",
                "Kent",
                "Hampshire",
                "Middlesex",
              ].map((area) => (
                <li key={area}>
                  <a href="#coverage" className="hover:text-[#66CCFF] transition">{area}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4 text-sm text-[#003366cc]">
              <li className="flex items-start gap-3">
                <FontAwesomeIcon icon={faPhoneAlt} className="text-[#66CCFF] mt-1" />
                <a href="tel:07538502777" className="hover:text-[#66CCFF] text-base">
                  07538 502777
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FontAwesomeIcon icon={faEnvelope} className="text-[#66CCFF] mt-1" />
                <a href="mailto:info@clearspace.com" className="hover:text-[#66CCFF] text-base">
                  info@clearspace.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FontAwesomeIcon icon={faWhatsapp} className="text-[#66CCFF] mt-1" />
                <a href="https://wa.me/07538502777" className="hover:text-[#66CCFF] text-base">
                  WhatsApp
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-[#66CCFF] mt-1" />
                <span className="text-base">Surrey & Greater London Areas</span>
              </li>

            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="border-t border-[#66CCFF] mt-10 pt-6 text-center text-sm text-[#00336699]">
          <p>
            © {new Date().getFullYear()} Clear Space House Clearness LTD. All rights reserved.
          </p>
          <div className="mt-2 flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4">
            {["Privacy Policy", "Terms of Service", "Cookies", "Licensing"].map((item) => (
              <a key={item} href="#" className="hover:text-[#66CCFF] transition">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
