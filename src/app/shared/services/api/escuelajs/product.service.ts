import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { Product } from '@core/models/product.model';

export interface ProductFilterOptions {
  categorySlug?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private http = inject(HttpClient);
  private readonly apiUrl = 'https://api.escuelajs.co/api/v1';

  constructor() {}

  getProducts(filter?: ProductFilterOptions) {
    const url = new URL(`${this.apiUrl}/products`);
    if (filter?.categorySlug) {
      url.searchParams.append('categorySlug', filter.categorySlug);
    }
    return this.http.get<Product[]>(url.toString());
  }

  getProductById(id: string | number) {
    return this.http.get<Product>(`${this.apiUrl}/products/${id}`);
  }
}
