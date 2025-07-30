'use client';

import React, { useEffect, useState } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup
} from 'react-leaflet';
import L from 'leaflet';
import { motion } from 'framer-motion';
import 'leaflet/dist/leaflet.css';

// Fix Leaflet marker icon issue
const defaultIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

L.Marker.prototype.options.icon = defaultIcon;

const officeLocations = [
  { name: "Guildford Office", address: "Guildford, Surrey, UK", lat: 51.2362, lng: -0.5728 },
  { name: "Windsor Office", address: "Windsor, Berkshire, UK", lat: 51.4820, lng: -0.6043 },
  { name: "Croydon Office", address: "Croydon, London, UK", lat: 51.3721, lng: -0.0982 },
  { name: "Staines Office", address: "Staines-upon-Thames, Surrey, UK", lat: 51.4333, lng: -0.5051 },
  { name: "Clapham Junction Office", address: "Clapham Junction, London, UK", lat: 51.4645, lng: -0.1705 },
  { name: "Tooting Broadway Office", address: "Tooting Broadway, London, UK", lat: 51.4280, lng: -0.1576 },
  { name: "Wimbledon Office", address: "Wimbledon, London, UK", lat: 51.4215, lng: -0.2100 },
  { name: "Cobham Office", address: "Cobham, Surrey, UK", lat: 51.3120, lng: -0.3950 },
  { name: "Oxshott Office", address: "Oxshott, Surrey, UK", lat: 51.3270, lng: -0.3500 },
  { name: "Ashtead Office", address: "Ashtead, Surrey, UK", lat: 51.3079, lng: -0.2900 },
  { name: "Epsom Office", address: "Epsom, Surrey, UK", lat: 51.3347, lng: -0.2705 },
  { name: "Weybridge Office", address: "Weybridge, Surrey, UK", lat: 51.3750, lng: -0.4440 },
  { name: "Esher Office", address: "Esher, Surrey, UK", lat: 51.3710, lng: -0.3200 },
  { name: "Walton‑on‑Thames Office", address: "Walton‑on‑Thames, Surrey, UK", lat: 51.3857, lng: -0.4198 },
];

export default function CoverageMap() {
  const [, setWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWidth(window.innerWidth);
    }
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-12 z-10">
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center text-gray-800"
      >
        Our Office Coverage
      </motion.h1>

      {/* Map Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full h-[450px] rounded-xl overflow-hidden shadow-2xl border"
      >
        <MapContainer
          center={[51.4, -0.2]}
          zoom={10}
          scrollWheelZoom={false}
          className="w-full h-full"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {officeLocations.map((office, i) => (
            <Marker key={i} position={[office.lat, office.lng]}>
              <Popup>
                <strong>{office.name}</strong>
                <br />
                {office.address}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </motion.div>

      {/* Office Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {officeLocations.map((office, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-xl border shadow-md p-6 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {office.name}
            </h3>
            <p className="text-gray-600">{office.address}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
