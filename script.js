class Rectangle {
    constructor(length, breadth){
        this.length = length
        this.breadth = breadth
    }
    calculateArea() {
        return this.length * this.breadth
    }
}
var rect = new Rectangle(5, 5)
console.log(rect.calculateArea())
