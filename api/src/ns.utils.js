	/**
	 * Namespace with useful utilites
	 * @namespace
	 * @name utils
	 * @since 0.0.1
	 */
	var	utils =
	/** @lends utils */ 
	{
		/**
		 * Delayed call for callback
		 * @since 0.0.1
		 * @param {Function} callback Function for delayed call. **Required**
		 * @param {Object} [context] Object to which the context of the function should be set.
		 * @returns {Object} Returns namespace utils
		 */
		async: function(callback, context) {
			setTimeout(function() {
				callback.call(context || window);
			}, 1);
			return this;
		},
		/**
		 * Get value of computed style for given node
		 * @since 0.0.1
		 * @param {HTMLElement} node **Required**
		 * @param {String} prop Style property. **Required**
		 * @returns {String} Value of computed style
		 */
		computed: function(node, prop) {
			if ( !window.getComputedStyle ) {
				/** @ignore */
				var gcs = function(el) {
					var	re = /(\-([a-z]){1})/g;
					this.el = el;
					/** @ignore */
					this.getPropertyValue = function(prop) {
						if ( prop == 'float' )
							prop = 'styleFloat';
						if ( re.test(prop) )
							prop = prop.replace(re, function($0, $1, $2) {
								return $2.toUpperCase();
							});
						return el.currentStyle[prop] ? el.currentStyle[prop] : null;
					};
					return this;
				};
				window.getComputedStyle = gcs;
			}
			return getComputedStyle(node).getPropertyValue(prop);
		},
		/**
		 * Objects iterator
		 * @since 0.0.1
		 * @param {Object} [obj]
		 * @param {Function} [callback]
		 * @returns {Object} Returns namespace utils
		 */
		each: function(obj, callback) {
			obj = obj || {};
			callback = callback || empty;
			for (var i in obj)
				if ( obj.hasOwnProperty(i) )
					callback.call(this, i, obj[i]);
		},
		/**
		 * Simple inheritance
		 * @since 0.0.1
		 * @param {Function} parent Parent class. **Required**
		 * @param {Function} child Class that inherits from parent. **Required**
		 * @param {Object} [proto] Prototype object
		 * @returns {Object} Returns namespace utils
		 */
		extend: function(parent, child, proto) {
			function F() {};
			F.prototype = parent.prototype;
			child.prototype = new F();
			child.prototype.constructor = child;
			this.mixin(child.prototype, proto);
			return this;
		},
		/**
		 * Objects merger
		 * @since 0.0.1
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
		 * Find and return first not undefined argument
		 * @since 0.0.1
		 */
		or: function() {
			for (var i = 0; i < arguments.length; i++)
				if ( arguments[i] !== undefined )
					return arguments[i];
		},
		/**
		 * Rewrite object property to technical name: __name
		 * @since 0.0.1
		 * @param {Object} obj **Required**
		 * @param {String} prop Property name. **Required**
		 * @returns {Object} Returns namespace utils
		 */
		reprop: function(obj, prop) {
			if ( obj[prop] !== undefined ) {
				obj['__' + prop] = obj[prop];
				delete obj[prop];
			}
			return this;
		},
		/**
		 * Render string content from simple templates with only variables
		 * @since 0.0.1
		 * @param {String} template Template. **Required**
		 * @param {Object|Array} data Object with data. **Required**
		 * @returns {String} Rendered string
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