import { ObjectOnMapComponent } from "./mapview/objectOnMap.component";

export class BacteriaComponent  implements ObjectOnMapComponent{

    
    name: string;
    moveable = true;


    constructor(private nameb: string) {
        this.name = nameb;
    }


}