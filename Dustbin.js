class Dustbin  {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.image=loadImage("dustbingreen.png")
      this.width = width;
      this.height = height;
      World.add(world, this.body)
    }
    display(){
      var pos = this.body.position;
      push();
      translate(pos.x,pos.y);
      image(this.image,0,0,this.width,this.height);
      pop();
    }
}