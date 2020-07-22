class Paper{
    constructor(x,y,r)
    {
        var opt={
           
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body=Bodies.circle(x,y,r,opt)
        this.r=r
    }
    display()
    {
        var pos =this.body.position;
    push();
    translate(pos.x, pos.y);
    ellipseMode(RADIUS);
    ellipse(0,0,this.r,this.r)
    pop();
    }
}