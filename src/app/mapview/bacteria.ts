import { ObjectOnMap } from "./objectOnMap";

export class Bacteria  implements ObjectOnMap{

    
    name: string;
    moveable = true;
    


    constructor(name: string) {
        this.name = name;
    }


}