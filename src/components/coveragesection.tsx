import { useState, useEffect, useRef } from "react";
import { MapPin, ArrowRight, Calendar } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

const areas = [
  { name: "London", count: 4, color: "from-purple-500 to-pink-500" },
  { name: "Surrey", count: 9, color: "from-blue-500 to-cyan-500" },
  { name: "Berkshire", count: 1, color: "from-emerald-500 to-teal-500" },
];

const defaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

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
  { name: "Walton-on-Thames Office", address: "Walton-on-Thames, Surrey, UK", lat: 51.3857, lng: -0.4198 },
];

export default function ModernCoverageSection() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [animatedCounts, setAnimatedCounts] = useState(areas.map(() => 0));
  const [isVisible, setIsVisible] = useState(false);
  const [, setHoveredArea] = useState(0);
  const sectionRef = useRef(null);

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
    <section ref={sectionRef} className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 overflow-hidden">
      <div className="relative z-10 container mx-auto px-4 py-20">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-2 mb-6 border border-white/20">
              <MapPin className="w-4 h-4 text-cyan-400" />
              <span className="text-white/90 text-sm font-medium">Our Coverage Network</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
              <span className="text-4xl md:text-6xl">Our Coverage Area</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-8 rounded-full"></div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-5 gap-8 items-start">
          
          {/* Leaflet Map Area */}
          <div className={`lg:col-span-3 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700"></div>
              <div className="relative bg-white/10 backdrop-blur-2xl rounded-3xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Live Coverage Map</h3>
                
                <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden border border-white/10">
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

                <div className="mt-6 text-center">
                  <div className="text-white/60 text-sm mb-2">Offices Deployed</div>
                  <div className="text-3xl font-bold text-white">{visibleCount} / {officeLocations.length}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className={`lg:col-span-2 space-y-6 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative group">
              <div className="relative bg-white/10 backdrop-blur-2xl rounded-3xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Coverage Stats</h3>
                {areas.map((area, idx) => (
                  <div key={idx} onMouseEnter={() => setHoveredArea(idx)} onMouseLeave={() => setHoveredArea(0)}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white">{area.name}</span>
                      <span className={`text-3xl font-black bg-gradient-to-r ${area.color} bg-clip-text text-transparent`}>
                        {animatedCounts[idx]}
                      </span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${area.color} rounded-full`}
                        style={{ width: `${(animatedCounts[idx] / Math.max(...areas.map(a => a.count))) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="relative group">
              <div className="relative bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-2xl rounded-3xl p-8 border border-white/20">
                <Calendar className="w-8 h-8 text-cyan-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-3">Free Assessment</h3>
                <p className="text-white/70 mb-6">Get your personalized clearance quote with our AI-powered tool.</p>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-4 px-6 rounded-xl">
                  <div className="flex items-center justify-center gap-2">
                    <span>Request Quote Now</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </button>
              </div>
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
  );
}
