import { create } from "zustand";
import { addAgent, fetchAgents } from "../services/agentService";

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

  fetchAgents: async () => {
    try {
      const agentsFromApi = await fetchAgents();
      set({ agents: agentsFromApi });
    } catch (error) {
      console.error(error.message);
    }
  },
}));

export default useAgentStore;
