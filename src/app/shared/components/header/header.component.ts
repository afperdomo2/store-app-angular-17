import { Component, inject, signal } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  private cartService = inject(CartService);

  cartProducts = this.cartService.cartProducts;
  cartTotalAmount = this.cartService.cartTotal;

  isCartSidebarOpen = signal(false);

  constructor() {}

  toggleCartSidebar() {
    this.isCartSidebarOpen.update((value) => !value);
  }

  closeCartSidebar() {
    this.isCartSidebarOpen.set(false);
  }

  removeFromCart(productId: number) {
    this.cartService.removeFromCart(productId);
  }
}
