import { Routes } from '@angular/router';

import { AboutComponent } from '@features/info/pages/about/about.component';
import { NotFoundComponent } from '@features/info/pages/not-found/not-found.component';
import { ListComponent } from '@features/products/pages/list/list.component';

export const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: NotFoundComponent }, // Wildcard route for 404 page
];
