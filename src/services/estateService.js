import axios from "./axios";

export const fetchEstates = async () => {
  try {
    const response = await axios.get("/real-estates");
    return response.data;
  } catch (error) {
    throw new Error("Error fetching estates");
  }
};

export const fetchCurrentEstate = async (id) => {
  try {
    const response = await axios.get(`/real-estates/${id}`);
    return response.data;
  } catch (error) {
    throw new Error("Error fetching estate");
  }
};

export const addEstate = async (estate) => {
  try {
    const response = await axios.post("/real-estates", estate);
    return response.data;
  } catch (error) {
    throw new Error("Error adding estate");
  }
};

export const deleteEstate = async (id) => {
  try {
    await axios.delete(`/real-estates/${id}`);
  } catch (error) {
    throw new Error("Error deleting estate");
  }
};
