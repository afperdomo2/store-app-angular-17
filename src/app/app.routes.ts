import { Routes } from '@angular/router';

import { AboutComponent } from '@features/info/pages/about/about.component';
import { NotFoundComponent } from '@features/info/pages/not-found/not-found.component';
import { ListComponent } from '@features/products/pages/list/list.component';
import { ProductDetailComponent } from '@features/products/pages/product-detail/product-detail.component';
import { LayoutComponent } from '@shared/components/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent, // Layout reutilizable con Header
    children: [
      { path: '', component: ListComponent },
      { path: 'about', component: AboutComponent },
      { path: 'products/:productId', component: ProductDetailComponent },
    ],
  },
  { path: '**', component: NotFoundComponent }, // Ruta para manejar páginas no encontradas
];
