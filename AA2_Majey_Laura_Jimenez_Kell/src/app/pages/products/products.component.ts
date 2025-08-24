import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgOptimizedImage } from '@angular/common';
interface Product {
  id: number;
  name: string;
  price: number;
  image_url?: string;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  // lista de productos
  products = signal<Product[]>([
    { id: 1, name: 'Producto A', price: 12000 },
    { id: 2, name: 'Producto B', price: 18500 },
    { id: 3, name: 'Producto C', price: 9900 }
  ]);

  // búsqueda por texto
  searchTerm = signal('');

  // rango dinámico de precios
  min = computed(() => Math.min(...this.products().map(p => p.price)));
  max = computed(() => Math.max(...this.products().map(p => p.price)));

  // sliders de precio
  lower = signal(this.min());
  upper = signal(this.max());

  // productos filtrados (búsqueda + rango)
  filteredProducts = computed(() =>
    this.products().filter(p =>
      p.name?.toLowerCase().includes(this.searchTerm().toLowerCase()) &&
      p.price >= this.lower() &&
      p.price <= this.upper()
    )
  );

  filterProduct(event: KeyboardEvent): void {
    const value = (event.target as HTMLInputElement).value;
    this.searchTerm.set(value);
  }

  applyFilters(): void {

  }

  getTotal(): number {
    return this.products().reduce((sum, p) => sum + p.price, 0);
  }

  goToDetail(id: number) {
    console.log('Ir al detalle del producto', id);
  }
}
