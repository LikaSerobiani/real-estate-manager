import axios from "./axios";

export const fetchRegions = async () => {
  try {
    const response = await axios.get("/regions");
    return response.data;
  } catch (error) {
    throw new Error("Error fetching regions");
  }
};

export const fetchCities = async () => {
  try {
    const response = await axios.get("/cities");
    return response.data;
  } catch (error) {
    throw new Error("Error fetching cities");
  }
};
