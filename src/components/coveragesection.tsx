"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const areas = [
  { name: "London", count: 4 },
  { name: "Surrey", count: 9 },
  { name: "Berkshire", count: 1 },
];

const officeLocations = [
  { name: "Guildford Office", address: "Guildford, Surrey, UK", lat: 51.2362, lng: -0.5728 },
  { name: "Windsor Office", address: "Windsor, Berkshire, UK", lat: 51.482, lng: -0.6043 },
  { name: "Croydon Office", address: "Croydon, London, UK", lat: 51.3721, lng: -0.0982 },
  { name: "Staines Office", address: "Staines-upon-Thames, Surrey, UK", lat: 51.4333, lng: -0.5051 },
  { name: "Clapham Junction Office", address: "Clapham Junction, London, UK", lat: 51.4645, lng: -0.1705 },
  { name: "Tooting Broadway Office", address: "Tooting Broadway, London, UK", lat: 51.428, lng: -0.1576 },
  { name: "Wimbledon Office", address: "Wimbledon, London, UK", lat: 51.4215, lng: -0.21 },
  { name: "Cobham Office", address: "Cobham, Surrey, UK", lat: 51.312, lng: -0.395 },
  { name: "Oxshott Office", address: "Oxshott, Surrey, UK", lat: 51.327, lng: -0.35 },
  { name: "Ashtead Office", address: "Ashtead, Surrey, UK", lat: 51.3079, lng: -0.29 },
  { name: "Epsom Office", address: "Epsom, Surrey, UK", lat: 51.3347, lng: -0.2705 },
  { name: "Weybridge Office", address: "Weybridge, Surrey, UK", lat: 51.375, lng: -0.444 },
  { name: "Esher Office", address: "Esher, Surrey, UK", lat: 51.371, lng: -0.32 },
  { name: "Walton‑on‑Thames Office", address: "Walton‑on‑Thames, Surrey, UK", lat: 51.3857, lng: -0.4198 },
];

// Default Leaflet icon
const defaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

export default function CoverageSection() {
  const [visibleCount, setVisibleCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // State for animated counts of areas
  const [animatedCounts, setAnimatedCounts] = useState(areas.map(() => 0));

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isInView && visibleCount < officeLocations.length) {
      timer = setTimeout(() => setVisibleCount((c) => c + 1), 300);
    }
    return () => clearTimeout(timer);
  }, [isInView, visibleCount]);

  // Animate the counts incrementally when inView is true
  useEffect(() => {
    if (!isInView) return;

    // For each area, increment count from 0 to target
    areas.forEach((area, idx) => {
      const stepTime = 200; // ms delay between increments
      let currentCount = 0;
      const interval = setInterval(() => {
        currentCount++;
        setAnimatedCounts((prev) => {
          const newCounts = [...prev];
          newCounts[idx] = Math.min(currentCount, area.count);
          return newCounts;
        });
        if (currentCount >= area.count) {
          clearInterval(interval);
        }
      }, stepTime);
    });
  }, [isInView]);

  return (
    <section id="coverage" className="py-16 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-[#003366] mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Coverage Area
          </motion.h2>
          <div className="w-20 h-1 bg-[#66CCFF] mx-auto mb-6"></div>
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            We serve properties across Surrey, London, and surrounding counties with same-day service available in most areas
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {/* Left: Map Panel */}
          <div className="lg:w-2/3 bg-white rounded-xl shadow-sm p-4 border border-[#003366]/10 flex-1 flex">
            <div className="w-full h-full rounded-xl overflow-hidden">
              <MapContainer
                center={[51.3762, -0.3418]}
                zoom={10}
                scrollWheelZoom={false}
                className="w-full h-[300px] sm:h-[400px] lg:h-full"
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
                />
                {officeLocations.slice(0, visibleCount).map((location, index) => (
                  <Marker
                    key={index}
                    position={[location.lat, location.lng]}
                    icon={defaultIcon}
                  >
                    <Popup>
                      <strong>{location.name}</strong>
                      <br />
                      {location.address}
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>
          </div>

          {/* Right: Area List + CTA Card */}
          <div className="lg:w-1/3 flex flex-col gap-6">
            {/* Areas We Serve */}
            <motion.div
              className="bg-white rounded-xl shadow-sm p-6 border border-[#003366]/10 flex-1"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-bold text-[#003366] mb-4">Areas We Serve</h3>
              <div className="space-y-4">
                {areas.map((area, index) => (
                  <motion.div
                    key={index}
                    className="flex justify-between items-center border-b border-[#003366]/10 pb-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <span className="font-medium text-gray-700">{area.name}</span>
                    <span className="bg-[#66CCFF] text-[#003366] px-3 py-1 rounded-full text-sm font-medium">
                      {animatedCounts[index]}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Card */}
            <motion.div
              className="bg-gradient-to-r from-[#003366] to-[#006699] text-white rounded-xl p-6 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h3 className="text-xl font-bold mb-2">Free On-Site Assessment</h3>
              <p className="mb-4">
                Get a free, no-obligation quote for your clearance project. Our team will visit your property to provide an accurate estimate.
              </p>
              <motion.a
                href="#contact"
                className="bg-white text-[#003366] hover:bg-[#66CCFF] px-4 py-2 rounded-lg font-bold inline-block transition duration-300 shadow-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Request a Quote
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
