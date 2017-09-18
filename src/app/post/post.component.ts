import { BadInout } from './../common/bad-input';
import { AppError } from './../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { AppError } from '../common/app-error';

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
    this.service.getPost()
    .subscribe(response =>{
      this.posts=response.json();
    },error=>{
      alert('An unexpected error');
      console.log(error);
    });
   }
 addPost(input:HTMLInputElement){
   let post={title:input.value}
   console.log(post);
   input.value=' ';
   this.service.createPost(post)
   .subscribe(rsponse=>{
     post['id']=rsponse.json().id;
     this.posts.splice(0,0,post); 
     console.log(rsponse.json())
   }, (AppError)=>{
     if(error instanceof BadInout  ){
      alert('An bad input Error');
     }
     else{
      alert('An unexpected error');
     }
  
   
   })
   ;  
 }
 updatePost(post){
  // this.http.patch(this.u)
  this.service.updatePost(post)
  .subscribe(response=>{
    console.log(response.json());
  },error=>{
    alert('An unexpected error');
    console.log(error);
  });
 }
 Delete(post){
 this.service.deletePost(post.id)
  .subscribe(response=>{
    let index=this.posts.indexOf(post);
    this.posts.splice(index,1);; 
  },( AppError) =>{
    if (error instanceof NotFoundError) {
        alert('post already deleted');
    }else{
       alert('An unexpected error');
       console.log(error);
    }
  });
 }
 
}
