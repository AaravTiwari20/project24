class Dustbin {
constructor(x, y,height,angle) {
var options = {
'isStatic':false,
'restitution':0.3,
'friction':0.5,
'density':1.2
}
this.body = Bodies.rectangle(x, y,20, height, options);
this.width = 20;
this.height = height;
Matter.Body.setAngle(this.body,angle);
World.add(world, this.body);
}
}
