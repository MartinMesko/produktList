import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Subscription} from "rxjs";
import {FilterStatusService} from "../filter-status.service";

@Component({
  selector: 'app-app-filter',
  templateUrl: './app-filter.component.html',
  styleUrl: './app-filter.component.scss'
})
export class AppFilterComponent implements OnInit, OnDestroy{

  @Input() productList: any[];
  @Output() filteredList = new EventEmitter<any>();

  textFilter: string = '';
  private subscription: Subscription;
  private inStockOnly: boolean = false;

  constructor(private filterStatusService: FilterStatusService) {}

  ngOnInit(): void {
    this.subscription = this.filterStatusService.inStock$.subscribe(inStock => {
      this.inStockOnly = inStock;
      this.filter();
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  filter(): void {
    let filtered = this.productList;
    if (this.textFilter.length > 2) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(this.textFilter.toLowerCase())
      );
    }
    if (this.inStockOnly) {
      filtered = filtered.filter(product => product.stock > 0);
    }
    this.filteredList.emit(filtered);
  }
}
