import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss'
})
export class ReviewsComponent implements OnInit{

  @Input() reviews: any;
  @Output() reviewAdded: EventEmitter<any> = new EventEmitter<any>();

  newReview: string = '';

  constructor() {
  }
  ngOnInit(): void {
  }

  addReview(newReview: string): void {
      if (this.newReview)
      {
        this.reviews.push(newReview);
        this.reviewAdded.emit(newReview);
        this.newReview = '';
      }
  }

}
