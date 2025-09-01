import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isCartSidebarOpen = signal(false);

  toggleCartSidebar() {
    this.isCartSidebarOpen.update((value) => !value);
  }

  closeCartSidebar() {
    this.isCartSidebarOpen.set(false);
  }
}
