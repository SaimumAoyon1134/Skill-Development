// import React from "react";
// import skills from "../skills";
// import "animate.css";

// const PopularSkills = () => {
//     const ItemClick = (skill) => {
//         console.log(skill)
//     }
//     return (
//       <div>
//         <div>
//           <h1 className="animate__animated animate__bounce text-3xl font-bold p-4">
//             Popular Courses
//           </h1>
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
//           {skills.map((skill) => (
//             <div
//               key={skill.skillId}
//               className="bg-base-100 shadow-lg rounded-xl overflow-hidden animate__animated animate__fadeInUp transform transition duration-300 hover:scale-105 hover:animate__animated hover:animate__pulse"
//             >
//               <img
//                 src={skill.image}
//                 alt={skill.skillName}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-4 flex flex-col gap-2">
//                 <h2 className="text-lg font-semibold">{skill.skillName}</h2>
//                 <p className="text-yellow-500 font-medium">
//                   ⭐ {skill.rating.toFixed(1)}
//                 </p>
//                 <p className="font-medium">Price: ${skill.price}</p>
//                       <button className="btn btn-neutral mt-2 w-full text-white hover:bg-white  hover:text-black hover:border-2 hover:border-black transition duration-300"
//                           onClick={()=>ItemClick(skill)}>
//                   View Details
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
// };

// export default PopularSkills;
import React from "react";
import skills from "../skills";
import "animate.css";

// Fake top rated providers data
const topProviders = [
  {
    id: 1,
    name: "Alex Martin",
    email: "alex@skillswap.com",
    rating: 4.9,
    image:
      "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    name: "Sara Hossain",
    email: "sara@skillswap.com",
    rating: 4.8,
    image:
      "https://i.pravatar.cc/150?img=2",
  },
  {
    id: 3,
    name: "John Carter",
    email: "john@skillswap.com",
    rating: 4.7,
    image:
      "https://i.pravatar.cc/150?img=3",
  },
];

const PopularSkills = () => {
  return (
    <div className="p-6 space-y-16">

      {/* Popular Skills Section */}
      <section>
        <h1 className="text-3xl font-bold mb-6">Popular Skills</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.skillId}
              className="bg-base-100 shadow-lg rounded-xl overflow-hidden transform transition duration-300 hover:scale-105 hover:animate__animated hover:animate__pulse"
            >
              <img
                src={skill.image}
                alt={skill.skillName}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col gap-2">
                <h2 className="text-lg font-semibold">{skill.skillName}</h2>
                <p className="text-yellow-500 font-medium">
                  ⭐ {skill.rating.toFixed(1)}
                </p>
                <p className="font-medium">Price: ${skill.price}</p>
                <button className="btn btn-neutral mt-2 w-full hover:bg-blue-500 transition duration-300">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Top Rated Providers Section */}
      <section>
        <h1 className="text-3xl font-bold mb-6">Top Rated Providers</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {topProviders.map((provider) => (
            <div
              key={provider.id}
              className="bg-base-100 shadow-lg rounded-xl p-4 flex flex-col items-center transition transform hover:scale-105 hover:animate__animated hover:animate__pulse"
            >
              <img
                src={provider.image}
                alt={provider.name}
                className="w-24 h-24 rounded-full mb-2 object-cover"
              />
              <h2 className="font-semibold text-lg">{provider.name}</h2>
              <p className="text-gray-500">{provider.email}</p>
              <p className="text-yellow-500 font-medium mt-1">
                ⭐ {provider.rating.toFixed(1)}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section>
        <h1 className="text-3xl font-bold mb-6">How It Works</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-base-100 shadow-lg rounded-xl p-6 text-center hover:animate__animated hover:animate__fadeInUp">
            <h2 className="font-semibold text-xl mb-2">1. Browse Skills</h2>
            <p>Explore a wide variety of skills and choose the one you want to learn.</p>
          </div>
          <div className="bg-base-100 shadow-lg rounded-xl p-6 text-center hover:animate__animated hover:animate__fadeInUp">
            <h2 className="font-semibold text-xl mb-2">2. Book a Session</h2>
            <p>Reserve your spot with the provider and schedule your learning session.</p>
          </div>
          <div className="bg-base-100 shadow-lg rounded-xl p-6 text-center hover:animate__animated hover:animate__fadeInUp">
            <h2 className="font-semibold text-xl mb-2">3. Learn & Improve</h2>
            <p>Attend your session and gain new skills from top-rated providers.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PopularSkills;