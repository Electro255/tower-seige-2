class Block{

    constructor(x,y,width,height){
        var options = {

            restitution : 0.4,
            friction :0.0,
            //isStatic : true
        }
this.visibility = 255;
this.body = Bodies.Rectangle(x, y, width, height, options);
this.width = width;
this.height = height;
World.add(world,this.body);


display();{
  console.log(this.body.speed);
  if(this.body.speed < 3){
      var angle = this.body.angle;
      var pos = this.body.position;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      rectmode(CENTER);
      rect(0,0,this.width,this.height);
      pop();
    }else{
        World.remove(world, this.body);
        push();
        this.visibility = this.visibility - 5;
        pop();
    }
}
}

}