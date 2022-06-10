class Demo {
    constructor(col) {
        this.colour = col;
    }
    get colourName() {
        return this.colour;
    }
}
let myDemo = new Demo("Blue");
console.log(myDemo.colourName); // Access method like a normal property and not a method
