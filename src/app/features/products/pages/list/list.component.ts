import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { Category } from '@core/models/category.model';

import { Product } from '@core/models/product.model';
import { ProductComponent } from '@features/products/components/product/product.component';
import { CategoryService } from '@shared/services/api/escuelajs/category.service';
import { ProductService } from '@shared/services/api/escuelajs/product.service';
import { CartService } from '@shared/services/cart.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  private cartService = inject(CartService);
  private productService = inject(ProductService);
  private categoryService = inject(CategoryService);

  productList = signal<Product[]>([]);
  categoryList = signal<Category[]>([]);

  constructor() {}

  // Se ejecuta al inicializar el componente, una sola vez
  ngOnInit() {
    this.loadProducts();
    this.loadCategories();
  }

  onAddToCart(product: Product) {
    console.log('✅ Received from child component:', product);
    this.cartService.addToCart(product);
  }

  private loadProducts() {
    this.productService.getProducts().subscribe((products) => {
      this.productList.set(products);
    });
  }

  private loadCategories() {
    this.categoryService.getCategories().subscribe((categories) => {
      this.categoryList.set(categories);
    });
  }
}
