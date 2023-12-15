import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-informations',
  templateUrl: './informations.component.html',
  styleUrl: './informations.component.scss'
})
export class InformationsComponent implements OnInit{

  @Input() data: any;
  ngOnInit(): void {
  }

}

