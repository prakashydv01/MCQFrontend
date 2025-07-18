import React from "react";

const WhyLearnWithUs = () => {
  const features = [
    {
      title: "Entrance Preparation",
      description: "1000+ TU Entrance MCQ questions to help you prepare",
    },
    {
      title: "Expert Instructors",
      description: "Get help from experts for any question",
      action: "Ask now",
    },
    {
      title: "Solutions",
      description: "Detailed solutions for all questions",
    },
  ];

  return (
    <div className="py-16 px-4 bg-gray-900 min-h-screen">
      <div className="text-center mb-16 px-4">
        <h2 className="text-4xl font-bold mb-4 text-white">
          Why Learn With Hamro Exam
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Complete set of reference material to prepare Entrance exam.
        </p>
      </div>

      <div className="flex justify-center gap-6 flex-wrap px-4">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="min-w-[280px] max-w-[320px] p-6 rounded-xl flex flex-col items-center text-center border border-gray-700 bg-gray-800 hover:shadow-lg hover:border-blue-500 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-2 text-white">
              {feature.title}
            </h3>
            <p className="text-gray-400 mb-4">{feature.description}</p>
            {feature.action && (
              <button className="mt-auto border border-blue-500 text-blue-500 px-4 py-2 rounded-md text-sm hover:bg-blue-500 hover:bg-opacity-10 transition-colors">
                {feature.action}
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyLearnWithUs;
