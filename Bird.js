class Bird {
    constructor(x,y) {
        this.body = Bodies.rectangle(x,y,70,70, {restitution: 1})
        this.width = 70
        this.height = 70

        World.add(world, this.body)
    }
    display(){
        var position = this.body.position
        position.x = mouseX
        position.y = mouseY
        var angle = this.body.angle
        push();
        translate(position.x, position.y)
        rotate(angle);
        rectMode (CENTER)
        fill("red")
        rect(0, 0, this.width, this.height)
        pop();
    }
}