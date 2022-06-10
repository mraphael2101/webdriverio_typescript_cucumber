
interface Recorder {
    name?: string;
    outputName?: string;
}

class Dictaphone implements Recorder {
    name?: string;
    
    // constructor(n: string = 'Some value')    // An alternative to ? (a wildcard) is to assign a default value like this 
    constructor(n?: string) {
        if(n) {
            this.name = n;
        }
    }
}

// There is no need to assign a value for outputName as it is optional and therefore does not need to be overriden
let dictaphone1 = new Dictaphone();
let dictaphone2 = new Dictaphone('Recording 1');