import { ObjectOnMap } from "./objectOnMap";

export class Tile  {
    
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