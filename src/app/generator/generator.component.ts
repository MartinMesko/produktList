import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Data} from "@angular/router";
import {ProductService} from "../product.service";

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrl: './generator.component.scss'
})
export class GeneratorComponent implements OnInit{

  productList: any[];
  posledneRecenzie: {text: string, timestamp: Date} | null = null;
  selectedProduct: any;


  constructor(
    private router : ActivatedRoute,
    private productService: ProductService
  ) {
  }
  ngOnInit(): void {

      this.productList = this.productService.getProducts();
      this.calculateStock();

  }

    selectProduct(id: number): void {
    this.selectedProduct = this.getProductById(id);
  }

  getProductById(id: number) {
    return this.productList.find(product => product.id === id)
  }
  calculateStock(): void {
    this.productList.forEach(product => {
      product.stock = product.vendors.reduce((totalStock, vendor) => totalStock + vendor.vendorStock, 0);
    });
  }

  lastReviews(text: string): void {
    this.posledneRecenzie = { text: text, timestamp: new Date() };
  }

  handleFilter(filterProducts: any[]): void {
    this.productList = filterProducts;
  }
}
