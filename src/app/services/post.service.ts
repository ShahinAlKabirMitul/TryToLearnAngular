import { DataService } from './data-service';



import { Http } from '@angular/http';

import { Injectable } from '@angular/core';






@Injectable()
export class PostService extends DataService{

  //private urlLink=

  constructor( http:Http) { 
    super('https://jsonplaceholder.typicode.com/posts',http);

  }
 

  

}
