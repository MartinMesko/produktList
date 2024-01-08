import {Component, OnInit, ViewChild} from '@angular/core';
import {ProductService} from '../product.service'; // Import služby pro získání dat o produktech
import {MatTableDataSource} from '@angular/material/table';
import {Product} from "../product.models";
import {MatPaginator} from "@angular/material/paginator";


@Component({
  selector: 'app-sales-statistics',
  templateUrl: './sales-statistics.component.html',
  styleUrls: ['./sales-statistics.component.scss']
})
export class SalesStatisticsComponent implements OnInit {
  productList: Product[] = [];
  totalRevenueLastMonth: number = 0;
  totalRevenue: number = 0;
  averagePrice: number = 0;
  bestSellingProduct: string = '';
  outOfStockProducts: Product[] = [];
  displayedColumns: string[] = ['name', 'price', 'stock', 'revenue'];

  dataSource = new MatTableDataSource<Product>(this.productList);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private productService: ProductService) {
    this.dataSource = new MatTableDataSource<Product>(this.productList);
  }

  ngOnInit(): void {
    this.productList = this.productService.getProducts();
    this.calculateSalesStats();
    this.getProductsOutOfStock();

  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  calculateSalesStats(): void {
    this.totalRevenueLastMonth = this.productList.reduce(
      (total, product) => total + product.salesLastMonth * product.price,
      0
    );

    this.totalRevenue = this.productList.reduce(
      (total, product) => total + product.totalSales * product.price,
      0
    );

    const totalPrices = this.productList.reduce(
      (total, product) => total + product.price,
      0
    );
    this.averagePrice = totalPrices / this.productList.length;

    let maxSales = 0;
    this.productList.forEach((product) => {
      if (product.totalSales > maxSales) {
        maxSales = product.totalSales;
        this.bestSellingProduct = product.name;
      }
    });

    this.dataSource.data = this.productList;
  }

  getProductsOutOfStock(): void {
    this.outOfStockProducts = this.productList.filter(
      (product) => product.stock === 0
    );
  }

  // applyFilter(event: Event, input: HTMLInputElement) {
  //   this.dataSource.filter = input.value.trim().toLowerCase();
  //
  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }
}
