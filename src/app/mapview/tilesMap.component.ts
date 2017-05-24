import { Component, OnInit } from '@angular/core';
import { MapOfTiles } from "./mapOfTiles";

@Component({
  moduleId: module.id, 
  selector: 'my-map',
  templateUrl: "./map.component.html"
})

export class MapComponent implements OnInit {

    map: MapOfTiles;

    constructor () {
    }
    
    ngOnInit() {
       this.map = new MapOfTiles(16);        
    }
    
}