export interface Item {
  description: string;
  id: string;
  imageUrl: string;
  name: string;
  price: number;
}

export interface CartItem {
  id: string;
  item: Item;
  numberOfItems: number;
}
