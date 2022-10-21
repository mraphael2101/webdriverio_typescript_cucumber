import { IWorldOptions } from "@cucumber/cucumber";
import { setWorldConstructor, World } from "@wdio/cucumber-framework";

export class MyWorldParams extends World {
    public count = 1
    public colour = ""

    constructor(options: IWorldOptions) {
        super(options)
    }

    async init(scenario: any) {
        /* boilerplate code to make class load asynchronously
           when constructor is called */
    }

    public async increment() {
        this.count += 1
    }

    public async printColour() {
        this.colour = "Green"
    }
}

