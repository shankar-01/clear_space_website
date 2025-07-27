"use client";


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
    name: "Emily Rose",
    rating: 4,
    content: `Pretty good overall, just had a slight delay but the team made up for it. Great communication.`,
  },
  {
    name: "Mark Johnson",
    rating: 4,
    content: `Great service from start to finish. Easy to contact, friendly staff and very efficient.`,
  },
];

const StarRating = ({ count }: { count: number }) => (
  <div className="flex space-x-1 text-orange-500 text-xl mt-1 mb-2">
    {[...Array(count)].map((_, idx) => (
      <span key={idx}>★</span>
    ))}
  </div>
);

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6 md:px-20">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-12">
        Customer Reviews
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummyReviews.map((review, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-xl transition-all duration-300 hover:scale-[1.02]"
          >
            <h2 className="text-blue-600 font-medium text-sm mb-2">
              {review.name}
            </h2>

            <div className="flex items-center space-x-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Google_Favicon_2025.svg/120px-Google_Favicon_2025.svg.png"
                alt="Google"
                width={20}
                height={20}
              />
              <StarRating count={review.rating} />
            </div>

            <div className="mt-2 text-gray-700 text-sm max-h-40 overflow-y-auto pr-2">
              {review.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
