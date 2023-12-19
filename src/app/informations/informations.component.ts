import {Component, ElementRef, Input, OnInit, OnDestroy, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-informations',
  templateUrl: './informations.component.html',
  styleUrl: './informations.component.scss'
})
export class InformationsComponent implements OnDestroy, AfterViewInit{

  @Input() data: any;
  public positionX: number;
  public positionY: number;

  constructor(private elRef: ElementRef) {}

  ngAfterViewInit() {
    this.updatePosition();
    window.addEventListener('resize', this.updatePosition.bind(this));
  }

  ngOnDestroy() {

    window.removeEventListener('resize', this.updatePosition.bind(this));
  }

  updatePosition() {
    const rect = this.elRef.nativeElement.getBoundingClientRect();
    this.positionX = rect.left;
    this.positionY = rect.top;
  }

}

