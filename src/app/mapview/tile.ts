import { ObjectOnMap } from "./objectOnMap";
import { OnInit } from "@angular/core/core";

export class Tile  implements OnInit{
    
    
    
    
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }
    
    
    occupied: boolean;
    color: string;
    
    constructor(c: string) {
        this.occupied = false;
        this.color = c;
}
    
    isOccupied(): boolean {
        return this.occupied;
    }
    
    setObject(color: string): void {
        this.occupied = true;
        this.color = color;
    }
    
    supprObject(): void {
        this.occupied = false;
        this.color ="#E6E2AF";
    }
    
    getClass(): string {
        
        if(this.isOccupied()){
            return "tile occupied";
        }else
            return "tile unoccupied";
    }
}