export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  images: string;
  isPromotional: boolean;
  score?: number;
  likes?: number;
  idStore: number;
}
