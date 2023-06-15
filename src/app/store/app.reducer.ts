import { createReducer, on } from '@ngrx/store';

import { AppState } from '../core/models/app.models';
import { CartItem } from '../core/models/global.models';
import { CartPageActions, itemsLoadedSuccess } from './app.actions';
import { INITIAL_APP_STATE } from '../constants/constants';

export const AppReducer = createReducer<AppState>(
  // presa dello stato applicativo iniziale
  INITIAL_APP_STATE,

  // set di azioni che richiedono la modifica dello stato applicativo
  on(CartPageActions.openCart, (state) => ({
    // spread operator ci permette di costruire il nuovo state, prendendo le vecchie chiavi e amplindolo con le nuove
    // es.
    // const colleghiDev = ['Michele', 'Roberto', 'Fabrizio'];
    // const colleghiDevOps = ['Valerio', 'Leandro', 'Vincenzo'];
    // const gruppoPartec = [...colleghiDev, ...colleghiDevOps] => ottengo un nuovo array contente ['Michele', 'Roberto', 'Fabrizio', 'Valerio', 'Leandro', 'Vincenzo']
    ...state,
    isCartOpen: true,
  })),

  on(CartPageActions.closeCart, (state) => ({
    ...state,
    isCartOpen: false,
  })),

  on(itemsLoadedSuccess, (store, props) => {
    return {
      ...store,
      items: props.data,
    };
  }),

  on(CartPageActions.addItemToCart, (store: AppState, props) => {
    const existingItem = store.cartItems.find(({ id }) => id === props.item.id);
    return {
      ...store,
      cartItems: store.cartItems
        .map((cartItem) =>
          // articolo non è presente nel carrello
          cartItem.item.id !== props.item.id
            ? // ritorna cartItem
              cartItem
            : // altrimenti se siamo in presenza di uno stesso articolo cartItem + numberOfItems maggiorato di 1
              { ...cartItem, numberOfItems: cartItem.numberOfItems + 1 }
        )
        .concat(
          existingItem
            ? // se è già nel carello non concateno nulla
              []
            : // se non esiste creo il nuovo oggetto da inserire nel carrello partendo da una qta pari a 1
              [{ id: props.item.id, item: props.item, numberOfItems: 1 }]
        ),
      // infine aumento il contatore degli articoli globali
      numberOfItems: store.numberOfItems + 1,
    };
  }),

  on(CartPageActions.reduceNumberOfItemInCart, (store: AppState, props) => {
    return {
      ...store,
      cartItems: store.cartItems
        .map((cartItem) =>
          cartItem.id !== props.cartItem.id
            ? cartItem
            : { ...cartItem, numberOfItems: cartItem.numberOfItems - 1 }
        )
        .filter(({ numberOfItems }) => numberOfItems > 0),
      numberOfItems: store.numberOfItems - 1,
    };
  }),

  on(CartPageActions.increaseNumberOfItemInCart, (store: AppState, props) => {
    return {
      ...store,
      cartItems: store.cartItems
        .map((cartItem) =>
          cartItem.id !== props.cartItem.id
            ? cartItem
            : { ...cartItem, numberOfItems: cartItem.numberOfItems + 1 }
        )
        // filtra cartItem e mostra solo le qta positive
        .filter(({ numberOfItems }) => numberOfItems > 0),
      numberOfItems: store.numberOfItems + 1,
    };
  }),

  on(CartPageActions.removeItemFromCart, (store: AppState, props) => {
    const cartItems = [
      ...store.cartItems.filter((item) => item.id !== props.cartItem.id),
    ];
    return {
      ...store,
      cartItems,
      numberOfItems: getNumberOfItems(cartItems),
    };
  })
);

const getNumberOfItems = (cartItems: CartItem[]): number => {
  // reduce l'array di cartItems in un altro array dove sommiamo il numero di item presenti.
  // Per fare ciò dobbiamo impostare il valore iniziale per il nostro accumulatore su un array vuoto
  // avendo rimosso filtrato l'array cartItems in precedenza ci troveremo a sommare tutti gli articoli meno quello filtrato
  return cartItems.reduce(
    (total, cartItem) => total + cartItem.numberOfItems,
    0
  );
};
