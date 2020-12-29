class Chain {
    constructor(bodyA,bodyB,XoffSet,YoffSet){
        this.x = XoffSet;
        this.y = YoffSet;
        var options = {
            bodyA:bodyA,
            bodyB:bodyB,
            pointB:{x:XoffSet,y:YoffSet},
            length:300
           
        };
        this.constraint = Matter.Constraint.create(options)
        World.add(world ,this.constraint)
    }
    display(){
        var pos = this.constraint.bodyA.position;
        var pos2 = this.constraint.bodyB.position;
        stroke("white");
        line(pos.x,pos.y,pos2.x + this.x,pos2.y + this.y);
    }
}