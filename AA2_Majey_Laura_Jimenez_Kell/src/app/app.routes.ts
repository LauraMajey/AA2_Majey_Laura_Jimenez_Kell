// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { StoreComponent } from './pages/store/store.component';
import { ProductsComponent } from './pages/products/products.component';

export const routes: Routes = [
  {
    path: '',
    component: StoreComponent,
    title: 'Tienda'
  },
  {
    path: 'products',
    component: ProductsComponent,
    title: 'Productos'
  }
];
