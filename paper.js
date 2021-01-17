class Paper {
    constructor(x,y,radius){
var options={
    isStatic:false,
    restitution:0.0,
    friction:2.0,
    density:1.2
}
this.body= Bodies.circle(x,y,radius/2,options);
this.radius= radius;
this.image=loadImage("paper.png");
World.add(world,this.body);

}


    
    display(){
     var pos = this.body.position;
        push();
    translate (pos.x,pos.y)
    fill("blue");
        imageMode(CENTER);
        image(this.image,0,10,70,70);
        
        pop();

    }
}