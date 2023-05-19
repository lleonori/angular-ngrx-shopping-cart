import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { CartItem } from 'src/app/core/models/global.models';
import { CartPageActions } from 'src/app/store/app.actions';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @Input() numberOfItems!: number | null;
  @Input() totalPrice!: number | null;
  @Input() cartItems!: CartItem[] | null;

  constructor(private store: Store) {}

  openCart() {
    this.store.dispatch(CartPageActions.openCart());
  }
}
