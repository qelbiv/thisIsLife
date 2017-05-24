import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule}   from '@angular/router';
import { FormsModule}   from '@angular/forms';

import { AppComponent }  from './app.component';
import { TilesMapComponent } from "./mapview/tilesMap.component";

import { MenuComponent } from "./mapview/menu.component";
import { RulesComponent } from './rules.component';

import {FormComponent} from './account/form.component';


@NgModule({
    
    imports:      [ BrowserModule , FormsModule,
                    
                    RouterModule.forRoot([
                                          
                                          {path: 'rules', component : RulesComponent},
                                          ])
                                          ],
                                          
                                          declarations: [ AppComponent, RulesComponent, MenuComponent, FormComponent, TilesMapComponent ],
                                          
                                          
                                          
                                          bootstrap:    [ AppComponent ]


})

export class AppModule { }