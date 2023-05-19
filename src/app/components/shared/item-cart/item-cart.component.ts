import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CartItem, Item } from 'src/app/core/models/global.models';
import { CartPageActions } from 'src/app/store/app.actions';
import {
  selectCartItems,
  selectCartTotalPrice,
} from 'src/app/store/app.selectors';

@Component({
  selector: 'app-item-cart',
  templateUrl: './item-cart.component.html',
  styleUrls: ['./item-cart.component.scss'],
})
export class ItemCartComponent {
  @Input() cartItem: CartItem | undefined;
  @Output() increaseItemInCartEvent = new EventEmitter<CartItem>();
  @Output() reduceItemInCartEvent = new EventEmitter<CartItem>();
  @Output() removeItemInCartEvent = new EventEmitter<CartItem>();

  totalPrice$: Observable<number> = this.store.select(selectCartTotalPrice);
  cartItems$: Observable<CartItem[]> = this.store.select(selectCartItems);

  constructor(private store: Store) {}

  reduceItemInCart() {
    this.reduceItemInCartEvent.emit(this.cartItem);
  }

  removeItemFromCart() {
    this.removeItemInCartEvent.emit(this.cartItem);
  }

  increaseItemInCart() {
    this.increaseItemInCartEvent.emit(this.cartItem);
  }
}
