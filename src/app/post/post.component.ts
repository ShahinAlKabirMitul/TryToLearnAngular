import { BadInout } from './../common/bad-input';
import { AppError } from './../common/app-error';
import { NotFoundError } from '../common/not-found-error';


import { error } from 'util';
import { PostService } from '../services/post.service';
import { postcssArgs } from '@angular/cli/tasks/eject';
import { Url } from 'url';


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts:any[];
 
  constructor(private service:PostService) { 
   
  }

  ngOnInit(){
    this.service.getAll()
    .subscribe(response =>{
      this.posts=response.json();
    })
   }
 addPost(input:HTMLInputElement){
   let post={title:input.value}
   console.log(post);
   input.value=' ';
   this.service.create(post)
   .subscribe(rsponse=>{
     post['id']=rsponse.json().id;
     this.posts.splice(0,0,post); 
     console.log(rsponse.json())
   }, (error: AppError)=>{
     if(error instanceof BadInout  ){
      alert('An bad input Error');
     }
     throw error;

   })
   ;  
 }
 updatePost(post){
  // this.http.patch(this.u)
  this.service.update(899)
  .subscribe(response=>{
    console.log(response.json());
  });
 }

 Delete(post){
 this.service.delete(453)
  .subscribe(response=>{
    let index=this.posts.indexOf(post);
    this.posts.splice(index,1);; 
  },( error: AppError) =>{
    if (error instanceof NotFoundError) {
        alert('post already deleted');
        console.log(error);
    }else{
     
    }
  });
 }
 
}
