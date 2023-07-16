The difference between import supertest as supertest and import * as supertest from 'supertest' is that
the former imports the supertest module as an alias named supertest, while the latter imports all the
exports from the supertest module into a single object named supertest.

Here’s an example:

import supertest from 'supertest'; // import all exports as an object
import { supertest as test } from 'supertest'; // import as an alias

const request = supertest('https://example.com');
const testRequest = test('https://example.com');

In this code, the first line imports all the exports from the supertest module into a single object named supertest.
The second line imports the supertest module as an alias named test.

You can use either syntax to import the supertest module, depending on your preference.
