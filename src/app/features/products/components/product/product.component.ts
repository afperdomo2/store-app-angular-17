import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  // randomImageUrl = `https://picsum.photos/640/640?r=${Math.random()}`;

  @Input({ required: true }) img: string = '';
  @Input({ required: true }) title: string = '';
  @Input({ required: true }) price: number = 0;
  @Input({ required: true }) rating: number = 0;

  @Output() addToCart = new EventEmitter<string>();

  addCartHandler() {
    console.log('Adding to cart:', this.title);
    this.addToCart.emit(`Este es un mensaje desde el hijo: ${this.title}`);
  }
}
