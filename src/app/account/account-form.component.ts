import { Component }  from '@angular/core';
import {User}       from './Users'; 

@Component({
    moduleId : module.id,
    selector: 'client-form',
    templateUrl: 'app/account-form.html',
    styles: [`
             .ng-valid { border-color: green; }
             .ng-invalid { border-color: red; }    
             `]
})

export class AccountFormComponent (mail: any,pseudo: any,familyname: any,name: any){
   
    
    private user = new User(this.name, this.familyname, this.pseudo, this.mail);
    
    onSubmit(): void {
        console.log(this.user); 
    
    })
}

