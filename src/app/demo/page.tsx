"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function HomePage() {
  return (
    <main className="bg-[#f5f7fa] min-h-screen font-sans">
      {/* Hero Section */}
      <section className="px-6 pt-24 pb-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          <div>
            <h1 className="text-5xl font-extrabold mb-4 leading-tight text-[#003366]">
              Clear Your Space.<br />
              <span className="text-[#66CCFF]">Effortlessly.</span>
            </h1>
            <p className="text-gray-600 text-lg mb-6">
              Say goodbye to clutter. We provide fast, eco-conscious clearance for homes,
              offices, gardens, and more.
            </p>
            <a
              href="#services"
              className="inline-flex items-center bg-[#66CCFF] hover:bg-[#4aaee0] text-white font-semibold px-6 py-3 rounded-full transition"
            >
              View Services <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </a>
          </div>

          <div className="relative">
            <img
              src="/images/hero-clearance.png"
              alt="Clearance visual"
              className="w-full drop-shadow-2xl rounded-3xl"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#003366] mb-12">
            What We Can Clear for You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "House Clearance", icon: "🏠", desc: "Full home decluttering, removal, and disposal." },
              { title: "Office Clearance", icon: "🏢", desc: "Desks, tech, files – cleared and recycled." },
              { title: "Garden Clearance", icon: "🌿", desc: "Leaves, fencing, green waste – gone." },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 bg-[#f0f8ff] rounded-2xl shadow-md text-center hover:shadow-lg transition"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-[#003366] mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-[#003366] text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6 text-center">
          <div>
            <h3 className="text-4xl font-bold">1,000+</h3>
            <p className="text-sm text-[#cceeff]">Clearances Completed</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">4.9★</h3>
            <p className="text-sm text-[#cceeff]">Average Client Rating</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">98%</h3>
            <p className="text-sm text-[#cceeff]">Waste Responsibly Recycled</p>
          </div>
        </div>
      </section>
    </main>
  );
}
