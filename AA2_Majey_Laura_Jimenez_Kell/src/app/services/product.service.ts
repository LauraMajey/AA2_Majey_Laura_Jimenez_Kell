import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';

@Injectable({ providedIn: 'root' })
export class ProductService {
  #productList: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description 1',
      price: 10000,
      images: 'https://via.placeholder.com/150',
      isPromotional: true,
      idStore: 1
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description 2',
      price: 20000,
      images: 'https://via.placeholder.com/150',
      isPromotional: false,
      idStore: 1
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Description 3',
      price: 30000,
      images: 'https://via.placeholder.com/150',
      isPromotional: true,
      idStore: 1
    }
  ];

  getProducts = () => this.#productList;

  getStoreProducts = (storeId: number) =>
    this.#productList.filter(x => x.idStore === storeId);
}
