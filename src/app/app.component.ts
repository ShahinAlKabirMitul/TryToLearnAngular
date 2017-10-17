import { error } from 'util';
import { setTimeout } from 'timers';

import { Observable, Observer } from 'rxjs/Rx';
import { FavoriteComponent, FavoriteChangedEvenAgrs } from './favorite/favorite.component';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

      

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
  ngOnInit(){
    const myObservable=Observable.create((observer:Observer<string>)=>{

        setTimeout(()=>{
          observer.next('First package')
        },2000) 
        
        setTimeout(()=>{
          observer.next('Second package')
        },4000) 

        setTimeout(()=>{
          observer.complete()
        },5000) 
    });
    
    myObservable.subscribe(
      (data:string)=>{ console.log(data);} ,
      (error:string)=>{ console.log(error);} ,
      ()=>{ console.log('complete');} ,
    )
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
