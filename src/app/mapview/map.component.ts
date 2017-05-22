import { ObjectOnMapComponent } from "./objectOnMap.component";

export class MapComponent  { 

    size: number;
    
    
    map : ObjectOnMapComponent[];

    constructor(private sizeMap: number) {
        this.map = new ObjectOnMapComponent[this.size*this.size];
}

    
    
    
}