import { ActivatedRoute, Route } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor( private Route:ActivatedRoute) { }

  ngOnInit() {
   // let d =+this.Route.paramMap['id'];
    this.Route.paramMap
    .subscribe(params=>{
      let id=+params.get('id');
      console.log(id);
    })
  }

}
