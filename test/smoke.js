var gitlogger = require('gitlogger.js')
var gitparser= require('gitparser.js')

var loggerCallback = function(text) {
	gitparser.parse(text)
};



gitlogger.retrieve(100, loggerCallback);
