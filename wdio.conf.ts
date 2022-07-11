import {Options} from "@wdio/types";

//export const config: Options.Testrunner = {
export const config: WebdriverIO.Config = {
    capabilities: [{
        browserName: 'chrome',
        maxInstances: 1,
    }],
    cucumberOpts: {
        require: ['./test/**/*.ts'],
        strict: false,
        dryRun: false,
    },
    specs: [
        './test/**/*.feature'
    ],
    services: ['chromedriver'],
    framework: 'cucumber',
    autoCompileOpts: {
        autoCompile: true,
        tsNodeOpts: {
            transpileOnly: true,
            project: 'tsconfig.json'
        }
    }
}
