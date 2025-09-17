import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { Category } from '@core/models/category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private http = inject(HttpClient);
  private readonly apiUrl = 'https://api.escuelajs.co/api/v1';

  constructor() {}

  getCategories() {
    return this.http.get<Category[]>(`${this.apiUrl}/categories`);
  }

  getCategoryById(id: string) {
    return this.http.get<Category>(`${this.apiUrl}/categories/${id}`);
  }
}
