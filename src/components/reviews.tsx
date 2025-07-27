"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faTruck, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

export default function ReviewBanner() {
  return (
    <div className="w-full bg-blue-500 text-white p-4 flex flex-wrap items-center justify-between z-[20051]">
      {/* Left Column - Reviews */}
      <div className="flex items-center w-full md:w-1/3 mb-2 md:mb-0">
        <a
          href="https://www.iclearpropertyservices.co.uk/checkatrade-reviews/"
          className="flex items-center space-x-1"
        >
          <p className="text-base font-medium">Read our 5* Reviews</p>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <FontAwesomeIcon
                key={i}
                icon={faStar}
                className="text-yellow-400 text-[18px] -mx-[1px]"
              />
            ))}
          </div>
        </a>
      </div>

      {/* Right Column - Services and Button */}
      <div className="flex items-center justify-end w-full md:w-2/3 gap-2 text-sm">
        <p className="italic text-white whitespace-nowrap">
          Professional clearance services in Surrey/London
        </p>
        <FontAwesomeIcon icon={faTruck} className="text-white text-[18px]" />
        <a
          href="tel:07599248448"
          className="bg-gray-300 text-black px-3 py-1.5 rounded-md flex items-center gap-2 hover:bg-gray-400 transition"
        >
          <FontAwesomeIcon icon={faPhoneAlt} className="text-sm" />
          <span>01372 898 079</span>
        </a>
      </div>
    </div>
  );
}
