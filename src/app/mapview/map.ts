import { ObjectOnMap } from "./objectOnMap";
import { Tile } from "./tile";

export class Map  { 

    size: number;
    content : Tile[][];


    constructor(size: number) {
        this.content = new Tile[size][size];
        
}
    addObject(o: ObjectOnMap, coordX: number, coordY: number): void{
        if(this.content[coordX][coordY].occupied){
            this.content[coordX][coordY].setObject(o);
        }
    }
    
    supprObject(coordX: number, coordY: number): void {
       this.content[coordX][coordY].supprObject();
    }
    
    
    
    
}
