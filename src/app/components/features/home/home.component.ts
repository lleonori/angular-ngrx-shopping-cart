import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CartItem } from 'src/app/core/models/global.models';
import { selectCartItems, selectCartTotalPrice, selectNumberOfItems } from 'src/app/store/app.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  {
  numberOfItems$: Observable<number> = this.store.select(selectNumberOfItems);
  totalPrice$: Observable<number> = this.store.select(selectCartTotalPrice);
  cartItems$: Observable<CartItem[]> = this.store.select(selectCartItems);

  constructor(private store: Store) {}


}
