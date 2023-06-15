import { CartItem } from 'src/app/core/models/global.models';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import {
  selectCartItems,
  selectCartTotalPrice,
  selectNumberOfItems,
} from 'src/app/store/app.selectors';

@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  cartItems$: Observable<CartItem[]> = this.store.select(selectCartItems);
  numberOfItems$: Observable<number> = this.store.select(selectNumberOfItems);
  totalPrice$: Observable<number> = this.store.select(selectCartTotalPrice);

  constructor(private store: Store) {}
}
