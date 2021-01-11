class Stone {
    constructor(x,y,radius) {
      var options = {
          isStatic:false,
        restitution:0,
        friction:1,
        density:1
        
        
        
        
        
        
      }
      
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
     this.image = loadImage("stone.png");


     
     
      World.add(world, this.body);
      
    }
    display(){
      { var stonepos=this.body.position;
         push()
          translate(stonepos.x, stonepos.y);
           fill(255,0,255)
            imageMode(CENTER); 
            ellipseMode(RADIUS);
             imageMode(RADIUS);
              image(this.image,0,0,this.radius,this.radius); 
              pop() }
      // ellipseMode(RADIUS);
      // imageMode(RADIUS);
      //image(this.image,this.body.position.x,this.body.position.y,this.radius,this.radius);

      
      
    }
  }