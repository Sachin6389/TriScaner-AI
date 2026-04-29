import React from 'react';

function About() {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-6 md:px-10 lg:px-20">
      
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-6 md:p-10">
        
        <h1 className="text-2xl md:text-4xl font-bold text-center text-gray-800 mb-6">
          About Us
        </h1>

        <p className="text-black text-sm md:text-base mb-4">
          This project is developed as a final year project at <span className="font-bold">Rajkiya Engineering College</span>.
          It reflects our practical implementation of concepts learned throughout our academic journey.
        </p>

        {/* Project Title */}
        <h2 className="text-lg md:text-2xl font-semibold text-green-600 mt-6 border-l-4 border-green-500 pl-3">
          Project Title
        </h2>
        <p className="text-black mt-2">
           TriScan Automated Medical Imaging Classification
        </p>

        {/* Description */}
        <h2 className="text-lg md:text-2xl font-semibold text-green-600 mt-6 border-l-4 border-green-500 pl-3">
          Project Description
        </h2>
        <p className="text-black mt-2">
          This project is designed to analyze medical scans using Artificial Intelligence.
          It helps in detecting potential health issues such as bone fractures, brain abnormalities,
          kidney problems, and chest diseases. The system aims to assist medical professionals
          by providing quick and accurate predictions.
        </p>

        {/* Objectives */}
        <h2 className="text-lg md:text-2xl font-semibold text-green-600 mt-6 border-l-4 border-green-500 pl-3">
          Objectives
        </h2>
        <ul className="list-disc pl-6 mt-2 text-black space-y-1">
          <li>To develop an AI-based system for medical scan analysis</li>
          <li>To improve early detection of diseases</li>
          <li>To provide a user-friendly interface for uploading and analyzing reports</li>
          <li>To reduce manual effort and increase diagnostic accuracy</li>
        </ul>
        
        {/* Team Members */}
        <h2 className="text-lg md:text-2xl font-semibold text-green-600 mt-6 border-l-4 border-green-500 pl-3">
          Team Members
        </h2>
        <ul className="list-disc pl-6 mt-2 text-black space-y-1">
          <li>Sachin Gond</li>
          <li>Anurag Yadav</li>
          <li>Anurag Chaudhary</li>
        </ul>

        {/* Guide */}
        <h2 className="text-lg md:text-2xl font-semibold text-green-600 mt-6 border-l-4 border-green-500 pl-3">
          Project Guide
        </h2>
        <p className="text-black mt-2"> Miss. Deepshikha</p>

        {/* Conclusion */}
        <h2 className="text-lg md:text-2xl font-semibold text-green-600 mt-6 border-l-4 border-green-500 pl-3">
          Conclusion
        </h2>
        <p className="text-black mt-2">
          Our team has worked collaboratively to design and develop this project.
          This project not only strengthened our technical knowledge but also enhanced
          our teamwork, problem-solving, and project management skills.
        </p>

      </div>
    </div>
  );
}

export default About;