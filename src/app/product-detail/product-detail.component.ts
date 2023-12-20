import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ProductService} from "../product.service";


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: any;
  id: number;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService // Injektujte ProductService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.product = this.productService.getProductById(this.id); // Použite ProductService na načítanie produktu
    });
  }
}
