export interface Product {
  id: number;
  price: number;
  productCategory: string;
  name: string;
  stock: number;
  salesLastMonth: number;
  totalSales: number;
  sales: number;
  description: string;
  vendors: { vendorName: string; vendorStock: number; }[];
  reviews: string[];


}
