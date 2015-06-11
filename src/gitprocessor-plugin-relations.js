/* module to link commits to each other */

module.exports = function(commits) {
	Object.keys(commits).forEach(function(hash) {
		var commit = commits[hash];
		commit.parents = [];
		commit.children = [];
	});

	Object.keys(commits).forEach(function(hash) {
		var commit = commits[hash];
		commit.parenthashes.forEach(function(hash) {
			var parentCommit = commits[hash];
			if(parentCommit != undefined) {
//				commit.parents.push(parentCommit);
				parentCommit.children.push(hash);		
			}
		});
	});
}
