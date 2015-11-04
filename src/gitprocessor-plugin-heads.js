/* module to link heads to all parents */
module.exports = function(commits) {

	Object.keys(commits).forEach(function(hash) {
		var commit = commits[hash];
		commit.inHeads = []
	})

	Object.keys(commits).forEach(function(hash) {
		var commit = commits[hash];
		if(commit.refnames.length > 0) {
			assignHeads(commits, commit)
		}
	})
}

function assignHeads(commits, commit) {
	var parents1 = commit.parenthashes.slice(0) // copy array

	while(parents1.length > 0) {
		var newParents = []
		parents1.forEach(function(parentHash) {
			var p = commits[parentHash]	
			if(p != undefined) {
				p.inHeads.push(commit.commithash)
				// add all grandparents to the newparents
				newParents = newParents.concat(p.parenthashes)
			}
		});
		parents1 = newParents
	}
}
