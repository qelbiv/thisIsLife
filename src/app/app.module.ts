import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { MapComponent } from "./mapview/map.component";

import {FormComponent} from './account/form.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, MapComponent, FormComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
