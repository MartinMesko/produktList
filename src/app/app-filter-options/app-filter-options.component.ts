import {Component, EventEmitter, Output} from '@angular/core';
import {FilterStatusService} from "../filter-status.service";


@Component({
  selector: 'app-app-filter-options',
  templateUrl: './app-filter-options.component.html',
  styleUrl: './app-filter-options.component.scss'
})
export class AppFilterOptionsComponent {

  onlyInStock: boolean = false;
  constructor(private filterStatusService: FilterStatusService) {}

  zmenaStavuFunction(): void {
    this.filterStatusService.setInStock(this.onlyInStock);
  }

}
