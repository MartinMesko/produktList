import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrl: './generator.component.scss'
})
export class GeneratorComponent implements OnInit{

  productList: any[];

  constructor(
    private router : ActivatedRoute
  ) {
  }
  ngOnInit(): void {

      this.productList = [
        {
          name: 'Samsung Galaxy',
          productCategory: 'Phone',
          price: '250€',
          stock: 0,
          description: 'Vysokorýchlostný a výkonný smartfón s vynikajúcou kvalitou displeja a výdržou batérie. Ideálny pre multimédiá a hry.',
          vendors: [
            { vendorName: 'TCOM', vendorStock: 0 },
            { vendorName: 'Orange', vendorStock: 0 },
            { vendorName: 'O2', vendorStock: 0 }
          ]
        },
        {
          name: 'iPhone 13',
          productCategory: 'Phone',
          price: '800€',
          stock: 0,
          description: 'Prémiový telefón s pokročilou kamerou a vysokým výkonom. Elegantný dizajn a robustná konštrukcia.',
          vendors: [
            { vendorName: 'iStore', vendorStock: 0},
            { vendorName: 'TCOM', vendorStock: 3 },
            { vendorName: 'Orange', vendorStock: 0 }
          ]
        },
        {
          name: 'Xiaomi Redmi Note',
          productCategory: 'Phone',
          price: '150€',
          stock: 0,
          description: 'Cenovo dostupný telefón s dobrou výdržou batérie a kvalitným fotoaparátom. Ideálny pre bežné používanie.',
          vendors: [
            { vendorName: 'TCOM', vendorStock: 4 },
            { vendorName: '4ka', vendorStock: 4 },
            { vendorName: 'Orange', vendorStock: 4 }
          ]
        },
        {
          name: 'Huawei P40',
          productCategory: 'Phone',
          price: '300€',
          stock: 0,
          description: 'Telefón s vynikajúcim výkonom a fototechnikou. Atraktívny dizajn a dlhodobá výdrž na jedno nabitie.',
          vendors: [
            { vendorName: 'TCOM', vendorStock: 3 },
            { vendorName: '4ka', vendorStock: 2 },
            { vendorName: 'O2', vendorStock: 3 }
          ]
        },
        {
          name: 'OnePlus 9',
          productCategory: 'Phone',
          price: '500€',
          stock: 0,
          description: 'Telefón so špičkovým výkonom a hladkým 120Hz displejom. Výborné fotografické schopnosti a rýchle nabíjanie.',
          vendors: [
            { vendorName: 'TCOM', vendorStock: 2 },
            { vendorName: 'Orange', vendorStock: 2 },
            { vendorName: 'O2', vendorStock: 2 }
          ]
        }
      ];
      this.calculateStock();

  }
  calculateStock(): void {
    this.productList.forEach(product => {
      product.stock = product.vendors.reduce((totalStock, vendor) => totalStock + vendor.vendorStock, 0);
    });
  }
}