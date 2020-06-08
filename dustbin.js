class dustbin {
    constructor(x, y, width, height,angle) {
      var options = {
        isStatic: true
      }
      this.body = Bodies.rectangle(x, y,width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("dustbin.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     
      push();
      translate(pos.x,pos.y);
     
     imageMode(CENTER);
      fill("black");
      image(this.image,0,0, this.width, this.height);
      pop();
    }
  }
  