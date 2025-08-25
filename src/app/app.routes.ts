import { Routes } from '@angular/router';
import { AboutComponent } from './features/info/pages/about/about.component';
import { ListComponent } from './features/products/pages/list/list.component';

export const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'about', component: AboutComponent },
];
