#!/usr/bin/env node

var git2json = require("../index.js")

git2json.default(function(commits) {
        console.log("%s", JSON.stringify(commits, null, 2));
})

