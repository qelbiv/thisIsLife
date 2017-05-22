import { ObjectOnMap } from "./objectOnMap";
import { Tile } from "./tile";

export class MapOfTiles  { 
    
    size: number;
    content : Tile[][];


constructor(size: number) {
    var grille = new Array();
    for(var i = 0; i < size; i++){
        grille[i] = new Array();
        for( var j = 0; j < size; j++){
            grille[i][j] = new Tile();
        }
    }
    
    this.content= grille;
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
