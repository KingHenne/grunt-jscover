"use strict";

var jscover = require("jscover");

module.exports = function(grunt) {
	grunt.registerMultiTask("jscover", "Grunt task for jscoverage; which will parse your source code and generate an instrumented version allowing testing tools to generate code coverage reports", function() {
		var done = this.async();
		var options = this.options();

		var options = this.options();
		var exclude = options.exclude || [];

		this.files.forEach(function(file){
			file.src.forEach(function(source) {
				jscover(source, file.dest, options, function(error, output) {
					if (error) {
						grunt.log.error(output);
						done(false);
					}
					done();
				});
			});
		});
	});
};
