import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { TilesMapComponent } from "./mapview/tilesMap.component";


@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, TilesMapComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
