import { CartItem } from 'src/app/core/models/global.models';
import { CartPageActions } from 'src/app/store/app.actions';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-cart',
  styleUrls: ['./cart.component.scss'],
  templateUrl: './cart.component.html',
})
export class CartComponent {
  @Input() cartItems!: CartItem[] | null;
  @Output()
  closeEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() numberOfItems!: null | number;
  @Input() totalPrice!: null | number;

  constructor(private store: Store) {}

  closeCart() {
    this.store.dispatch(CartPageActions.closeCart());
  }

  increaseItem(cartItem: CartItem) {
    this.store.dispatch(
      CartPageActions.increaseNumberOfItemInCart({ cartItem })
    );
  }

  reduceItem(cartItem: CartItem) {
    this.store.dispatch(CartPageActions.reduceNumberOfItemInCart({ cartItem }));
  }

  removeItem(cartItem: CartItem) {
    this.store.dispatch(CartPageActions.removeItemFromCart({ cartItem }));
  }
}
