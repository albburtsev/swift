	/**
	 * Dynamic creating styles
	 * @namespace
	 * @name css
	 * @since 0.0.1
	 * @ignore
	 */
	var	css =
	/** @lends css */ 
	{
		prefix: 'swift-',
		source: {
			'layers-holder': {
				// empty
				},
				'tiles-holder': {
					'z-index': 10
					},
					'tiles-layer': {
						// empty
						},
				'vector-holder': {
					'z-index': 100
					},
				'marker-holder': {
					'z-index': 1000
					}
		},
		/**
		 * Create CSS text
		 * @since 0.0.1
		 * @returns {String} CSS string
		 */
		gen: function() {
			var	cssText = '',
				cssRules,
				rules, selector, prop;

			for (selector in this.source) {
				cssRules = [];
				rules = this.source[selector];
				for (prop in rules)
					cssRules.push(prop + ':' + rules[prop]);
				cssText += '.' + this.prefix + selector + '{' + cssRules.join(';') + ';}\n';
			}

			return cssText;
		},
		/**
		 * Return selector with prefix for selector key
		 * @since 0.0.1
		 * @returns {String} Selector
		 */
		get: function(selector) {
			return this.source[selector] ? this.prefix + selector : selector;
		},
		/**
		 * Added <style> HTMLElement with swift selectors
		 * @since 0.0.1
		 * @returns {Undefined}
		 */
		init: function() {
			var	parent = document.getElementsByTagName('head')[0] || document.body,
				style = dom.node('style', { type: 'text/css' }),
				rules = css.gen();

			if ( style.styleSheet )
				style.styleSheet.cssText = rules;
			else
				style.appendChild( document.createTextNode(rules) );

			parent.appendChild(style);
		}
	};

	css.init();