import { Tile } from "./tile";

export class ObjectOnMap { 
    

reprodTime: number;
egg = false;
incubator = false;
    
moveable = true;

color: string;

posX: number;
posY: number;

isMoveable(): boolean {
    return this.moveable;
}

constructor(x: number, y: number, c: string) {
    this.posX = x;
    this.posY = y;
    this.color = c;
    this.reprodTime = 15;
}

resetAfterEgg(){
    this.egg = false;
    this.reprodTime = 15;
    this.incubator = false;
}

//move(){
//    var t = [-1,0,1];
//    var temp = (this.posX +t[Math.floor(Math.random() * t.length)])%this.size;
//    if(temp < 0){
//        this.posX = temp+this.size;
//        console.log("posX "+ this.posX);
//    }else 
//        this.posX = temp%this.size;
//    
//    temp = (this.posY +t[Math.floor(Math.random() * t.length)])%this.size;
//    if(temp < 0){
//        this.posY = temp+this.size;
//        console.log("posY "+ this.posY);
//    }else 
//        this.posY = temp%this.size;
//}

}
