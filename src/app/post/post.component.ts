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
export class PostComponent  {

  posts:any[];
  private url='https://jsonplaceholder.typicode.com/posts'
  constructor(private  http:Http) { 
    http.get(this.url).subscribe(response =>{
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


}
