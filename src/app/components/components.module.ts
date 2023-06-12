import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './features/home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ProductlistComponent } from './features/productlist/productlist.component';
import { ItemProductComponent } from './shared/item-product/item-product.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { ItemCartComponent } from './shared/item-cart/item-cart.component';
import { CartComponent } from './shared/cart/cart.component';

const components = [
  HomeComponent,
  NavbarComponent,
  FooterComponent,
  ProductlistComponent,
  ItemProductComponent,
  SidebarComponent,
  ItemCartComponent,
  CartComponent
];

@NgModule({
  declarations: components,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  entryComponents: [],
  exports: components,
  providers: []
})
export class ComponentsModule {}
