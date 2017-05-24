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
                                          {path: '', redirectTo: '/mapGame' , pathMatch: 'full'},
//                                          {path: 'rules', redirectTo : '/rules', pathMatch: 'full'},
                                          {path: 'rules', component : RulesComponent},
                                          {path: 'newAccount', component : FormComponent},
                                          {path: 'mapGame', component : TilesMapComponent}
                                          ])
                                          ],
                                          
                                          declarations: [ AppComponent, RulesComponent, MenuComponent, FormComponent, TilesMapComponent ],
                                          
                                          
                                          
                                          bootstrap:    [ AppComponent ]


})

export class AppModule { }