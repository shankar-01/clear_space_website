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
import { officeLocations } from '@/constants/officeLocations';
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
            className="bg-white rounded-xl border shadow-md p-4 transition-all duration-300"
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
