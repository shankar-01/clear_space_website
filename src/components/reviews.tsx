"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faTruck, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

export default function ReviewBanner() {
  return (
    <div className="w-full bg-[#e0f4ff] text-[#003366] py-4 px-6 flex flex-col md:flex-row items-center justify-between gap-3 z-[20051] text-sm sm:text-base border-b border-[#c0e6f9] shadow-sm">
      
      {/* Left - Star Reviews */}
      <div className="flex items-center justify-center md:justify-start w-full md:w-1/2">
        <a
          href="https://www.iclearpropertyservices.co.uk/checkatrade-reviews/"
          className="flex items-center gap-2 hover:underline"
        >
          <p className="font-semibold">Read our 5★ Reviews</p>
          <div className="flex space-x-[1px]">
            {[...Array(5)].map((_, i) => (
              <FontAwesomeIcon
                key={i}
                icon={faStar}
                className="text-yellow-500 text-[16px] sm:text-[18px]"
              />
            ))}
          </div>
        </a>
      </div>

      {/* Right - Service Info + Call Now */}
      <div className="flex flex-col sm:flex-row items-center justify-center md:justify-end w-full md:w-1/2 gap-2 sm:gap-4">
        <p className="italic text-center sm:text-left whitespace-nowrap text-[#003366]">
          Professional clearance in Surrey & London
        </p>
        <FontAwesomeIcon icon={faTruck} className="text-[#003366] text-[16px]" />
        <a
          href="tel:07599248448"
          className="bg-[#003366] text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-[#002244] transition font-medium text-[15px]"
        >
          <FontAwesomeIcon icon={faPhoneAlt} className="text-sm" />
          <span className="whitespace-nowrap">01372 898 079</span>
        </a>
      </div>
    </div>
  );
}
