class BaseClass{
    constructor(x,y,width,height,angle){
        var options ={
            restitution: 0.2,
            friction:1.0
        }
        
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        this.width = width
        this.height = height
        this.image=loadImage("base.png")
    }

    display(){

        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
       imageMode(CENTER);
       image(this.image,0,0,this.width,this.height);
        pop()
    }


}
