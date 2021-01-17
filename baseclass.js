class Baseclass {

constructor(x,y,width,height,angle){

this.body = bodies.rectangle(x,y,width,height);
this.width=width;
this.height = height;
World .add(world,this.body);
this.image

}

display(){
var pos = this.body.position;
var angle = this.body.angle;
push();
translate(pos.x,pos.y);
rotate(angle);
rectMode(RADIUS);
rect(0,0,this.width,this.height);
pop();

}

}