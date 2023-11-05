import { create } from "zustand";
import { BagStore } from "../interfaces/bag";

const getInitialItems = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedItems = localStorage.getItem("@bag-items/draco-shop");
    return storedItems ? JSON.parse(storedItems) : [];
  }

  return [];
};

export const useBagStore = create<BagStore>((set, get) => {
  return {
    open: false,
    bagItems: getInitialItems(),
    updateVisibility: () => set((state) => ({ open: !state.open })),
    addToBag: (product) =>
      set((state) => {
        const updatedBagItems = [...state.bagItems, product];
        localStorage.setItem(
          "@bag-items/draco-shop",
          JSON.stringify(updatedBagItems)
        );
        return {
          ...state,
          bagItems: updatedBagItems,
        };
      }),
    removeFromBag: (id) =>
      set((state) => {
        const updatedBagItems = state.bagItems.filter((item) => item.id !== id);
        localStorage.setItem(
          "@bag-items/draco-shop",
          JSON.stringify(updatedBagItems)
        );
        return {
          ...state,
          bagItems: updatedBagItems,
        };
      }),
  };
});
