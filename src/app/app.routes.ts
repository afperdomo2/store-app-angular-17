import { Routes } from '@angular/router';

import { NotFoundComponent } from '@features/info/pages/not-found/not-found.component';
import { LayoutComponent } from '@shared/components/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent, // Layout reutilizable con Header
    children: [
      {
        path: '',
        loadComponent: () =>
          import('@features/products/pages/list/list.component'),
      },
      {
        path: 'about',
        loadComponent: () =>
          import('@features/info/pages/about/about.component'),
      },
      {
        path: 'products/:productId',
        loadComponent: () =>
          import(
            '@features/products/pages/product-detail/product-detail.component'
          ),
      },
    ],
  },
  { path: '**', component: NotFoundComponent }, // Ruta para manejar páginas no encontradas
];
