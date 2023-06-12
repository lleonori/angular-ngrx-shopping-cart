import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Item } from 'src/app/core/models/global.models';
import { CartPageActions, getItems } from 'src/app/store/app.actions';
import { selectItems } from 'src/app/store/app.selectors';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {
  items$: Observable<Item[]> = this.store.select(selectItems);
  @Output() itemAddedEvent = new EventEmitter<Item>();

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(getItems());
  }

  addItemToCart(item: Item) {
    this.store.dispatch(CartPageActions.addItemToCart({ item }));
    this.itemAddedEvent.emit(item);
  }
}
