var gitlogger = require('gitlogger.js')
var gitparser= require('gitparser.js')
var gitprocessor= require('gitprocessor.js')

var gitparserplugins = [ require('gitparser-plugin-refnames.js'), require('gitparser-plugin-parents.js') ]
var gitprocessorplugins = [ 
	require('gitprocessor-plugin-relations.js'), 
	require('gitparser-plugin-heads.js'), 
	require('gitparser-plugin-index.js') ]

var loggerCallback = function(text) {
	var commits = gitparser(text, gitparserplugins)
	gitprocessor(commits, gitprocessorplugins);

        console.log("commit: %s", JSON.stringify(commits, null, 2));
}

gitlogger.retrieve(30, loggerCallback)
