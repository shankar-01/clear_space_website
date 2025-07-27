// app/coverage/page.tsx
import React from "react";

const officeLocations = [
  {
    name: "Brixton Office",
    address: "Brixton Rd, Brixton, London, UK",
  },
  {
    name: "Addlestone Office",
    address: "Addlestone Rd, Surrey, UK",
  },
  {
    name: "London Office",
    address: "London Rd, London, UK",
  },
  {
    name: "Surrey Fulham",

    address: "Fulham Rd, Surrey, UK",
},
{
    name:"Kingswood Office",

    address:"Kingswood Rd, Surrey, UK",
},
{
    name:"Worcester Office",

    address:"Worcester Rd, Surrey, UK",
}

];

export default function CoveragePage() {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-10">
      <h1 className="text-4xl font-bold text-gray-800">Our Coverage</h1>

      {/* Google Map Embed */}
      <div className="w-full h-[450px] rounded-xl overflow-hidden shadow-lg">
        <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1NbHg4XiNOEPC0tXbnBvQRsBp-KRbQsY&ehbc=2E312F&noprof=1" width="100%" height="100%" allowFullScreen loading="lazy"></iframe>
      </div>

      {/* Location List */}
      <div className="grid md:grid-cols-3 gap-6">
        {officeLocations.map((office, index) => (
          <div key={index} className="bg-white border rounded-lg shadow p-4">
            <h3 className="text-lg font-semibold text-gray-700">{office.name}</h3>
            <p className="text-gray-600">{office.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
