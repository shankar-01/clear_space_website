"use client";
import { useState } from "react";
import Image from "next/image";

const pricingOptions = [
  {
    name: "Small Single Item",
    image: "/pricing/sm-item.png",
    load: "1/8 Load",
    team: "1 Person Team",
    price: "£30 - £50",
  },
  {
    name: "Large Single Item",
    image: "/pricing/lgs-item.png",
    load: "1/6 Load",
    team: "2 Person Team",
    price: "£60 - £80",
  },
  {
    name: "X-Small Clearance",
    image: "/pricing/xs-clear.png",
    load: "1/8 Load",
    team: "1 Person Team",
    price: "£40 - £60",
  },
  {
    name: "Small Clearance",
    image: "/pricing/sm-clear.png",
    load: "1/4 Load",
    team: "2 Person Team",
    price: "£70 - £100",
  },
  {
    name: "Medium Clearance",
    image: "/pricing/md-clear.png",
    load: "1/2 Load",
    team: "2 Person Team",
    price: "£120 - £160",
  },
  {
    name: "Large Clearance",
    image: "/pricing/lg-clear.png",
    load: "3/4 Load",
    team: "2 Person Team",
    price: "£180 - £220",
  },
  {
    name: "X-Large Clearance",
    image: "/pricing/xlg-clear.png",
    load: "Full Load",
    team: "2 Person Team",
    price: "£250 - £300",
  },
];

export default function PricingPage() {
  const [selected, setSelected] = useState(pricingOptions[0]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-[max-content_2fr_1fr] gap-8 ">
        {/* Left Section: Option Buttons */}
        <div className="space-y-3 w-fit-content flex flex-col">
          {pricingOptions.map((option) => (
            <button
              key={option.name}
              onClick={() => setSelected(option)}
              className={`w-50 px-4 py-3 rounded-lg text-left font-medium shadow ${
                selected.name === option.name
                  ? "bg-blue-600 text-white"
                  : "bg-white hover:bg-gray-200"
              }`}
            >
              {option.name}
            </button>
          ))}
        </div>

        {/* Middle Section: Details */}
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <Image
            src={selected.image}
            alt={selected.name}
            width={600}
            height={400}
            className="w-full h-64 object-fit rounded-lg mb-4"
          />
          <h2 className="text-2xl font-bold mb-2">{selected.name}</h2>
          <p className="text-gray-700 mb-1">{selected.load}</p>
          <p className="text-gray-700 mb-1">{selected.team}</p>
          <p className="text-xl font-semibold text-green-700 mt-4">{selected.price}</p>
        </div>

        {/* Right Section: Form */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4">Request a Call Back</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name *</label>
              <input type="text" required className="w-full border p-2 rounded" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Phone Number *</label>
              <input type="tel" required className="w-full border p-2 rounded" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email Address *</label>
              <input type="email" required className="w-full border p-2 rounded" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Postcode *</label>
              <input type="text" required className="w-full border p-2 rounded" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea className="w-full border p-2 rounded" rows={3}></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
            >
              Request a Quote
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
