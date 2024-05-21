"use client";

const Results = ({ data }) => {
  if (!data) return null;

  const { age, gender, country } = data;

  return (
    <div className="mt-8 p-4 border rounded-md shadow-md">
      <h2 className="text-xl font-semibold mb-4">Results for {age.name}</h2>
      <p className="mb-2">
        <span className="font-semibold">Age:</span> {age.age}
      </p>
      <p className="mb-2">
        <span className="font-semibold">Gender:</span> {gender.gender}
      </p>
      <p className="mb-2">
        <span className="font-semibold">Country:</span>{" "}
        {country.country.length > 0
          ? country.country.map((c) => c.country_id).join(", ")
          : "N/A"}
      </p>
    </div>
  );
};

export default Results;
