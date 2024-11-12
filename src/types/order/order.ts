export type Order = {
  id: string;
  title: string
  description: string;
  price: string;
  image: any;
  rating: string; // TODO: add rating type
  seller?: string;
  buyer?: string;
};