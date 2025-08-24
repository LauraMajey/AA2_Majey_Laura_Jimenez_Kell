import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent {
  products = signal([
    { id: 1, name: 'Laptop', price: 1200 },
    { id: 2, name: 'Mouse', price: 25 },
    { id: 3, name: 'Keyboard', price: 80 }
  ]);

  selectedProduct = signal(null);

  selectProduct(product: any) {
    this.selectedProduct.set(product);
  }

  clearSelection() {
    this.selectedProduct.set(null);
  }
}
