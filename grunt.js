module.exports = function(grunt) {
	grunt.initConfig({
		pkg: '<json:package.json>',
		meta: {
			banner: '/*! Swift Map v@<%= pkg.version %> */'
		},
		concat: {
			source: {
				src: [
					'js/src/_header.js',
					'js/src/class.event-cover.js',
					'js/src/class.map.js',
					'js/src/_footer.js',
				],
				dest: 'js/swift.js',
				separator: '\n'
			},
			withbanner: {
				src: ['<banner:meta.banner>', 'js/swift.js'],
				dest: 'js/swift.js',
				separator: '\n'
			}
		},
		min: {
			dist: {
				src: ['<banner:meta.banner>', 'js/swift.js'],
				dest: 'js/swift.min.js'
			}
		},
		lint: {
			files: ['js/swift.js']
		},
		jshint: {
			options: {
				smarttabs: true
			}
		},
		watch: {
			files: ['<config:concat.source.src>'],
			tasks: 'concat'
		}
	});

	grunt.registerTask('default', 'concat min watch');
};