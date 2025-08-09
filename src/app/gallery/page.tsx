"use client";

import { motion } from "framer-motion";

const images = [
  "https://hospiscare.co.uk/wp-content/uploads/2020/06/House-Clearance-Hero-Image.jpg", // junk removal truck
  "https://www.hanlonbros.com/cdn/shop/articles/house-clearance-hanlon-bros_x400.jpg?v=1709812830", // recycling
  "https://houseandofficeclearance.co.uk/wp-content/uploads/2020/07/removals-london.jpg", // waste bins
  "https://media.istockphoto.com/id/1316432905/photo/cleaning-home.jpg?s=612x612&w=0&k=20&c=7qvIOziMXBAu5RL0yf4lgTbSYXh7vNoOoASLd6QotEs=", // clearing yard
  "https://wedump4u.co.uk/wp-content/uploads/2023/05/Decluttering-And-Organising_-1024x522.jpg", // workers in vest
  "https://www.rubbishclearanceherts.co.uk/images/slideshow/slide5.jpeg", // environmental protection
  "https://sammysclearances.co.uk/wp-content/uploads/2020/06/before-and-after-property-clearance-small.jpg", // rubbish truck side
  "https://www.birminghamhospice.org.uk/app/uploads/2024/09/House-clearance-2-online-1024x789.jpg", // waste bins again
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
