import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../core/models/app.models';
import { CartItem } from '../core/models/global.models';

const getState = createFeatureSelector<AppState>('AppState');

export const selectItems = createSelector(
  getState,
  (state: AppState) => state.items
);

export const selectNumberOfItems = createSelector(
  getState,
  (state: AppState) => state.numberOfItems
);

export const selectCartTotalPrice = createSelector(
  getState,
  (state: AppState) => {
    return state.cartItems.reduce((accumulator: number, cartItem: CartItem) => {
      return accumulator + cartItem.numberOfItems * cartItem.item.price;
    }, 0);
  }
);

export const selectCartItems = createSelector(
  getState,
  (state: AppState) => {
    return state.cartItems;
  }
);
