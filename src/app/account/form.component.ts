import { Component }  from '@angular/core';
import {User}       from './user';  

@Component({
    moduleId : module.id,
    selector: 'form',
    templateUrl: './form.component.html',
})

export class FormComponent {
 
    user = {};
    
//    onSubmit(value:any): void {
//        let user = new User(value.name, value.familyname, value.pseudo, value.mail);
//        console.log(user); 
//    }
}
        

