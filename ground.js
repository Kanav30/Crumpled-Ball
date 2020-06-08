class ground
{
constructor(x,y,width,height){
var options = {
isStatic: true    
}

this.gr = Bodies.rectangle(x,y,width,height,options);
this.width = width;
this.height=height;
World.add(world,this.gr);
}
display(){
var pos = this.gr.position;
rectMode(CENTER);
fill("yellow");
rect(pos.x,pos.y,this.width,this.height);
}
}