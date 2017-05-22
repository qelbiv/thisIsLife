import { Component } from "@angular/core";


import { AccountFormComponent } from './account-form.component';

@Component({
    selector: 'form-test',
    template: '<client-form></client-form>',
   
})
export class AccountComponent { }


@Component({
    moduleId : module.id,
    selector: 'account',
    templateUrl : './account.component.html',
    
})

 export class AccountComponents {
    
}