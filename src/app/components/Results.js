"use client";

import { useState, useEffect } from "react";
const Results = ({ data }) => {
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    if (data) {
      setShowResults(true);
    } else {
      setShowResults(false);
    }
  }, [data]);

  if (!data) return null;

  const { age, gender, country } = data;

  return (
    <div
      className={`mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3 transition-all duration-500 ${
        showResults ? "animate-fadeUp" : ""
      }`}>
      <div className="p-4 border rounded-md shadow-md bg-white animate-fadeIn animate-wiggle">
        <h2 className="text-xl font-semibold mb-2">Age</h2>
        <p className="text-gray-700">{age.age}</p>
      </div>
      <div className="p-4 border rounded-md shadow-md bg-white animate-fadeIn animate-wiggle">
        <h2 className="text-xl font-semibold mb-2">Gender</h2>
        <p className="text-gray-700">{gender.gender}</p>
      </div>
      <div className="p-4 border rounded-md shadow-md bg-white animate-fadeIn animate-wiggle hover:animate-rgbBorder">
        <h2 className="text-xl font-semibold mb-2">Country</h2>
        <p className="text-gray-700">
          {country.country.length > 0
            ? country.country.map((c) => c.country_id).join(", ")
            : "N/A"}
        </p>
      </div>
    </div>
  );
};

export default Results;
