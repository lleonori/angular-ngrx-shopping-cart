import { CartItem } from 'src/app/core/models/global.models';
import { CartPageActions } from 'src/app/store/app.actions';
import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-sidebar',
  styleUrls: ['./sidebar.component.scss'],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  @Input() cartItems!: CartItem[] | null;
  @Input() numberOfItems!: null | number;
  @Input() totalPrice!: null | number;

  constructor(private store: Store) {}

  openCart() {
    this.store.dispatch(CartPageActions.openCart());
  }
}
