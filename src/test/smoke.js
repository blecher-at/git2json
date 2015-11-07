var git2json = require('../index.js');

var loggerCallback = function(text) {
	var commits = git2json.parser(text, git2json.defaultParserplugins)
	git2json.processor(commits, git2json.defaultProcessorplugins);

        console.log("commit: %s", JSON.stringify(commits, null, 2));
}

git2json.logger.retrieve(30, loggerCallback);
