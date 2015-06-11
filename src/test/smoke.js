
var git2json = require('../index.js')

var loggerCallback = function(text) {
	var commits = git2json.gitparser(text, git2json.defaultParserplugins)
	git2json.gitprocessor(commits, git2json.defaultProcessorplugins);

        console.log("commit: %s", JSON.stringify(commits, null, 2));
}

git2json.gitlogger.retrieve(30, loggerCallback)
