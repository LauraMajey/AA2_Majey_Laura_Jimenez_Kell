import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';

@Injectable({ providedIn: 'root' })
export class ProductService {
  #productList: Product[] = [
    {
    id: 1,
    name: 'Samsung Galaxy S24',
    description: 'Smartphone de alta gama con cámara de 200MP',
    price: 4500000,
    brand: 'Samsung',
    type: 'Celular',
    release_date: '2025-03-01',
    image_url: 'assets/s24.jpg',
    isPromotional: true,
    idStore: 1
    },
    {
    id: 2,
    name: 'Lenovo IdeaPad 5',
    description: 'Portátil liviano con procesador Ryzen 7',
    price: 3200000,
    brand: 'Lenovo',
    type: 'Portátil',
    release_date: '2024-11-15',
    image_url: 'assets/ideapad.jpg',
    isPromotional: false,
    idStore: 2
    },
    {
    id: 3,
    name: 'MacBook Air M3',
    description: 'Portátil ultraligero con chip M3 y pantalla Retina',
    price: 5800000,
    brand: 'Apple',
    type: 'Portátil',
    release_date: '2025-06-10',
    image_url: 'assets/macbook.jpg',
    isPromotional: true,
    idStore: 1
    },
    {
    id: 4,
    name: 'Xiaomi Redmi Note 13',
    description: 'Celular gama media con gran batería y cámara triple',
    price: 1200000,
    brand: 'Xiaomi',
    type: 'Celular',
    release_date: '2025-04-20',
    image_url: 'assets/redmi.jpg',
    isPromotional: false,
    idStore: 2
    }
  ];

  getProducts = () => this.#productList;

  getStoreProducts = (storeId: number) =>
    this.#productList.filter(x => x.idStore === storeId);
}
