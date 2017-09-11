import { FavoriteComponent, FavoriteChangedEvenAgrs } from './favorite/favorite.component';
import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  viewMode='map';
  courses=[
    {ID:1,Name:'Java' },
    {ID:1,Name:'C#'},
    {ID:1,Name:'Angular'}]
  post={
    title:"Title",
    isFavorite:true
  }
  tweet={
    body:'...',
    lilesCount:10,
    isLiked:true
  }
  onFavoriteChange(eventAgrs:FavoriteChangedEvenAgrs){
    console.log('Favorate Change isFavorite is : ',eventAgrs.newValue);
  }
  onClick(){

  }
  addCourse(){
    this.courses.push({ID:4,Name:'Node'});
  }
  deleteCourse(course){
    console.log('delete Call'+course.Name);
   let index= this.courses.indexOf(course);
   this.courses.splice(index,1);
  }
}
