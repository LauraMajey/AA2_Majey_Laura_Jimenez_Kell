export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  brand: string;
  type:string;
  release_date:string;
  image_url: string;
  isPromotional: boolean;
  score?: number;
  likes?: number;
  idStore: number;
}
