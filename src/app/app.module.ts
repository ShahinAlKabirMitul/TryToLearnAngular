import { GithubFollowersService } from './services/github-followers.service';
import { AppErrorHandler } from './common/app-error-handler';
import { PostService } from './services/post.service';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuauthorsService } from './auauthors.service';
import { EmailService } from './email.service';
import { CoursesService } from './courses.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponent } from "./courses.component";
import { CourseComponent } from './course/course.component';
import { AuthorsComponent } from './authors/authors.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { TitleCasePipe } from './title-case.pipe';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { PostComponent } from './post/post.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';

import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorsComponent,
    FavoriteComponent,
    TitleCasePipe,
    PanelComponent,
    LikeComponent,
    ZippyComponent,
    ContactFormComponent,
    NewCourseFormComponent,
    SignupFormComponent,
    PostComponent,
    GithubFollowersComponent,
    NavbarComponent,
    HomeComponent,
    GithubProfileComponent,
    NotFoundComponent
   
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
         path:'',
         component:HomeComponent
      } ,
      {
        path:'followers/:username',
        component:GithubProfileComponent
       },
      {
        path:'followers',
        component:GithubFollowersComponent
       },
       {
         path:'posts',
         component:PostComponent
        },
        {
          path:'**',
          component:NotFoundComponent
         }
    ])
   
  ],
  providers: [
    PostService,
    CoursesService,
    EmailService,
    AuauthorsService,
    GithubFollowersService,
    {provide:ErrorHandler,useClass:AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
