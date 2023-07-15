import {Given, Then, When, DataTable} from '@wdio/cucumber-framework';
import supertest from 'supertest';
// import app from '../src/app';
import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
chai.use(chaiAsPromised);

// const request = supertest(app);

Given('I have an API endpoint {string}', (url: string) => {
    // Do nothing here since we already have the URL in the request object.
});

When('I send a GET request to {string} endpoint', async (endpoint) => {
    // const res = await request(app).get(endpoint);
});

Then('I should receive a {int} OK status code', (statusCode) => {
    // expect(res.statusCode).toEqual(statusCode);
});

Then('the response should be an array of users', () => {
    // expect(Array.isArray(res.body)).toBeTruthy();
});

When('I send a POST request to {string} endpoint with the following details:', async (endpoint, dataTable) => {
    // const data = dataTable.hashes()[0];
    // const res = await request(app).post(endpoint).send(data);
});

Then('I should receive a {int} Created status code', (statusCode) => {
    // expect(res.statusCode).toEqual(statusCode);
});

Then('the response should contain the following details:', (dataTable) => {
    // const data = dataTable.hashes()[0];
    // expect(res.body).toMatchObject(data);
});
