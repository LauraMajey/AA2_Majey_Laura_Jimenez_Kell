import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  products = [
    { id: 1, name: 'Producto A', price: 12000 },
    { id: 2, name: 'Producto B', price: 18500 },
    { id: 3, name: 'Producto C', price: 9900 }
  ];

  getTotal(): number {
    return this.products.reduce((sum, p) => sum + p.price, 0);
  }
}
