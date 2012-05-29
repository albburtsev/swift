	/**
	 * Create a new Map
	 * @constructor
	 * @since 0.0.1
	 * @param {HTMLElement} node HTML element for map placement. **Required**
	 * @param {Object} opts Map options. *Optional*
	 * @param {Number} opts.zoom Map zoom [1..17], default - 10. *Optional*
	 * @param {Point} opts.center Center of the map, default - swift.Point(37.617633, 55.755786). *Optional*
	 * @example
new swift.Map(document.body, {
	zoom: 10,
	center: new swift.Point(37.6, 55.8)
});
// or without "new"
swift.Map(document.body, {
	zoom: 10,
	center: swift.Point(37.6, 55.8)
});
	 */
	function Map(node, opts) {
		if ( !(this instanceof Map) )
			return new Map(node, opts);
		// todo
	};

	Map.prototype = {
		/**
		 * Set center of the map, or return center
		 * @since 0.0.1
		 * @param {Point} center Center of the map. *Optional*
		 * @returns {Map} Returned map object, if the parameter not passed
		 * @returns {Point} Returned center of the map, if the parameter passed
		 */
		center: function(center) {
			// todo
		},
		/**
		 * Set bounds of the map, or return bounds
		 * @since 0.0.1
		 * @param {Bounds} bounds Bounds object. *Optional*
		 * @returns {Map} Returned map object, if the parameter not passed
		 * @returns {Bounds} Returned bounds of the map, if the parameter passed
		 */
		bounds: function(bounds) {
			// todo
		},
		/**
		 * Remove map object and all DOM elements of map
		 * @since 0.0.1
		 * @returns {Boolean} Returned true, if removing was successfull
		 */
		remove: function() {
			// todo
		},
		/**
		 * Set zoom of the map, or return zoom level
		 * @since 0.0.1
		 * @param {Number} zoom Zoom level of the map. *Optional*
		 * @returns {Map} Returned map object, if the parameter not passed
		 * @returns {Number} Returned number of zoom level, if the parameter passed
		 */
		zoom: function(zoom) {
			// todo
		},
		/**
		 * Increased zoom level
		 * @since 0.0.1
		 * @returns {Map} Returned map object
		 */
		zoomIn: function() {
			// todo
		},
		/**
		 * Decreased zoom level
		 * @since 0.0.1
		 * @returns {Map} Returned map object
		 */
		zoomOut: function() {
			// todo
		},
		/**
		 * Short string for current state of the map
		 * @since 0.0.1
		 * @returns {String}
		 */
		toString: function() {
			return 'Swift Map';
			//return 'Swift Map, zoom: ${__zoom}, center: ${__center}';
		},
		/**
		 * Update map options
		 * @since 0.0.1
		 * @param {Object} opts Map options. *Optional*
		 * @returns {Map} Returned map object
		 */
		update: function(opts) {
			// todo
		}
	};