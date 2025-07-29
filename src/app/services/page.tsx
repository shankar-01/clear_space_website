"use client";
import Image from "next/image";
import { FaPhone, FaCalendarAlt, FaRecycle } from "react-icons/fa";

const services = [
  {
    title: "House Clearances",
    desc: "Enjoy a stress-free house clearance experience with Clear Property Services. Our skilled team specialises in collecting junk, whether general or specific to areas like the shed, attic, or basement.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  },
  {
    title: "Garden Clearances",
    desc: "We assist with all your garden clearance needs. We take pride in providing licensed services tailored to meet full and practical clearance requirements at competitive rates.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  },
  {
    title: "Loft Clearance",
    desc: "Benefit from our 15 years of experience and our trained teams swiftly managing disruptions and maintaining peace. We also assess and clear responsibly.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  },
  {
    title: "Office Clearances",
    desc: "We provide office clearance services for businesses of all sizes. Our team ensures a smooth and efficient process, handling waste efficiently.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  },
  {
    title: "Residential Clearances",
    desc: "We offer residential clearance services for homes and apartments. Our team ensures a smooth and efficient process, handling waste efficiently.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  },
  {
    title: "Commercial Clearances",
    desc: "We provide commercial clearance services for businesses of all sizes. Our team ensures a smooth and efficient process, handling waste efficiently.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  },
];

const howItWorks = [
  {
    icon: <FaPhone className="text-blue-600 text-2xl" />,
    title: "Get in touch",
    desc: "Operating round the clock, seven days a week, we prioritise punctuality and professionalism. Count on us to promptly clear your waste, leaving your site impeccably tidy.",
  },
  {
    icon: <FaCalendarAlt className="text-blue-600 text-2xl" />,
    title: "Select a date",
    desc: "Our team offers flexible scheduling to accommodate your needs. We will provide an estimated arrival time, ensuring you are not kept waiting.",
  },
  {
    icon: <FaRecycle className="text-blue-600 text-2xl" />,
    title: "Waste Removal",
    desc: "We transport your waste to licensed transfer sites, where as much of it is reused and recycled as possible. Rest assured, your waste is handled in full compliance with legal and environmental regulations.",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-[#5a6d84] min-h-screen text-gray-800">
      {/* Background Image */}
      <div
        className="bg-cover bg-center py-20"
        style={{ backgroundImage: "url('/furniture-bg.jpg')" }}
      >
        <h2 className="text-white text-3xl font-semibold text-center mb-10">
          Our clearance services
        </h2>
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-md shadow-md hover:shadow-xl transition"
            >
              <img
                src={service.image}
                width={400}
                height={200}
                alt={service.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold mb-2 text-center">{service.title}</h3>
              <p className="text-sm text-gray-700 mb-4">{service.desc}</p>
              <button className="bg-blue-600 text-white px-4 py-2 text-sm rounded hover:bg-blue-700 block mx-auto">
                See more
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* How It Works Section */}
      <section className="bg-white py-20 px-8">
            <h1 className="text-3xl font-bold mb-4 text-gray-800 px-4">How it works</h1>
        
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-10">
          
          <div className="flex-1">
            <Image
              src="/how-it-works.png"
              width={600}
              height={400}
              alt="How it works"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="flex-1 space-y-6">
            {howItWorks.map((step, i) => (
              <div
                key={i}
                className="flex items-start bg-gray-100 p-5 rounded-lg shadow-sm gap-4"
              >
                <div>{step.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="text-sm text-gray-700">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
