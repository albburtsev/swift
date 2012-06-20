	/**
	 * Namespace for DOM manipulation
	 * @namespace
	 * @name dom
	 * @since 0.0.1
	 */
	var	dom =
	/** @lends dom */ 
	{
		/**
		 * Add attributes for given node
		 * @since 0.0.1
		 * @param {HTMLElement} node **Required**
		 * @param {Object} [attr] Object with attributes
		 * @returns {Object} Returns namespace utils
		 */
		attr: function(node, attr) {
			utils.each(attr || {}, function(name, value) {
				if ( name.match(/^on/) ) {
					node[name] = value;
				} else {
					var	dattr = document.createAttribute(name);
					dattr.value = value;
					node.setAttributeNode(dattr);
				}
			});
			return this;
		},
		/**
		 * Add styles for given node
		 * @since 0.0.1
		 * @param {HTMLElement} node **Required**
		 * @param {Object} [styles] Object with styles
		 * @returns {Object} Returns namespace utils
		 */
		css: function(node, styles) {
			utils.each(styles || {}, function(prop, value) {
				node.style[prop] = value;
			});
			return this;
		},
		/**
		 * Create HTML-elements
		 * @since 0.0.1
		 * @param {String} [name] Element name, default - 'div'
		 * @param {Object} [attr] Object with attribites.
		 * @param {Object} [styles] Object with styles.
		 * @returns {HTMLElement} Element
		 */
		node: function(name, attr, styles) {
			var	node = document.createElement(name || 'div');
			this
				.attr(node, attr)
				.css(node, styles);
			return node;
		}
	};