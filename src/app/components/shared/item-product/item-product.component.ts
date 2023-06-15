import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from 'src/app/core/models/global.models';

@Component({
  selector: 'app-item-product',
  styleUrls: ['./item-product.component.scss'],
  templateUrl: './item-product.component.html',
})
export class ItemProductComponent {
  @Output() addToCartEventEmitter = new EventEmitter<Item>();
  @Input() item: Item | undefined;

  addToCart(item: Item): void {
    this.addToCartEventEmitter.emit(item);
  }
}
