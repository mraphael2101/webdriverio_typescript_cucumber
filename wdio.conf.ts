// import {Options} from "@wdio/types";
// import allure from '@wdio/allure-reporter'
// import * as fs from 'fs'
// import * as process from 'process';
//
// let browser = process.env.BROWSER;
// let maxInstances = process.env.MAX_INSTANCE;
// let headless = process.env.HEADLESS;
// let env = process.env.ENV;
// let platform = process.env.PLATFORM;
//
// export const config: WebdriverIO.Config = {
//     hostname: 'localhost',
//     port: 9515,
//     path: '/',
//     /*capabilities: [{
//         browserName: 'chrome',
//         maxInstances: 2,
//         "goog:chromeOptions": {
//             args: headless?.toUpperCase() === 'Y' ? [
//                 '--headless',
//                 '--disable-dev-shm-usage',
//                 '--no-sandbox',
//                 '--window-size=1920,1080',
//                 '--disable-gpu'
//             ] : []
//         }
//     },
//     {
//         browserName: 'MicrosoftEdge',
//         maxInstances: 2,
//         "ms:edgeOptions": {}
//     }],*/
//     capabilities: [
//         {
//             browserName: process.env.BROWSER || 'chrome',
//             maxInstances: parseInt(process.env.MAX_INSTANCES || '1'),
//             'goog:chromeOptions': {
//                 args: (process.env.BROWSER === 'chrome' && process.env.HEADLESS === 'Y') ? [
//                    '--headless',
//                    '--disable-dev-shm-usage',
//                    '--no-sandbox',
//                    '--window-size=1920,1080',
//                    '--disable-gpu'
//                 ] : []
//             },
//             'moz:firefoxOptions': {
//                 args: (process.env.BROWSER === 'firefox' && process.env.HEADLESS === 'Y') ? [
//                     '--headless'
//                 ] : []
//             },
//             'ms:edgeOptions': {
//                 args: (process.env.BROWSER === 'MicrosoftEdge' && process.env.HEADLESS === 'Y') ? [
//                     '--headless'
//                 ] : []
//             },
//         },
//     ],
//     cucumberOpts: {
//         require: ['./test/features/step_definitions/*.ts'],
//         strict: false,
//         dryRun: false,
//     },
//     specs: [
//         './test/features/*/*.feature'
//     ],
//     baseUrl: 'http://www.google.com',
//     framework: 'cucumber',
//     services: ['chromedriver', 'edgedriver', 'geckodriver'],
//     waitforTimeout: 10000,
//     logLevel: "error",
//     reporters: ['spec', ['allure',
//         {
//             outputDir: 'allure-results',
//             disableWebdriverStepReporting: true,
//             useCucumberStepReporter: true
//         }]
//     ],
//     autoCompileOpts: {
//         autoCompile: true,
//         tsNodeOpts: {
//             transpileOnly: true,
//             project: 'tsconfig.json'
//         }
//     },
//     onPrepare: function (config, capabilities) {
//         if (process.env.ENV === "QA" && fs.existsSync("./allure-results")) {
//             console.log("Erasing the Allure-Result files");
//             fs.rmSync("./allure-results", {recursive: true, force: true});
//         }
//     },
//     afterScenario: function (world, result, context) {
//         allure.addDescription("Description goes here!!!", "Overview");
//     }
// }


import type { Options } from '@wdio/types';
import allure from '@wdio/allure-reporter';
import { join } from 'path';
import { execSync, ChildProcess } from 'child_process';
import findProcess from 'find-process';
import * as fs from 'fs';
import * as process from 'process';

let appiumProcess: ChildProcess;

let browser = process.env.BROWSER;
let maxInstances = process.env.MAX_INSTANCE;
let headless = process.env.HEADLESS;
let env = process.env.ENV;
let platform = process.env.PLATFORM || 'web';


const getCapabilities = () => {
  if (platform === 'android') {
    return [{
      platformName: 'Android',
      'appium:deviceName': 'Pixel 8',
      'appium:platformVersion': '14.0',
      'appium:automationName': 'UiAutomator2',
      'appium:newCommandTimeout': 240,
      'appium:app': join(process.cwd(), 'app/ApiDemos-debug.apk'),
    }];
  } else if (platform === 'ios') {
    return [{
      platformName: 'ios',
      'appium:deviceName': 'iPhone 12',
      'appium:platformVersion': '17.5',
      'appium:automationName': 'XCUITest',
      'appium:newCommandTimeout': 240,
      'appium:app': join(process.cwd(), 'app/ApiDemos-debug.apk'),
    }];
  } else if (platform === 'web' && browser === 'chrome') {
    return [{
      maxInstances: parseInt(maxInstances, 10) || 1,
      browserName: 'chrome',
      acceptInsecureCerts: true,
      'goog:chromeOptions': {
        args: process.env.HEADLESS === 'Y' ? ['--headless', '--disable-gpu'] : [],
      },
    }];
  } else if (platform === 'web' && browser === 'firefox') {
    return [{
      maxInstances: parseInt(maxInstances, 10) || 1,
      browserName: 'firefox',
      acceptInsecureCerts: true,
      'moz:firefoxOptions': {
        args: (process.env.HEADLESS === 'Y') ? ['--headless'] : [],
      },
    }];
  }
};

const getServices = (): Array<string | [string, Record<string, unknown>]> => {
  if (platform !== 'web') {
    return [
      ['appium', {
        args: {
          address: '127.0.0.1',
          port: 4723,
        },
        logPath: './log',
        command: 'appium',
      }],
    ];
  } else {
    return ['chromedriver', 'edgedriver', 'geckodriver'];
  }
};

export const config: Options.Testrunner = {
  runner: 'local',
  // hostname: 'localhost',
  // port: 9515,
  path: '/',
  autoCompileOpts: {
    autoCompile: true,
    tsNodeOpts: {
      transpileOnly: true,
      project: 'tsconfig.json',
    },
  },
  capabilities: getCapabilities(),

  cucumberOpts: {
    require: [
      './src/test/web/steps/**/*.ts',
      './src/test/api/steps/**/*.ts',
      './src/test/mobile/steps/**/*.ts',
    ],
    strict: false,
    dryRun: false,
    backtrace: false,
    requireModule: [],
    failFast: false,
    snippets: true,
    source: true,
    timeout: 60000,
    ignoreUndefinedDefinitions: false,
  },
  specs: [
    './src/test/web/features/**/*.feature',
    './src/test/api/features/**/*.feature',
    './src/test/mobile/features/**/*.feature',
  ],
  baseUrl: 'https://www.google.com',
  framework: 'cucumber',
  services: getServices(),
  waitforTimeout: 10000,
  logLevel: 'error',
  reporters: ['spec', ['allure', {
    outputDir: './reports/allure-results',
    disableWebdriverStepReporting: true,
    useCucumberStepReporter: true,
  }]],

}