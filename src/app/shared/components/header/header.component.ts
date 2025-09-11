import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CartService } from '@shared/services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  private cartService = inject(CartService);

  readonly menuLinks = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'About', path: '/about' },
  ];

  cartProducts = this.cartService.cartProducts;
  cartTotalAmount = this.cartService.cartTotal;

  isCartSidebarOpen = signal(false);
  isMobileMenuOpen = signal(false);

  constructor() {}

  toggleCartSidebar() {
    this.isCartSidebarOpen.update((value) => !value);
  }

  closeCartSidebar() {
    this.isCartSidebarOpen.set(false);
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen.update((value) => !value);
  }

  closeMobileMenu() {
    this.isMobileMenuOpen.set(false);
  }

  removeFromCart(productId: number) {
    this.cartService.removeFromCart(productId);
  }
}
