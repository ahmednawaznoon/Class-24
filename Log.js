class Log {
    constructor(x,y,angle,height,color,stroke,restitution) {
        this.body = Bodies.rectangle(x,y,20,height, {restitution: restitution})
        this.width = 20
        this.height = height
        this.color = color
        this.stroke = stroke
        Matter.Body.setAngle(this.body,angle)
        World.add(world, this.body)
    }
    display(){
        var position = this.body.position
        var angle = this.body.angle
        push();
        translate(position.x, position.y)
        rotate(angle);
        rectMode (CENTER)
        fill(this.color)
        stroke(this.stroke)
        rect(0, 0, this.width, this.height)
        pop();
    }
}

