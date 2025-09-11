import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Product } from '@core/models/product.model';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  // randomImageUrl = `https://picsum.photos/640/640?r=${Math.random()}`;

  @Input({ required: true }) product!: Product;

  @Output() addToCart = new EventEmitter<Product>();

  addCartHandler() {
    this.addToCart.emit(this.product);
  }
}
