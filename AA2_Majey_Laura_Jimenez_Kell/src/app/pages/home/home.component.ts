import { Component, inject, OnInit, signal } from '@angular/core';
import { TuiButton } from '@taiga-ui/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/product';
import { NgOptimizedImage } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TuiButton, NgOptimizedImage],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export default class HomeComponent implements OnInit {
  #productService = inject(ProductService);
  #router = inject(Router);
  protected productList = signal<Product[]>([]);

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productList.set(this.#productService.getProducts().filter(x => x.isPromotional));
  }

  goToDetail = (id: number) => this.#router.navigate([`/detail/${id}`]);
}
