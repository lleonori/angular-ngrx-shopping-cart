import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from 'src/app/core/models/global.models';

@Component({
  selector: 'app-item-product',
  templateUrl: './item-product.component.html',
  styleUrls: ['./item-product.component.scss'],
})
export class ItemProductComponent {
  @Input() item: Item | undefined;
  @Output() addToCartEventEmitter = new EventEmitter<Item>();

  addToCart(item: Item): void {
    this.addToCartEventEmitter.emit(item);
  }
}
