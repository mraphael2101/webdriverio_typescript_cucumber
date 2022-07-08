import {Options} from "@wdio/types";

export const config: Options.Testrunner = {
    capabilities: [{
        browserName: 'chrome',
        maxInstances: 1,
    }],
    cucumberOpts: {
        //require: ['./test/**/*.ts'],
        //strict: false,
        //dryRun: false,
    },
    specs: [
        './test/**/*.feature'
    ],
    framework: 'jasmine',
    jasmineOpts: {
        defaultTimeoutInterval: 5000,
        expectationResultHandler: function (passed, assertion) {},
    },
    autoCompileOpts: {
        autoCompile: true,
        tsNodeOpts: {
            transpileOnly: true,
            project: 'tsconfig.json'
        }
    }
}
