	/**
	 * @namespace
	 * @name utils
	 * @since 0.0.1
	 * @ignore
	 */
	var	utils = {
		/**
		 * Simple inheritance
		 * @since 0.0.1
		 * @param {Function} parent Parent class
		 * @param {Function} child Class that inherits from parent
		 * @param {Object} proto Prototype object
		 * @ignore
		 */
		extend: function(parent, child, proto) {
			function F() {};
			F.prototype = parent.prototype;
			child.prototype = new F();
			child.prototype.constructor = child;
			utils.mixin(child.prototype, proto);
		},
		/**
		 * Objects merger
		 * @since 0.0.1
		 * @ignore
		 */
		mixin: function() {
			var	target = arguments[0],
				i, j;

			if ( arguments.length <= 1 )
				return target;

			for (i = 1; i < arguments.length; i++)
				for (j in arguments[i])
					if ( arguments[i].hasOwnProperty(j) )
						target[j] = arguments[i][j];
			return target;
		},
		/**
		 * Rewrite object property to technical name: __name
		 */
		reprop: function(obj, prop) {
			if ( obj[prop] ) {
				obj['__' + prop] = obj[prop];
				delete obj[prop];
			}
		},
		/**
		 * Render string content from simple templates with only variables
		 * @since 0.0.1
		 * @param {String} template Template
		 * @param {Object|Array} data Object with data
		 * @ignore
		 */
		tmpl: function(template, data) {
			var	out = '', i;
			data = data instanceof Array ? data : [data];

			for (i = 0; i < data.length; i++)
				out += template.replace(/\$\{(\w+)\}/ig, function($0, $1) {
					return data[i][$1] === undefined ? '' : data[i][$1];
				});

			return out;
		}
	};