class Rectangle {
    constructor(length, breadth){
        this.length = length
        this.breadth = breadth
        this.calculateArea = function(){
            return this.length * this.breadth
        }
    }
}

console.log(typeof Rectangle)
