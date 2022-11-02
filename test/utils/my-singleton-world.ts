import {World} from "@wdio/cucumber-framework";
import {IWorldOptions} from "@cucumber/cucumber";

export class Singleton extends World {

    private static instance: Singleton;
    private colour = "default"

    private constructor(options: IWorldOptions) {
        super(options);
    }

    public static getInstance(options: IWorldOptions): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton(options);
        }
        return Singleton.instance;
    }

    public async printColour() {
        console.log(this.colour)
    }
}
