import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/product';
import { CurrencyPipe, NgOptimizedImage } from '@angular/common';
import { Store } from '../../interfaces/store';
import { StoreService } from '../../services/store.service';
import { TuiButton } from '@taiga-ui/core';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CurrencyPipe, NgOptimizedImage, TuiButton],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export default class DetailsComponent {

  #activatedRoute = inject(ActivatedRoute);
  #productService = inject(ProductService);
  #storeService = inject(StoreService);
  #router = inject(Router);
  protected itemId = this.#activatedRoute.snapshot.params['id'];
  protected product: Product = this.#productService.getProducts().find(x => x.id == this.itemId)!;
  protected store: Store = this.#storeService.getStore(this.product.idStore);
  protected productList = signal<Product[]>(this.#productService.getStoreProducts(this.store.id));

  getScore = (score: number) => this.#storeService.getScore(score);

  goToDetail(id: number): void {
  this.#router.navigate([`/details`, id]);
  }

}