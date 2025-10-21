import React from "react";
import { useParams } from "react-router-dom";
import skills from "../skills"; // assuming your skill data is in ../skills
import { toast } from "react-toastify";

const SkillDetails = () => {
  const { id } = useParams();
  const skill = skills.find((s) => s.skillId === parseInt(id));

  if (!skill) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-2xl font-semibold text-gray-600">
          Skill not found !!
        </h1>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">

      <div className="flex flex-col md:flex-row bg-white shadow-xl rounded-2xl overflow-hidden">

        <div className="md:w-1/2">
          <img
            src={skill.image}
            alt={skill.skillName}
            className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Right: Details */}
        <div className="md:w-1/2 p-8 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {skill.skillName}
          </h1>
          <p className="text-lg text-gray-600 mb-2">
            <span className="font-semibold">Category:</span> {skill.category}
          </p>
          <p className="text-lg text-gray-600 mb-2">
            <span className="font-semibold">Instructor:</span>{" "}
            {skill.providerName}
          </p>
          <p className="text-sm text-gray-500 mb-4">📧 {skill.providerEmail}</p>
          <p className="text-yellow-500 text-lg mb-4">
            ⭐ {skill.rating.toFixed(1)} / 5
          </p>
          <p className="text-2xl font-semibold text-blue-600 mb-4">
            ${skill.price}
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            {skill.description}
          </p>

          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">
              Slots Available:{" "}
              <span className="font-semibold text-gray-800">
                {skill.slotsAvailable}
              </span>
            </span>

                      <button className="px-6 py-2 bg-green-500 text-white rounded-xl shadow-md hover:bg-black transition-all duration-300"
                          onClick={() => {
                          toast.success("Thank you!! Successfully Enrolled..")
                      }}>
              Enroll Now
            </button>
          </div>
        </div>
      </div>

    
      
    </div>
  );
};

export default SkillDetails;
