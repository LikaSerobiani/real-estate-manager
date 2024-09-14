import { create } from "zustand";
import { addAgent, updateAgent, deleteAgent } from "../services/agentService";

const useAgentStore = create((set) => ({
  agents: [],

  addAgent: async (newAgent) => {
    try {
      const addedAgent = await addAgent(newAgent);
      set((state) => ({
        agents: [...state.agents, addedAgent],
      }));
    } catch (error) {
      console.error(error.message);
    }
  },

  updateAgent: async (updatedAgent) => {
    try {
      const updated = await updateAgent(updatedAgent);
      set((state) => ({
        agents: state.agents.map((agent) =>
          agent.id === updated.id ? updated : agent
        ),
      }));
    } catch (error) {
      console.error(error.message);
    }
  },

  deleteAgent: async (id) => {
    try {
      await deleteAgent(id);
      set((state) => ({
        agents: state.agents.filter((agent) => agent.id !== id),
      }));
    } catch (error) {
      console.error(error.message);
    }
  },
}));

export default useAgentStore;
