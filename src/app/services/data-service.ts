import { BadInout } from './../common/bad-input';

import { NotFoundError } from '../common/not-found-error';
import { AppError } from '../common/app-error';
import { error } from 'util';


import { Http } from '@angular/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';

import 'rxjs/add/observable/throw';

@Injectable()
export class DataService {

//  private url='https://jsonplaceholder.typicode.com/posts'

  constructor( private url:string,private http:Http) { }
  getAll(){
    return   this.http.get(this.url)
             .catch(this.handleError);
  }

  create(response){
    return this.http.post(this.url,JSON.stringify(response))
    .catch(this.handleError);
  }

 

  delete(response){
    return  this.http.delete(this.url+'/'+response.id,JSON.stringify({isRead:true}))
          .catch(this.handleError);
  }


  update(response){
    return this.http.patch(this.url+'/'+response.id,JSON.stringify({isRead:true}));
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
