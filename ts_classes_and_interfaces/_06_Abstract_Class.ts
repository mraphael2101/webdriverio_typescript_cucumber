
/** If you want to ensure that a method is available for all classes based on
 *  a specific base class then use a abstract class with a methog signature 
 *  or method body */ 

abstract class Animal {
    abstract eat() : void;
}


class Cow extends Animal {
    eat(): void {
        console.log("Abstract method implementation")
    }
}

new Cow().eat();