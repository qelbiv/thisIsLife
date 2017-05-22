import { ObjectOnMap } from "./objectOnMap";
import { OnInit } from "@angular/core/core";

export class Tile  implements OnInit{
    
    
    
    
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }
    
    
    occupied = false;
    currentObject: ObjectOnMap;
    
    
    
    setObject(o: ObjectOnMap): void{
        this.currentObject = o;
        this.occupied = true;
    }
    
    supprObject(): void{
        
        this.currentObject = null;
        this.occupied = false;
    }
}