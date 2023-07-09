Pre-requisite) Install all required packages in the home directory
1) npm init wdio
2) Enter the below commands:
    -> local machine
    -> cucumber
    -> typescript compiler
    -> feature file dir = ./test/features/*.feature
    -> step defs = /test/features/step-definitions/*.ts
    -> allure reports
    -> chromedriver
    -> localhost
    -> press enter until the end of the wizard

3) Make sure that wdio.conf package reflects that the project property
indicates that tsconfig.json is in the root directory and not /test
        tsNodeOpts: {
            transpileOnly: true,
            project: 'tsconfig.json'
        }
4) Make sure tsconfig.json has the "module": "CommonJS" property appended

The hooks in wdio are as follows:
onPrepare
onWorkerStart
beforeSession
beforeFeature
beforeScenario
before
before/afterStep
---------------------------------------------------------------------------
To run the framework from the commandline type:
npx wdio wdio.conf.ts

npm run headless (maps to key value in package.json)
npm run debug (will run non-headless)

To debug the framework from the commandline type: