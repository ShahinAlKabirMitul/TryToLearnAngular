import { postcssArgs } from '@angular/cli/tasks/eject';
import { Url } from 'url';

import { Http } from '@angular/http';
import * as http from 'http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts:any[];
  private url='https://jsonplaceholder.typicode.com/posts'
  constructor(private  http:Http) { 
   
  }

  ngOnInit(){
    this.http.get(this.url).subscribe(response =>{
      this.posts=response.json();
      console.log(response.json());
  });
   }
 addPost(input:HTMLInputElement){
   let post={title:input.value}
   console.log(post);
   input.value=' ';
   this.http.post(this.url,JSON.stringify(post))
   .subscribe(rsponse=>{
     post['id']=rsponse.json().id;
     this.posts.splice(0,0,post); 
     console.log(rsponse.json())
   })
   ;  
 }
 updatePost(post){
  // this.http.patch(this.u)
  this.http.patch(this.url+'/'+post.id,JSON.stringify({isRead:true}))
  .subscribe(response=>{
    console.log(response.json());
  })
  ;
 }
 Delete(post){
  this.http.delete(this.url+'/'+post.id,JSON.stringify({isRead:true}))
  .subscribe(response=>{
    let index=this.posts.indexOf(post);
    this.posts.splice(index,1);; 
  })
 }
 
}
