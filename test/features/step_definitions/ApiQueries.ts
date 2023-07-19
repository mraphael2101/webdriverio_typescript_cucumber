import {Given, Then, When} from '@wdio/cucumber-framework';
import { expect } from 'chai';
import * as supertest from 'supertest';
import * as fs from "fs/promises";

let request;
let response;

Given('I want to get a list of users', () => {
    request = supertest('https://reqres.in/api');
});

When('I make a GET request to the users endpoint', async () => {
    response = await request.get('/users');
    expect(response.status).to.equal(200);
});

Then('I should receive a list of users', async () => {
    expect(response.body.data).to.be.an('array');
    // Serialize the response into a file
    const data = JSON.stringify(response.body.data);
    const filename = `${process.cwd()}/data/api-res/reqres_response.json`;
    await fs.writeFile(filename, data, 'utf-8');
});
