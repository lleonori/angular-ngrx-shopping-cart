import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { CartItem } from 'src/app/core/models/global.models';
import { CartPageActions } from 'src/app/store/app.actions';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  @Input() numberOfItems!: number | null;
  @Input() totalPrice!: number | null;
  @Input() cartItems!: CartItem[] | null;
  @Output()
  closeEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private store: Store) {}

  reduceItem(cartItem: CartItem) {
    this.store.dispatch(CartPageActions.reduceNumberOfItemInCart({ cartItem }));
  }

  removeItem(cartItem: CartItem) {
    this.store.dispatch(CartPageActions.removeItemFromCart({ cartItem }));
  }

  increaseItem(cartItem: CartItem) {
    this.store.dispatch(
      CartPageActions.increaseNumberOfItemInCart({ cartItem })
    );
  }

  closeCart() {
    this.store.dispatch(CartPageActions.closeCart());
  }
}
