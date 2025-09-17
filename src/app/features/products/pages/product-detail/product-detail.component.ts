import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit, signal } from '@angular/core';

import { Product } from '@core/models/product.model';
import { ProductService } from '@shared/services/api/escuelajs/product.service';
import { CartService } from '@shared/services/cart.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export default class ProductDetailComponent implements OnInit {
  private cartService = inject(CartService);
  private productService = inject(ProductService);

  @Input() productId?: string;

  product = signal<Product | null>(null);
  selectedImageIndex = signal(0);
  quantity = signal(1);
  maxQuantity = 10;
  isAddingToCart = signal(false);

  ngOnInit() {
    if (this.productId) {
      this.productService
        .getProductById(this.productId)
        .subscribe((product) => this.product.set(product));
    }
  }

  selectImage(index: number) {
    this.selectedImageIndex.set(index);
  }

  increaseQuantity() {
    if (this.quantity() < this.maxQuantity) {
      this.quantity.update((q) => q + 1);
    }
  }

  decreaseQuantity() {
    if (this.quantity() > 1) {
      this.quantity.update((q) => q - 1);
    }
  }

  addToCart() {
    this.isAddingToCart.set(true);

    // Agregar el producto al carrito la cantidad de veces especificada
    for (let i = 0; i < this.quantity(); i++) {
      this.cartService.addToCart(this.product()!);
    }
  }
}
