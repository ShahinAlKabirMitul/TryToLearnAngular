import { AuauthorsService } from './../auauthors.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  authors;
  constructor(service:AuauthorsService) {
    this.authors=service.getAuthors();
   }

  ngOnInit() {
  }

}
