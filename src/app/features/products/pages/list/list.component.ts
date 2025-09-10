import { Component, signal } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Product } from '../../../../core/models/product.model';
import { INIT_PRODUCTS } from '../../../../data/init.data';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { ProductComponent } from '../../components/product/product.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  productList = signal<Product[]>([]);
  cartItems = signal<Product[]>([]);

  constructor() {
    this.productList.set(INIT_PRODUCTS);
  }

  onAddToCart(product: Product) {
    console.log('✅ Received from child component:', product);
    this.cartItems.update((items) => [...items, product]);
  }
}
