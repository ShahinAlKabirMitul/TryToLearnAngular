import { FormsModule } from '@angular/forms';
import { AuauthorsService } from './auauthors.service';
import { EmailService } from './email.service';
import { CoursesService } from './courses.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponent } from "./courses.component";
import { CourseComponent } from './course/course.component';
import { AuthorsComponent } from './authors/authors.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { TitleCasePipe } from './title-case.pipe';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorsComponent,
    FavoriteComponent,
    TitleCasePipe,
    PanelComponent,
    LikeComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    CoursesService,
    EmailService,
    AuauthorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
