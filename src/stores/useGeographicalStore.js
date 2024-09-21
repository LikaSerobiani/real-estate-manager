import { create } from "zustand";
import { fetchCities, fetchRegions } from "../services/geographicalService";

const useGeographicalStore = create((set) => ({
  cities: [],
  regions: [],

  fetchCities: async () => {
    try {
      const data = await fetchCities();
      set({ cities: data });
    } catch (error) {
      console.error(error.message);
    }
  },

  fetchRegions: async () => {
    try {
      const data = await fetchRegions();
      set({ regions: data });
    } catch (error) {
      console.error(error.message);
    }
  },
}));

export default useGeographicalStore;
