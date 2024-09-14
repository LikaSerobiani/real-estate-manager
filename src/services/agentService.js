import axios from "./axios";

export const addAgent = async (agent) => {
  try {
    const response = await axios.post("/agents", agent);
    return response.data;
  } catch (error) {
    throw new Error("Error adding agent");
  }
};

export const updateAgent = async (agent) => {
  try {
    const response = await axios.put(`/agents/${agent.id}`, agent);
    return response.data;
  } catch (error) {
    throw new Error("Error updating agent");
  }
};

export const deleteAgent = async (id) => {
  try {
    await axios.delete(`/agents/${id}`);
  } catch (error) {
    throw new Error("Error deleting agent");
  }
};
