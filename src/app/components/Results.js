"use client";

const Results = ({ data }) => {
  if (!data) return null;

  const { age, gender, country } = data;

  return (
    <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
      <div className="p-4 border rounded-md shadow-md bg-white">
        <h2 className="text-xl font-semibold mb-2">Age</h2>
        <p className="text-gray-700">{age.age}</p>
      </div>
      <div className="p-4 border rounded-md shadow-md bg-white">
        <h2 className="text-xl font-semibold mb-2">Gender</h2>
        <p className="text-gray-700">{gender.gender}</p>
      </div>
      <div className="p-4 border rounded-md shadow-md bg-white">
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
