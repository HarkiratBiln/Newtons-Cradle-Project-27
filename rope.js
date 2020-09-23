class Rope {

    constructor(body1, body2, offsetX, offsetY) {

     this.offsetX = offsetX
     this.offsetY = offsetY

       var options = {
        bodyA: body1,
        bodyB: body2,
        pointB:{x:this.offsetX, y:this.offsetY}

       }

        this.rope = Constraint.create(options);
        World.add(world, this.rope);

    }

    display() {

    var pointA = this.chain.bodyA.position;
    var pointB = this.chain.bodyB.position;

    strokeWeight(5);

    var Anchor1X = pointA.x;
    var Anchor1Y = pointA.y;

    var Anchor2X = pointB.x + this.offsetX;
    var Anchor2Y = pointB.y + this.offsetY;

    line(point1.x,point1.y,point2.x,point2.y);
    

    }

    
}