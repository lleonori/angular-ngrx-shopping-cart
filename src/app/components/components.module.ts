import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { CartComponent } from './shared/cart/cart.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './features/home/home.component';
import { ItemCartComponent } from './shared/item-cart/item-cart.component';
import { ItemProductComponent } from './shared/item-product/item-product.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ProductlistComponent } from './features/productlist/productlist.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

const components = [
  HomeComponent,
  NavbarComponent,
  FooterComponent,
  ProductlistComponent,
  ItemProductComponent,
  SidebarComponent,
  ItemCartComponent,
  CartComponent,
];

@NgModule({
  declarations: components,
  entryComponents: [],
  exports: components,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  providers: [],
})
export class ComponentsModule {}
