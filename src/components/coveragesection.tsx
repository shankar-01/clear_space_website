import { useState, useEffect, useRef } from "react";
import { MapPin} from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { motion, useTransform, useScroll } from "framer-motion";
import {officeLocations} from "@/constants/officeLocations";
import { areas } from "@/constants/area";


const defaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});


// Consistent card styling from services page
const CARD_COLOR = "bg-[#003366]";
const CARD_GLOW = "rgba(129, 140, 248, 0.3)";

export default function ModernCoverageSection() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [animatedCounts, setAnimatedCounts] = useState(areas.map(() => 0));
  const [isVisible, setIsVisible] = useState(false);
  const [, setHoveredArea] = useState(0);
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });


  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.2 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible && visibleCount < officeLocations.length) {
      const timer = setTimeout(() => setVisibleCount(c => c + 1), 200);
      return () => clearTimeout(timer);
    }
  }, [isVisible, visibleCount]);

  useEffect(() => {
    if (!isVisible) return;
    areas.forEach((area, idx) => {
      let currentCount = 0;
      const interval = setInterval(() => {
        currentCount++;
        setAnimatedCounts(prev => {
          const newCounts = [...prev];
          newCounts[idx] = Math.min(currentCount, area.count);
          return newCounts;
        });
        if (currentCount >= area.count) clearInterval(interval);
      }, 150);
    });
  }, [isVisible]);

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-hidden">
      {/* Animated Background - Same as services page */}
      

      <section ref={sectionRef} className="relative py-20 px-4">
        <div className="container mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div 
              style={{ y: textY }} 
              className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <div className="inline-flex items-center bg-[#003366]/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 text-sm text-[#003366]/70 mb-6">
                <MapPin className="w-4 h-4 text-cyan-400 mr-2" />
                Our Coverage Network
              </div>
              <h2 className="text-6xl md:text-8xl font-bold mb-4 text-[#003366]">
                Coverage Area
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto mb-8 rounded-full" />
              <p className="text-xl text-[#003366] max-w-3xl mx-auto leading-relaxed">
                Serving London, Surrey, and Berkshire with 
                <span className="font-semibold"> professional clearance services </span>
                across 14+ strategic locations.
              </p>
            </motion.div>
          </div>

          {/* Main Content Grid */}
          <div className="flex flew-wrap flex-col lg:flex-row gap-8 items-stretch">
            
            {/* Map Card */}
            <div className={`flex-1 h-full lg:w-3/4 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="relative group perspective-1000">
                {/* Glow Effect */}
                <div
                  className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700"
                  style={{
                    background: `radial-gradient(circle at center, ${CARD_GLOW}, transparent 70%)`,
                  }}
                />

                {/* Main Card */}
                <motion.div
                  className={`relative overflow-hidden rounded-3xl bg-gradient-to-br backdrop-blur-xl border border-white/20 shadow-2xl ${CARD_COLOR} p-8`}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center mb-6">
                    <motion.div
                      className="text-3xl mr-4 p-3 bg-white/20 rounded-2xl backdrop-blur-sm"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      🗺️
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">Live Coverage Map</h3>
                      <div className="h-0.5 bg-white/60 rounded-full w-full" />
                    </div>
                  </div>
                  
                  <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden border border-white/10 mb-6">
                    <MapContainer
                      center={[51.3762, -0.3418]}
                      zoom={10}
                      scrollWheelZoom={false}
                      className="w-full h-full"
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
                            <strong>{location.name}</strong><br />
                            {location.address}
                          </Popup>
                        </Marker>
                      ))}
                    </MapContainer>
                  </div>

                  <div className="text-center">
                    <div className="text-white/80 text-sm mb-2">Offices Deployed</div>
                    <div className="text-3xl font-bold text-white">{visibleCount} / {officeLocations.length}</div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Sidebar Cards */}
            <div className={`h-full lg:w-1/4 space-y-8 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              
              {/* Coverage Stats Card */}
              <div className="relative group perspective-1000">
                {/* Glow Effect */}
                <div
                  className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700"
                  style={{
                    background: `radial-gradient(circle at center, ${CARD_GLOW}, transparent 70%)`,
                  }}
                />

                {/* Main Card */}
                <motion.div
                  className={`relative overflow-hidden rounded-3xl bg-gradient-to-br backdrop-blur-xl border border-white/20 shadow-2xl ${CARD_COLOR} p-8`}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center mb-6">
                    <motion.div
                      className="text-3xl mr-4 p-3 bg-white/20 rounded-2xl backdrop-blur-sm"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      📊
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">Coverage Stats</h3>
                      <div className="h-0.5 bg-white/60 rounded-full w-full" />
                    </div>
                  </div>

                  <div className="space-y-4">
                    {areas.map((area, idx) => (
                      <div key={idx} onMouseEnter={() => setHoveredArea(idx)} onMouseLeave={() => setHoveredArea(0)}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-white/90">{area.area}</span>
                          <span className={`text-2xl font-black bg-gradient-to-r ${area.color} bg-clip-text text-transparent`}>
                            {animatedCounts[idx]}
                          </span>
                        </div>
                        <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                          <motion.div
                            className={`h-full bg-gradient-to-r ${area.color} rounded-full`}
                            initial={{ width: 0 }}
                            animate={{ width: `${(animatedCounts[idx] / Math.max(...areas.map(a => a.count))) * 100}%` }}
                            transition={{ duration: 1, ease: "easeOut" }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* CTA Card */}
              <div className="relative group perspective-1000">
                {/* Glow Effect */}
                <div
                  className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700"
                  style={{
                    background: `radial-gradient(circle at center, ${CARD_GLOW}, transparent 70%)`,
                  }}
                />

                {/* Main Card */}
                {/* <motion.div
                  className={`relative overflow-hidden rounded-3xl bg-gradient-to-br backdrop-blur-xl border border-white/20 shadow-2xl ${CARD_COLOR} p-8`}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center mb-4">
                    <motion.div
                      className="text-3xl mr-4 p-3 bg-white/20 rounded-2xl backdrop-blur-sm"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      📅
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">Free Assessment</h3>
                      <div className="h-0.5 bg-white/60 rounded-full w-full" />
                    </div>
                  </div>

                  <p className="text-white/90 mb-6 leading-relaxed">
                    Get your personalized clearance quote with our AI-powered assessment tool.
                  </p>

                  <motion.button
                    className="group/cta w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white px-6 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Request Quote Now
                    <ArrowRight className="w-5 h-5 group-hover/cta:translate-x-1 transition-transform duration-300" />
                  </motion.button>
                </motion.div> */}
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .leaflet-container {
            width: 100% !important;
            height: 100% !important;
          }
        `}</style>
      </section>
    </div>
  );
}