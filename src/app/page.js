"use client";

import { useState } from "react";
import NameForm from "./components/NameForm";
import Results from "./components/Results";
import { fetchData } from "./utils/api";

export default function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFormSubmit = async (name) => {
    setLoading(true);
    setData(null);
    setError(null);
    try {
      const fetchedData = await fetchData(name);
      setData(fetchedData);
    } catch (error) {
      setError("Failed to fetch data. Please try again.");
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center py-12"
      style={{ backgroundImage: "url('/images/background.jpg')" }}>
      <h1 className="text-3xl font-bold mb-8 animate-float">Who Are You</h1>
      <NameForm onSubmit={handleFormSubmit} />
      {loading && <p className="mt-4 text-blue-500">Loading...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}
      <Results data={data} />
    </main>
  );
}
