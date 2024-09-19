import axios from "./axios";

export const addAgent = async (agent) => {
  try {
    const response = await axios.post("/agents", agent, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Error adding agent");
  }
};

export const fetchAgents = async () => {
  try {
    const response = await axios.get("/agents");
    return response.data;
  } catch (error) {
    throw new Error("Error fetching agents");
  }
};
