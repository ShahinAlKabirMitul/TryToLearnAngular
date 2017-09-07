
import { CoursesService } from './courses.service';
import{Component}from '@angular/core';

@Component({
    selector:'courses',
    template:`
            <h2>{{title}}</h2>
           
          
            <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
            {{email}}
            `

})
export class CoursesComponent{
    title='List of Courses'
    courses;
    email="mitul.cse@gmail.com";
    isActive=false;


    constructor(service:CoursesService){
      //  let service=new CoursesService();
        this.courses=service.getCourses();
    }
    onKeyUp(){
        console.log("Enter was click & Value : "+this.email);
    }

    onSave($event){
        $event.stopPropagation();
        console.log("Button was click ",$event);
    }
    onDivClick(){
        console.log("DIV was click");
    }
}