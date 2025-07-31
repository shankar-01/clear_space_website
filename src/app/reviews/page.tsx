"use client";

import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const dummyReviews = [
  {
    name: "Maitrida James",
    rating: 5,
    content: `It was a pleasure dealing with Harry from the start. Lots of info on the website about how they work, insurance etc which was helpful. Very understanding of stress for clients. Clearance went smoothly on a very hot day with...`,
  },
  {
    name: "John Smith",
    rating: 5,
    content: `Excellent service. Everything went perfectly on moving day. The staff were polite, professional and really helpful!`,
  },
  {
    name: "Emily Rose",
    rating: 4,
    content: `Pretty good overall, just had a slight delay but the team made up for it. Great communication.`,
  },
  {
    name: "Mark Johnson",
    rating: 4,
    content: `Great service from start to finish. Easy to contact, friendly staff and very efficient.`,
  },
  {
    name: "Emily Davis",
    rating: 5,
    content: `I was very impressed with the professionalism and attention to detail shown by the staff. They went above and beyond to ensure that everything was done to my satisfaction.`,
  },
  {
    name: "Sophia Wilson",
    rating: 4,
    content: `I was very impressed with the professionalism and attention to detail shown by the staff. They went above and beyond to ensure that everything was done to my satisfaction.`,
  },
];

const StarRating = ({ count }: { count: number }) => (
  <div className="flex space-x-1 text-orange-400 text-xl mt-1">
    {[...Array(count)].map((_, idx) => (
      <FontAwesomeIcon key={idx} icon={faStar} />
    ))}
  </div>
);

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100 py-16 px-6 md:px-20">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-extrabold text-[#003366] tracking-wide">
          What Our Customers Say
        </h1>
        <p className="mt-4 text-[#274060] text-lg font-medium">
          Real feedback from our valued clients
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {dummyReviews.map((review, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="relative bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl p-6 shadow-lg cursor-pointer flex flex-col"
          >
            {/* Header: avatar + name + rating */}
            <div className="flex items-center gap-4 mb-4">
              <img
                src={`https://i.pravatar.cc/80?img=${index + 10}`}
                alt={`${review.name} avatar`}
                className="w-16 h-16 rounded-full border-2 border-white/60 object-cover shadow-md flex-shrink-0"
                loading="lazy"
              />
              <div>
                <h2 className="text-[#003366] text-lg font-semibold">{review.name}</h2>
                <StarRating count={review.rating} />
              </div>
            </div>

            {/* Review Content */}
            <p className="text-[#003366] text-sm max-h-40 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-white/40 scrollbar-track-transparent leading-relaxed">
              {review.content}
            </p>

            {/* Glass shine effect */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-0 left-0 w-full h-full rounded-2xl bg-gradient-to-tr from-white/10 via-white/5 to-white/0"
              style={{
                filter: "blur(10px)",
                mixBlendMode: "screen",
                zIndex: 0,
              }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
