import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  
 @Input('isFavorite') isFavorite:boolean;
  constructor() { }

  ngOnInit() {
  }
  onClick(){
    console.log('Click');
    this.isFavorite=!this.isFavorite;
  }

}
