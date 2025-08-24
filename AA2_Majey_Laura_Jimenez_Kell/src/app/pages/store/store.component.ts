import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
// si quieres usar ngSrc descomenta esta línea
// import { NgOptimizedImage } from '@angular/common';

interface Store {
  name: string;
  description: string;
  score: number;
  image: string;
}

@Component({
  selector: 'app-store',
  standalone: true,
  // si quieres usar ngSrc: agrega NgOptimizedImage al array de imports
  imports: [CommonModule, RouterModule],
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent {
  // señal con la info de la tienda
  store = signal<Store>({
    name: 'Mi Tienda Online',
    description: 'Los mejores productos de tecnología',
    score: 4.5,
    image: 'assets/store.png'
  });

  // productos de la tienda
  products = signal([
    { id: 1, name: 'Laptop', price: 1200, images: 'assets/laptop.png' },
    { id: 2, name: 'Mouse', price: 25, images: 'assets/mouse.png' },
    { id: 3, name: 'Keyboard', price: 80, images: 'assets/keyboard.png' }
  ]);

  constructor(private router: Router) {}

  goToDetail(id: number): void {
    this.router.navigate(['/details', id]);
  }

  getScore(score: number): string {
    return `calificación ${score}/5`;
  }
}
