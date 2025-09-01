import { Component, signal } from '@angular/core';

import { Product } from '../../../../core/models/product.model';
import { INIT_PRODUCTS } from '../../../../data/init.data';
import { ProductComponent } from '../../components/product/product.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  productList = signal<Product[]>([]);

  constructor() {
    this.productList.set(INIT_PRODUCTS);
  }

  onAddToCart(message: string) {
    console.log('✅ Received from child component:', message);
  }
}
