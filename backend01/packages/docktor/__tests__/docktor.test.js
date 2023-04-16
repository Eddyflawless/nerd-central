'use strict';

const docktor = require('..');
const assert = require('assert').strict;

assert.strictEqual(docktor(), 'Hello from docktor');
console.info('docktor tests passed');
