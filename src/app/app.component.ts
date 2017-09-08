import { FavoriteComponent, FavoriteChangedEvenAgrs } from './favorite/favorite.component';
import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post={
    title:"Title",
    isFavorite:true
  }
  onFavoriteChange(eventAgrs:FavoriteChangedEvenAgrs){
    console.log('Favorate Change isFavorite is : ',eventAgrs.newValue);
  }

}
