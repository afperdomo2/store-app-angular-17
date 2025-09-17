import { Category } from './category.model';

export interface Product {
  set(product: Product): void;
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: Category;
  images: string[];
  creationAt: Date;
  updatedAt: Date;
}
