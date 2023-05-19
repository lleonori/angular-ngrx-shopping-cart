export interface Item {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

export interface CartItem {
  id: string;
  numberOfItems: number;
  item: Item;
}
