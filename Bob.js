  class Bob  {
    constructor(x,y)   {
        var options = {
            isStatic: false,
            restitution: 1.2,
            density: 0.9,
            friction: 0.5,
        }
        this.body = Bodies.circle(x,y,23,options);
    
        this.image = loadImage('paper.png');
        World.add(world,this.body);

    }

        display()   {
            push();
            var pos = this.body.position;
            translate(pos.x,pos.y);
            ellipseMode(CENTER);
            fill("green");
            ellipse(0,0,70,70);
            pop();
        }

}
