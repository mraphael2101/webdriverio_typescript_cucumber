var Demo = /** @class */ (function () {
    function Demo(col) {
        this.colour = col;
    }
    Object.defineProperty(Demo.prototype, "colourName", {
        get: function () {
            return this.colour;
        },
        set: function (value) {
            this.colour = value;
        },
        enumerable: false,
        configurable: true
    });
    return Demo;
}());
var myDemo = new Demo("Blue");
// Access method like a normal property for a getter, and not like a method in Java
console.log(myDemo.colourName);
// A setter is updated as follows in TS
myDemo.colourName = "Orange";
console.log(myDemo.colourName);
