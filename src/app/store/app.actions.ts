import {
  createAction,
  createActionGroup,
  emptyProps,
  props,
} from '@ngrx/store';

import { CartItem, Item } from '../core/models/global.models';

export const getItems = createAction('[Get Items API] Get Items');

export const itemsLoadedSuccess = createAction(
  '[Success Items API] Items loaded',
  props<{ data: Item[] }>()
);

export const CartPageActions = createActionGroup({
  events: {
    'Add item to cart': props<{ item: Item }>(),
    'Close Cart': emptyProps(),
    'Increase number of item in cart': props<{ cartItem: CartItem }>(),
    // il nome delle action viene vistocon notazione camel case quando viene eseguito il dispatch
    'Open Cart': emptyProps(),
    'Reduce number of item in cart': props<{ cartItem: CartItem }>(),
    'Remove item from cart': props<{ cartItem: CartItem }>(),
  },
  source: '[Cart API] Cart',
});
