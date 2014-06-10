"use strict";

module.exports = function(grunt) {

	grunt.loadTasks('./tasks');

	grunt.initConfig({
		jscover: {
			lib: {
				src: 'lib',
				dest: 'lib-cov'
			}
		}
	});
};
