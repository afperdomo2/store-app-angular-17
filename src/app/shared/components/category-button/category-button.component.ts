import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Category } from '@core/models/category.model';

@Component({
  selector: 'app-category-button',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './category-button.component.html',
  styleUrl: './category-button.component.css',
})
export class CategoryButtonComponent {
  @Input({ required: true }) category!: Category;
  @Input({ required: true }) isSelected: boolean = false;
}
