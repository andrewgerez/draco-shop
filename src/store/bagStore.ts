import { create } from "zustand";
import { BagStore } from "../interfaces/bag";

export const useBagStore = create<BagStore>((set) => {
  return {
    open: false,
    bagItems: [],
    updateVisibility: () => set((state) => 
      ({ open: !state.open })),
    addToBag: (product) => set((state) => 
      ({ bagItems: [...state.bagItems, product] })),
    removeFromBag: (id) => set((state) => 
      ({ bagItems: state.bagItems.filter((item) => item.id !== id) })),
  }
})