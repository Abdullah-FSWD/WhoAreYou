// utils/api.js
import axios from "axios";

export const fetchData = async (name) => {
  try {
    const agePromise = axios.get(`https://api.agify.io?name=${name}`);
    const genderPromise = axios.get(`https://api.genderize.io?name=${name}`);
    const countryPromise = axios.get(`https://api.nationalize.io?name=${name}`);

    const [ageResponse, genderResponse, countryResponse] = await Promise.all([
      agePromise,
      genderPromise,
      countryPromise,
    ]);

    return {
      age: ageResponse.data,
      gender: genderResponse.data,
      country: countryResponse.data,
    };
  } catch (error) {
    console.error("API request failed:", error);
    throw new Error("Failed to fetch data from APIs");
  }
};
