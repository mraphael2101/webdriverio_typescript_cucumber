class Demo1 {
    private speed: number;
    static height: number = 5;

    static myStaticMethod() : void {
        console.log("You have just called a static method");

    }
}

// You can access a static method like this
const demo1 = Demo1.myStaticMethod;

// You can access a static variable like this
console.log(Demo1.height);
