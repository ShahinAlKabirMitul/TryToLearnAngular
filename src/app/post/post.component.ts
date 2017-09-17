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
      console.log(response.json());
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
   })
   ;  
 }
 updatePost(post){
  // this.http.patch(this.u)
  this.service.updatePost(post)
  .subscribe(response=>{
    console.log(response.json());
  })
  ;
 }
 Delete(post){
 this.service.deletePost(post)
  .subscribe(response=>{
    let index=this.posts.indexOf(post);
    this.posts.splice(index,1);; 
  })
 }
 
}
