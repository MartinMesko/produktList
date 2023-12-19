import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterStatusService {
  private inStockSource = new BehaviorSubject<boolean>(false);
  inStock$ = this.inStockSource.asObservable();

  setInStock(value: boolean) {
    this.inStockSource.next(value);
  }
}
