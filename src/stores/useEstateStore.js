import { create } from "zustand";
import {
  fetchEstates,
  addEstate,
  updateEstate,
  deleteEstate,
} from "../services/estateService";

const useEstateStore = create((set) => ({
  estates: [],

  fetchEstates: async () => {
    try {
      const estatesFromAPI = await fetchEstates();
      set({ estates: estatesFromAPI });
    } catch (error) {
      console.error(error.message);
    }
  },

  addEstate: async (newEstate) => {
    try {
      const addedEstate = await addEstate(newEstate);
      set((state) => ({
        estates: [...state.estates, addedEstate],
      }));
    } catch (error) {
      console.error(error.message);
    }
  },

  updateEstate: async (updatedEstate) => {
    try {
      const updated = await updateEstate(updatedEstate);
      set((state) => ({
        estates: state.estates.map((estate) =>
          estate.id === updated.id ? updated : estate
        ),
      }));
    } catch (error) {
      console.error(error.message);
    }
  },

  deleteEstate: async (id) => {
    try {
      await deleteEstate(id);
      set((state) => ({
        estates: state.estates.filter((estate) => estate.id !== id),
      }));
    } catch (error) {
      console.error(error.message);
    }
  },
}));

export default useEstateStore;
