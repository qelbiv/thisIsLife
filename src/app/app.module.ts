import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule }   from '@angular/router';

import { FormsModule }   from '@angular/forms';


import { AppComponent }  from './app.component';
import { MapComponent } from "./mapview/map.component";
import { MenuComponent } from "./mapview/menu.component";
import { RulesComponent } from './rules.component';

import {FormComponent} from './account/form.component';


@NgModule({

   imports:      [ BrowserModule,
                   FormsModule,
                   RouterModule.forRoot([

                           {path: 'rules', component : RulesComponent},
                   ])
                   
                 ],
                                          
   declarations: [ AppComponent, MapComponent, RulesComponent, MenuComponent, FormComponent ],
   
   bootstrap:    [ AppComponent ]

})

export class AppModule { }