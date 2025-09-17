import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';

import { Category } from '@core/models/category.model';
import { Product } from '@core/models/product.model';
import { ProductComponent } from '@features/products/components/product/product.component';
import { CategoryButtonComponent } from '@shared/components/category-button/category-button.component';
import { CategoryService } from '@shared/services/api/escuelajs/category.service';
import {
  ProductFilterOptions,
  ProductService,
} from '@shared/services/api/escuelajs/product.service';
import { CartService } from '@shared/services/cart.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent, CategoryButtonComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export default class ListComponent implements OnInit {
  private cartService = inject(CartService);
  private productService = inject(ProductService);
  private categoryService = inject(CategoryService);
  private router = inject(Router);

  @Input() category?: string;

  // Signals para el estado
  productList = signal<Product[]>([]);
  categoryList = signal<Category[]>([]);

  ngOnInit() {
    this.loadProducts();
    this.loadCategories();
  }

  ngOnChanges() {
    if (this.category) {
      this.loadProducts({ categorySlug: this.category });
    }
  }

  onAddToCart(product: Product) {
    console.log('✅ Received from child component:', product);
    this.cartService.addToCart(product);
  }

  clearCategoryFilter() {
    this.router.navigate(['/']);
    this.loadProducts();
  }

  isCategorySelected(category: Category): boolean {
    return this.category === category.slug;
  }

  private loadProducts(filter?: ProductFilterOptions) {
    this.productService.getProducts(filter).subscribe((products) => {
      this.productList.set(products);
    });
  }

  private loadCategories() {
    this.categoryService.getCategories().subscribe((categories) => {
      this.categoryList.set(categories);
    });
  }
}
