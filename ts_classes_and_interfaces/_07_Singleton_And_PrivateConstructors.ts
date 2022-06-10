
/** The Singleton Design Pattern is a common solution that is 
  * used to enforce that only one instance of a class can be 
  * created at runtime */

class Demo4 {
    private static instance: Demo4;
    
    private constructor() {
    }

    public static getInstance() : object {
        if(Demo4.instance) {
            return this.instance;
        }
        else {
            this.instance = new Demo4();
            return this.instance;
        }
    }
}

const objRef1 = Demo4.getInstance();
const objRef2 = Demo4.getInstance();

// Both objects returned are the same
console.log(objRef1, objRef2);  