
import { AbstractControl, ValidationErrors } from '@angular/forms';


export class UserNameValidator{
   static cannotContainSpece(control:AbstractControl):ValidationErrors| null{
        if((control.value as string).indexOf(' ')>=0)
             return { cannotContainSpece:true};
        else
            return null;

    }
}