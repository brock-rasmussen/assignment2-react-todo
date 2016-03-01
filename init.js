'use strict';

require('babel-core/register'); // Start babel runtime parser
require('babel-polyfill'); // Provides extra es6 features like Promises and Array methods
require('./app'); // Requires our app