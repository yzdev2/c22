class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.Cannon = loadImage("assets/canon.png")
    this.base = loadImage("assets/cannonBase.png")
  }
  display(){

push()
translate(this.x,this.y)
rotate(this.angle)
image(this.Cannon,0,0,200,200)
pop()
image(this.base,50,30,250,200)
  }
}
