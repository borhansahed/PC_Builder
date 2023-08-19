export interface IProduct {
  _id?: string;
  image: string;
  productname: string;
  category: string;
  price: string;
  status: string;
  rating: string;
  description: string;
  features?: string[];
  reviews?: string[];
}
