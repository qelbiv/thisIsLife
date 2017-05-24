import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import { RouterModule }   from '@angular/router';
=======
import { FormsModule }   from '@angular/forms';
>>>>>>> fc6106dfcc754da92da278a45e63e91faf1e6998

import { AppComponent }  from './app.component';
import { MapComponent } from "./mapview/map.component";
import { MenuComponent } from "./mapview/menu.component";
import { RulesComponent } from './rules.component';

import {FormComponent} from './account/form.component';


@NgModule({
<<<<<<< HEAD
   imports:      [ BrowserModule,
                   RouterModule.forRoot([
//                           {path: '', redirectTo:'/mapview', pathMatch:'full'},
                           {path: 'rules', component : RulesComponent},
                   ])
                   
                 ],
                                          
   declarations: [ AppComponent, MapComponent, RulesComponent, MenuComponent ],
   
   bootstrap:    [ AppComponent ]
=======
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, MapComponent, FormComponent ],
  bootstrap:    [ AppComponent ]
>>>>>>> fc6106dfcc754da92da278a45e63e91faf1e6998
})

export class AppModule { }