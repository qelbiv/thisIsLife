import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';

import { AppComponent }  from './app.component';
import { MapComponent } from "./mapview/map.component";
import { MenuComponent } from "./mapview/menu.component";
import { RulesComponent } from './rules.component';


@NgModule({
   imports:      [ BrowserModule,
                   RouterModule.forRoot([
//                           {path: '', redirectTo:'/mapview', pathMatch:'full'},
                           {path: 'rules', component : RulesComponent},
                   ])
                   
                 ],
                                          
   declarations: [ AppComponent, MapComponent, RulesComponent, MenuComponent ],
   
   bootstrap:    [ AppComponent ]
})

export class AppModule { }