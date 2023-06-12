import { CartItem, Item } from './global.models';

// state
export interface AppState {
  items: Item[];
  cartItems: CartItem[];
  numberOfItems: number;
  isCartOpen: boolean;
}
