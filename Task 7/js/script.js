class FourSides {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    square() {
        return this.height * this.width;
    }
}

class Square extends FourSides{
    constructor(side) {
        super(side, side);
    }
}

class Rectangle extends FourSides{

}

class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    square() {
        return Math.PI * (this.radius * this.radius);
    }
}
function totalSquare(array) {
    return array[0].square() + array[1].square() + array[2].square();
}

const square = new Square(5);
const rectangle = new Rectangle(3, 6);
const circle = new Circle(4);
const arrayOfFigures = [square, rectangle, circle];

console.log(totalSquare(arrayOfFigures));