class CommonClass  {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0,
      }
     // this.image = loadImage("sprites/dustbin.png")
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;

      push ();
      rectMode(CENTER);
      fill("red");
    //  image(this.image,pos.x, pos.y , this.width, this.height);
      pop();
    }
  };