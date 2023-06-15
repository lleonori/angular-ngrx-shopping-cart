import { CartItem, Item } from './global.models';

// state
export interface AppState {
  cartItems: CartItem[];
  isCartOpen: boolean;
  items: Item[];
  numberOfItems: number;
}
