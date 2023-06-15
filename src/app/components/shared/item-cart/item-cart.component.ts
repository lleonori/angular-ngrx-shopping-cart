import { CartItem } from 'src/app/core/models/global.models';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import {
  selectCartItems,
  selectCartTotalPrice,
} from 'src/app/store/app.selectors';

@Component({
  selector: 'app-item-cart',
  styleUrls: ['./item-cart.component.scss'],
  templateUrl: './item-cart.component.html',
})
export class ItemCartComponent {
  @Input() cartItem: CartItem | undefined;
  cartItems$: Observable<CartItem[]> = this.store.select(selectCartItems);
  @Output() increaseItemInCartEvent = new EventEmitter<CartItem>();
  @Output() reduceItemInCartEvent = new EventEmitter<CartItem>();

  @Output() removeItemInCartEvent = new EventEmitter<CartItem>();
  totalPrice$: Observable<number> = this.store.select(selectCartTotalPrice);

  constructor(private store: Store) {}

  increaseItemInCart() {
    this.increaseItemInCartEvent.emit(this.cartItem);
  }

  reduceItemInCart() {
    this.reduceItemInCartEvent.emit(this.cartItem);
  }

  removeItemFromCart() {
    this.removeItemInCartEvent.emit(this.cartItem);
  }
}
