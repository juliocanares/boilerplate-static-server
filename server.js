/**
 * Load dependencies
 * ====================================================
 */
var express = require('express');

var app = express();

/**
 * Setup express static path
 * ====================================================
 */
app.use(express.static('./public'));

