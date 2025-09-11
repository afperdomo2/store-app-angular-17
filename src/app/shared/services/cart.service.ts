import { computed, Injectable, signal } from '@angular/core';

import { Product } from '../../core/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartProducts = signal<Product[]>([]);

  cartTotal = computed(() =>
    this.cartProducts().reduce((total, product) => total + product.price, 0)
  );

  constructor() {}

  addToCart(product: Product) {
    this.cartProducts.update((products) => [...products, product]);
  }

  removeFromCart(productId: number) {
    this.cartProducts.update((products) =>
      products.filter((product) => product.id !== productId)
    );
  }

  clearCart() {
    this.cartProducts.set([]);
  }
}
