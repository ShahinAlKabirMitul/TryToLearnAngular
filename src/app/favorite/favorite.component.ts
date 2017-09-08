import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent  {
  
 @Input('isFavorite') isFavorite:boolean;
 @Output('change') click=new EventEmitter();
  constructor() { }

 
  onClick(){
    console.log('Click');
    this.isFavorite=!this.isFavorite;
    this.click.emit( {newValue :this.isFavorite});
  }

}
export interface FavoriteChangedEvenAgrs{
  newValue:boolean
}