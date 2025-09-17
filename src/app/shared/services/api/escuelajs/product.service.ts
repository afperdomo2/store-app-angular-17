import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { Product } from '@core/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private http = inject(HttpClient);
  private readonly apiUrl = 'https://api.escuelajs.co/api/v1';

  constructor() {}

  getProducts() {
    return this.http.get<Product[]>(`${this.apiUrl}/products`);
  }

  getProductById(id: string | number) {
    return this.http.get<Product>(`${this.apiUrl}/products/${id}`);
  }
}
