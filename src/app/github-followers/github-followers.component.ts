
import { ActivatedRoute } from '@angular/router';
import { GithubFollowersService } from '../services/github-followers.service';
import { Component, OnInit } from '@angular/core';
import {Observable} from  'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers: any[];
  constructor(
       private route:ActivatedRoute,
       private service: GithubFollowersService)
     { }

  ngOnInit() {
    console.log('ngOnInit');
    Observable.combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
     ] )
     .subscribe(combine=>{
     
      let page=combine[1].get('page');
    
  
      console.log(page);

    this.service.getAll()
    .subscribe(followers => this.followers = followers);
     });
     
    

  }

}
