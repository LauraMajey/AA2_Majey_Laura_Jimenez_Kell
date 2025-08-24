import { Routes } from '@angular/router';
import HomeComponent from './pages/home/home.component';
import { StoreComponent } from './pages/store/store.component';
import { DetailsComponent } from './pages/details/details.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent // Página principal
  },
  {
    path: 'store/:id',
    component: StoreComponent // Cada tienda por id
  },
  {
    path: 'details/:id',
    component: DetailsComponent // Detalle de producto
  },
  {
    path: '**',
    redirectTo: '' // Redirección si no encuentra ruta
  }
];
