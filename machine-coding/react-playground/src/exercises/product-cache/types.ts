export type ProductSummary = {
  id: number;
  title: string;
  price: number;
};

export type ProductDetail = ProductSummary & {
  description: string;
  category: string;
  thumbnail: string;
};
