import { Product } from '../core/models/product.model';
import { genRandomId } from '../core/utils/random-data.util';

export const INIT_PRODUCTS: Product[] = [
  {
    id: genRandomId(),
    title: 'Computador Asus',
    description: 'Um computador poderoso para tus necesidades diarias.',
    price: 1000,
    rating: 4.5,
    imageUrl: 'https://picsum.photos/640/640?r=1',
    createdAt: new Date(),
  },
  {
    id: genRandomId(),
    title: 'Smartphone Samsung',
    description: 'Un smartphone con cámara de alta resolución.',
    price: 2000,
    rating: 4.0,
    imageUrl: 'https://picsum.photos/640/640?r=2',
    createdAt: new Date(),
  },
  {
    id: genRandomId(),
    title: 'Notebook Dell',
    description: 'Um notebook liviano y potente para trabajo y estudio.',
    price: 3000,
    rating: 4.2,
    imageUrl: 'https://picsum.photos/640/640?r=3',
    createdAt: new Date(),
  },
];
