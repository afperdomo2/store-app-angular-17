import { Component, Input, signal } from '@angular/core';
import { Product } from '../../../core/models/product.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Input({ required: true }) cartItems: Product[] = [];

  isCartSidebarOpen = signal(false);

  toggleCartSidebar() {
    this.isCartSidebarOpen.update((value) => !value);
  }

  closeCartSidebar() {
    this.isCartSidebarOpen.set(false);
  }
}
