import { observable } from 'rxjs/symbol/observable';
import { BadInout } from './../common/bad-input';

import { NotFoundError } from '../common/not-found-error';
import { AppError } from '../common/app-error';
import { error } from 'util';


import { Http } from '@angular/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';

import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class DataService {

//  private url='https://jsonplaceholder.typicode.com/posts'

  constructor( private url:string,private http:Http) { }
  getAll(){
    return this.http.get(this.url)
          .map(response => response.json())
          .catch(this.handleError);
  }

  create(response){

    //return  Observable.throw(new AppError());
    return this.http.post(this.url,JSON.stringify(response))
    .map(response=>response.json())
    .catch(this.handleError);
  }

 

  delete(id) {
    return this.http.delete(this.url + '/' + id)
      .map(response => response.json())
      .catch(this.handleError);
  }


  update(resource) {
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true }))
      .map(response => response.json())      
      .catch(this.handleError);
  }

  private handleError(error:Response){
    if(error.status===404){
      return Observable.throw(new NotFoundError());
    }
    else if(error.status===400)
      return Observable.throw(new BadInout(error.json()));
    else{
      return Observable.throw(new AppError());
    }
    
  }
}
