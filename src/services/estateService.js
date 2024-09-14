import axios from "./axios";

export const fetchEstates = async () => {
  try {
    const response = await axios.get("/estates");
    return response.data;
  } catch (error) {
    throw new Error("Error fetching estates");
  }
};

export const addEstate = async (estate) => {
  try {
    const response = await axios.post("/estates", estate);
    return response.data;
  } catch (error) {
    throw new Error("Error adding estate");
  }
};

export const updateEstate = async (estate) => {
  try {
    const response = await axios.put(`/estates/${estate.id}`, estate);
    return response.data;
  } catch (error) {
    throw new Error("Error updating estate");
  }
};

export const deleteEstate = async (id) => {
  try {
    await axios.delete(`/estates/${id}`);
  } catch (error) {
    throw new Error("Error deleting estate");
  }
};
