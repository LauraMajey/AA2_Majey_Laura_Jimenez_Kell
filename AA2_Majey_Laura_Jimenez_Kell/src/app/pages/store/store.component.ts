import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { Store } from '../../interfaces/store';
import { StoreService } from '../../services/store.service';
import { Product } from '../../interfaces/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent {

  store = signal<Store | null>(null);
  products = signal<Product[]>([]);

  constructor(
    private storeService: StoreService,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // obtenemos el id desde la URL: /store/:id
    const id = Number(this.route.snapshot.paramMap.get('id'));

    // cargamos la tienda con ese id
    const selectedStore = this.storeService.getStore(id);
    this.store.set(selectedStore || null);

    // cargamos los productos de esa tienda
    if (selectedStore) {
      this.products.set(
        this.productService.getProducts().filter(p => p.idStore === id)
      );
    }
  }

  goToDetail(id: number): void {
    this.router.navigate(['/details', id]);
  }

  getScore(score: number): string {
    return `Calificación: ${score}/5`;
  }
}
