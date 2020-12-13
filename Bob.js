class Bob{

    constructor(x,y,radius){
       var options = {
        'isStatic'  : false,
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
       }
        this.body = Bodies.circle(x,y,radius);
        this.radius = radius
        World.add(world,this.body);
    }

    display(){
        push()
        ellipseMode(RADIUS);
        translate(this.body.position.x,this.body.position.y)
        fill("red");
        ellipse(0,0,this.radius);
        pop()
    }

}
