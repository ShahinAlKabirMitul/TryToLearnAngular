import { CoursesService } from './courses.service';
import{Component}from '@angular/core';
@Component({
    selector:'courses',
    template:`
            <h2>{{title}}</h2>
            <ul>
                <li *ngFor="let c of courses">{{c}}</li>
            </ul>
                <button class="btn btn-primary" [class.actival]="isActive">Save</button>

            `

})
export class CoursesComponent{
    title='List of Courses'
    courses;
    isActive=false;

    constructor(service:CoursesService){
      //  let service=new CoursesService();
        this.courses=service.getCourses();
    }
}