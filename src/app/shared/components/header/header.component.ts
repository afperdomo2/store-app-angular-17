import {
  Component,
  Input,
  signal,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
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

  cartTotalAmount = signal(0);

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    const cartItemsChange: SimpleChange = changes['cartItems'];
    if (cartItemsChange) {
      this.cartTotalAmount.set(
        this.cartItems.reduce((total, item) => total + item.price, 0)
      );
    }
  }

  toggleCartSidebar() {
    this.isCartSidebarOpen.update((value) => !value);
  }

  closeCartSidebar() {
    this.isCartSidebarOpen.set(false);
  }
}
