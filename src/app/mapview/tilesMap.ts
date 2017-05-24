
import { Tile } from "./tile";
import { ObjectOnMap } from "./objectOnMap";

export class TilesMap {
    
    size: number;
map: Tile[][];
objects: Array<ObjectOnMap>;

nbRed = 0;
nbGreen = 0;
nbBlue = 0;
nbOrange = 0;


constructor(size: number) {
    this.size = size;
    var grille = new Array();
    for(var i = 0; i < size; i++){
        grille[i] = new Array();
        for( var j = 0; j < size; j++){
            grille[i][j] = new Tile("#E6E2AF");
        }
    }
    this.map = grille;
    this.objects = new Array<ObjectOnMap>();
}

addObject(o: ObjectOnMap): void{
    this.objects.push(o);
    if(o.color == "red")
        this.nbRed+=1;
    if(o.color == "blue")
        this.nbBlue+=1;
    if(o.color == "green")
        this.nbGreen+=1;
    if(o.color == "orange")
        this.nbOrange+=1;
}

supprObject(coordX: number, coordY: number): void {
    this.map[coordX][coordY].supprObject();
}


cleanMap() {
    for(var i = 0; i < this.size; i++){
        for( var j = 0; j < this.size; j++){
            this.map[i][j].supprObject();
        }
    }
}

moveObjects() {
    for(var i = 0; i < this.objects.length; i++){
        if(!this.objects[i].incubator){
            this.checkNeighboursToSeed(this.objects[i]);
        }else
            this.eggMaking(this.objects[i]);
        this.move(this.objects[i]);
    }
}


checkCoords(x: number, y: number): boolean{
    if(x >= 0 && x < this.size  && y >= 0 && y < this.size){
        return true
    }else {
        return false;
    }
}



getObjectByCoord(x: number, y:number): number{
    var o = -1;
    if(this.checkCoords(x, y)){
        for(var i = 0; i < this.objects.length; i++){
            if(this.objects[i].posX == x && this.objects[i].posY == y){
                o = i;
                break;
            }
        }
    }
    return o;
}


getNeighbours(o: ObjectOnMap): Array<number>{
    var n = new Array<number>();
    var t = [-1, 0, 1];
    for(var i = 0; i < t.length; i++){
        for( var j = 0; j < t.length; j++){
            var tmp = this.getObjectByCoord(o.posX + t[i], o.posY + t[j]);
            if(tmp != -1 && t[i] !=0 && t[j] != 0)
                if(o.posX != this.objects[tmp].posX && o.posY != this.objects[tmp].posY)
                    n.push(tmp);
        }
    }
    console.log(n.length);
    return n;
}



getNextFreeTile(o: ObjectOnMap): Array<number>{
    var freeTile = new Array<number>();
    var t = [-1, 0, 1];
    for(var i = 0; i < t.length; i++){
        for( var j = 0; j < t.length; j++){
            var x = o.posX + t[i];
            var y = o.posY + t[j];
            if(this.getObjectByCoord(x, y) == -1 && this.checkCoords(x, y)){
                freeTile[0] = x;
                freeTile[1] = y;
                break;
            }
        }
    }
    
    return freeTile;
}

checkNeighboursToSeed(o: ObjectOnMap){
    var t = this.getNeighbours(o);
    for(var i = 0; i < t.length; i++){
        if(this.objects[t[i]].color === o.color && !this.objects[t[i]].incubator){
            console.log("bb");
            o.egg = true;
            o.incubator = true;
            this.objects[t[i]].incubator = true;
            break;
        }
    }
}

eggMaking(o: ObjectOnMap) {
    
    if(o.reprodTime == 0) {
        if(o.egg){
            var t = this.getNextFreeTile(o);
            if(t.length != 0){
                this.addObject(new ObjectOnMap(t[0], t[1], o.color));
                o.resetAfterEgg();
            }
        }else {
            o.resetAfterEgg();
        }
    }else{
        o.reprodTime -= 1;
    }
    
}  


move(o: ObjectOnMap) {
    if(!o.incubator){
        var t = [-1,0,1];
        var x = o.posX;
        var y = o.posY;
        var temp = (x +t[Math.floor(Math.random() * t.length)]);
        if(temp < 0){
            x = 0;
        }else if(temp > this.size - 1){
            x = this.size - 1;
        }else x = temp;
        
        temp = (y +t[Math.floor(Math.random() * t.length)]);
        if(temp < 0){
            y = 0;
        }else if(temp > this.size - 1){
            y = this.size - 1;
        }else y = temp;
        
        if(this.getObjectByCoord(x, y) == -1){
            o.posX=x;
            o.posY=y;
        }
    }
    
}


mapShot(){
    this.cleanMap();
    for(var i = 0; i < this.objects.length; i++){
        this.map[this.objects[i].posX][this.objects[i].posY].setObject(this.objects[i].color);
    }
}

compare(a: number, b:number) {
    if (a < b)
       return -1;
    if (a > b)
       return 1;
    return 0;
  }

getWinner(): string{
    var t = [this.nbRed, this.nbGreen, this.nbBlue, this.nbOrange];
    var index = 0;
    for(var i = 1; i < t.length; i++){
        if(t[i] > t[index])
            index =i;
    }
    
    if(index == 0)
        return "Rouges";
    if(index == 1)
        return "Verts";
    if(index == 2)
        return "Bleus";
    if(index == 3)
        return "Orange";
    
}
}