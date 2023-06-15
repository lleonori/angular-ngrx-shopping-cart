import { CartPageActions, getItems } from 'src/app/store/app.actions';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Item } from 'src/app/core/models/global.models';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectItems } from 'src/app/store/app.selectors';

@Component({
  selector: 'app-productlist',
  styleUrls: ['./productlist.component.scss'],
  templateUrl: './productlist.component.html',
})
export class ProductlistComponent implements OnInit {
  @Output() itemAddedEvent = new EventEmitter<Item>();
  items$: Observable<Item[]> = this.store.select(selectItems);

  constructor(private store: Store) {}

  addItemToCart(item: Item) {
    this.store.dispatch(CartPageActions.addItemToCart({ item }));
    this.itemAddedEvent.emit(item);
  }

  ngOnInit() {
    this.store.dispatch(getItems());
  }
}
