import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';

import { Product } from '@core/models/product.model';
import { ProductComponent } from '@features/products/components/product/product.component';
import { HeaderComponent } from '@shared/components/header/header.component';
import { ProductService } from '@shared/services/api/escuelajs/product.service';
import { CartService } from '@shared/services/cart.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  private cartService = inject(CartService);
  private productService = inject(ProductService);

  productList = signal<Product[]>([]);

  constructor() {}

  // Se ejecuta al inicializar el componente, una sola vez
  ngOnInit() {
    this.productService.getProducts().subscribe((products) => {
      this.productList.set(products);
    });
  }

  onAddToCart(product: Product) {
    console.log('✅ Received from child component:', product);
    this.cartService.addToCart(product);
  }
}
