import { Injectable } from '@angular/core';
import { Store } from '../interfaces/store';

@Injectable({ providedIn: 'root' })
export class StoreService {
  #storeList: Store[] = [
    {
      id: 1,
      name: 'Tienda Central',
      description: 'La mejor tienda de productos variados',
      image: 'https://via.placeholder.com/150',
      phone: '123456789',
      address: 'Calle Falsa 123',
      category: 1,
      score: 4.5,
      likes: 120
    }
  ];

  getStore(id: number): Store {
    return this.#storeList.find(s => s.id === id)!;
  }

  getScore(score: number): string {
    if (score >= 4.5) return 'Excelente';
    if (score >= 3.5) return 'Bueno';
    return 'Regular';
  }
}
