module.exports = function(grunt) {
	var	config = {
		pkg: '<json:package.json>',
		meta: {
			banner:	'/*!\n' +
					' * Swift Map Library v<%= pkg.version %>\n' +
					' * https://github.com/albburtsev/swift\n' +
					' * \n' +
					' * Copyright 2012, Alexander Burtsev\n' +
					' * Licensed under the MIT\n' +
					' * Date: ' + (new Date).toString() + '\n' +
					' */'
		},
		concat: {
			source: {
				src: [
					'api/src/_header.js',
					'api/src/ns.utils.js',
					'api/src/ns.dom.js',
					'api/src/ns.detect.js',
					'api/src/class.error.js',
					'api/src/class.event-cover.js',
					'api/src/class.size.js',
					'api/src/class.point.js',
					'api/src/class.pixel.js',
					'api/src/class.tile.js',
					'api/src/class.projection.js',
					'api/src/class.layer.js',
					'api/src/class.layer.tile.js',
					'api/src/class.map.js',
					'api/src/_footer.js',
				],
				dest: 'api/swift.js',
				separator: '\n'
			},
			withbanner: {
				src: ['<banner:meta.banner>', 'api/swift.js'],
				dest: 'api/swift.js',
				separator: '\n'
			}
		},
		min: {
			dist: {
				src: ['<banner:meta.banner>', 'api/swift.js'],
				dest: 'api/swift.min.js'
			}
		},
		lint: {
			files: ['api/swift.js']
		},
		jshint: {
			options: {
				smarttabs: true
			}
		}
	};

	// Add concat tasks for examples
	(function () {
		var	srcPath = 'examples/src/',
			destPath = 'examples/',
			headerPath = srcPath + '_header.tpl',
			footerPath = srcPath + '_footer.tpl',
			i, example,
			re = /^_/,
			fs = require('fs'),
			list = fs.readdirSync(srcPath);

		for (i = 0; i < list.length; i++) {
			example = list[i];
			if ( example.match(re) )
				continue;

			config.concat[ example.replace('.', '_') ] = {
				src: [headerPath, srcPath + example, footerPath],
				dest: destPath + example.split('.')[0] + '.html',
				separator: '\n'
			};
		}
	})();

	// Add watched source
	config.watch = {
		files: ['<config:concat.source.src>'],
		tasks: 'concat'
	};

	grunt.initConfig(config);
	//grunt.registerTask('default', 'concat min');
	grunt.registerTask('default', 'concat min watch');
};