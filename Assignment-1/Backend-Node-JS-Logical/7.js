class Shape{
    constructor(width,height){
        this.width=width
        this.height=height
    }
    
}

class Triangle extends Shape{
    constructor(width,height){
       super(width,height)
    }
    area(){
        return (1/2*(this.width*this.height))
    }
}

class Rectangle extends Shape{
    constructor(width,height){
       super(width,height)
    }
    area(){
        return (this.width*this.height)
    }
}

let shape= new Triangle(50,20)

console.log(shape.area())