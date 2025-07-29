"use client";

import { motion } from "framer-motion";

const images = [
  "https://placehold.co/600x400",
  "https://placehold.co/500x400",
  "https://placehold.co/700x500",
  "https://placehold.co/600x400",
  "https://placehold.co/500x400",
  "https://placehold.co/700x500",
  // Add more images as needed
];

export default function GalleryPage() {
  return (
    <section className="min-h-screen bg-gray-100 px-4 py-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Gallery</h2>
        <p className="text-gray-600 mb-12">A glimpse of our recent work and events</p>

        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
          {images.map((src, index) => (
            <motion.div
              key={index}
              className="overflow-hidden rounded-lg shadow-md break-inside-avoid"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                width={600}
                height={400}
                className="w-full h-auto object-cover hover:brightness-110 transition"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
