import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productList: any[] = [
    {
      id: 1,
      name: 'Samsung Galaxy',
      productCategory: 'Phone',
      price: '250€',
      stock: 0,
      description: 'High-speed and powerful smartphone with excellent display quality and battery life. Ideal for multimedia and games.',
      vendors: [
        { vendorName: 'TCOM', vendorStock: 0 },
        { vendorName: 'Orange', vendorStock: 0 },
        { vendorName: 'O2', vendorStock: 0 }
      ],
      reviews: ['Excellent']
    },
    {
      id: 2,
      name: 'iPhone 13',
      productCategory: 'Phone',
      price: '800€',
      stock: 0,
      description: 'Premium phone with advanced camera and high performance. Elegant design and robust construction.',
      vendors: [
        { vendorName: 'iStore', vendorStock: 0},
        { vendorName: 'TCOM', vendorStock: 3 },
        { vendorName: 'Orange', vendorStock: 0 }
      ],
      reviews: ['Nothing to fault']
    },
    {
      id: 3,
      name: 'Xiaomi Redmi Note',
      productCategory: 'Phone',
      price: '150€',
      stock: 0,
      description: 'Affordable phone with good battery life and quality camera. Ideal for everyday use.',
      vendors: [
        { vendorName: 'TCOM', vendorStock: 4 },
        { vendorName: '4ka', vendorStock: 4 },
        { vendorName: 'Orange', vendorStock: 4 }
      ],
      reviews: ['Weak performance']
    },
    {
      id: 4,
      name: 'Huawei P40',
      productCategory: 'Phone',
      price: '300€',
      stock: 0,
      description: 'Phone with excellent performance and photography. Attractive design and long-lasting battery life on a single charge.',
      vendors: [
        { vendorName: 'TCOM', vendorStock: 3 },
        { vendorName: '4ka', vendorStock: 2 },
        { vendorName: 'O2', vendorStock: 3 }
      ],
      reviews: ['Poor quality', 'Not recommended']
    },
    {
      id: 5,
      name: 'OnePlus 9',
      productCategory: 'Phone',
      price: '500€',
      stock: 0,
      description: 'Phone with top-notch performance and a smooth 120Hz display. Excellent photographic capabilities and fast charging.',
      vendors: [
        { vendorName: 'TCOM', vendorStock: 2 },
        { vendorName: 'Orange', vendorStock: 2 },
        { vendorName: 'O2', vendorStock: 2 }
      ],
      reviews: ['Not recommended']
    }
  ];

  constructor() {}

  getProductById(id: number) {
    return this.productList.find(product => product.id === id);
  }
}
