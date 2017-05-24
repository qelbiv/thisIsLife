import { Component, OnInit } from '@angular/core';
import { ObjectOnMap } from "./objectOnMap";
import { Tile } from "./tile";
import { TilesMap } from "./tilesMap";

@Component({
    moduleId: module.id, 
    selector: 'my-map',
    templateUrl: "tilesMap.component.html"
})

export class TilesMapComponent implements OnInit {
    
    map: TilesMap;
    size = 32;
    winner = "";
    
ngOnInit(): void {
    this.map = new TilesMap(this.size);
    var o = new ObjectOnMap(0 , 0, "blue");
    var o1 = new ObjectOnMap(this.size-1 , this.size-1, "blue");
    
    var o2 = new ObjectOnMap(0, 1, "red");
    var o3 = new ObjectOnMap(this.size-1 , this.size-2, "red");
    
    var o4 = new ObjectOnMap(this.size-1 , 0, "green");
    var o5 = new ObjectOnMap(0 , this.size-1, "green");
    
    var o6 = new ObjectOnMap(this.size-2 , 0, "orange")
    var o7 = new ObjectOnMap(0 , this.size-2, "orange")
    
    
    this.map.addObject(o);
    this.map.addObject(o1);
    this.map.addObject(o2);
    this.map.addObject(o3);
    this.map.addObject(o4);
    this.map.addObject(o5);
    this.map.addObject(o6);
    this.map.addObject(o7);
}

sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async check() {
    
    var run = true;
    while(run){
        if(this.map.objects.length == this.size*this.size){
            run = false;
            this.winner = this.map.getWinner();
        }
        this.map.mapShot();
        this.map.moveObjects();
        await this.sleep(100);
    }
    
}

}