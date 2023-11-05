interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
  description: string;
  defaultPriceId: string;
}

export interface BagStore {
  open: boolean;
  bagItems: Product[];
  updateVisibility: () => void;
  addToBag: (product: Product) => void;
  removeFromBag: (id: string) => void;
}