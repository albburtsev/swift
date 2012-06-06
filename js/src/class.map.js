	/**
	 * Create a new map instance
	 * @class
	 * @name Map
	 * @augments EventCover
	 * @since 0.0.1
	 * @param {HTMLElement} node HTML element for map placement. **Required**
	 * @param {Object} [opts] Map options
	 * @param {Number} [opts.zoom] Map zoom [1..17], default - 10.
	 * @param {Point} [opts.center] Center of the map, default - swift.Point(37.617633, 55.755786).
	 * @param {Number} [opts.minZoom] The minimum possible zoom, default - 1.
	 * @param {Number} [opts.maxZoom] The maximum possible zoom, default - 17.
	 * @param {String} [opts.background] Background color for map node, default -  '#eee'.
	 * @example
new swift.Map(document.body, {
	zoom: 11,
	center: new swift.Point(37.6, 55.8)
});
// or without "new"
swift.Map(document.body, {
	zoom: 11,
	center: swift.Point(37.6, 55.8)
});
	 */
	function Map(node, opts) {
		if ( !(this instanceof Map) )
			return new Map(node, opts);

		// Check the arguments
		opts = opts || {};
		node = node || {};

		utils
			.reprop(opts, 'center')
			.reprop(opts, 'zoom')
			.mixin(this, {
				layers: [],
				constrols: []
			}, opts);

		this.zoom(opts.__zoom || this.defaultZoom);
		this.center(opts.__center || this.defaultCenter);

		if ( node.nodeType !== 1 )
			throw ErrorInvalidArguments();

		// Prepare node
		var	nodeStylePosition = utils.computed(node, 'position');
		utils.css(node, {
			background: this.background,
			position: nodeStylePosition === 'static' ? 'relative' : nodeStylePosition
		});
		this._node = node;

		// Init layers
		this._layers = utils.node('div', '', '', {
			position: 'absolute',
			left: 0,
			top: 0
		});
		node.appendChild(this._layers);

		// Init events handling

		// Init controls
		// this._controls; // node
	};

	utils.extend(EventCover, Map,
	/** @lends Map.prototype */
	{
		background: '#eee',
		defaultZoom: 10,
		defaultCenter: Point(37.617633, 55.755786),
		minZoom: 1,
		maxZoom: 17,
		/**
		 * Set center of the map, or return center
		 * @since 0.0.1
		 * @param {Point} [center] Center of the map.
		 * @returns {Map} Returns map object, if the parameter not passed
		 * @returns {Point} Returns center of the map, if the parameter passed
		 */
		center: function(center) {
			if ( center === undefined )
				return this.__center;

			if ( !(center instanceof Point) )
				throw ErrorInvalidArguments();

			this.__center = center;
			return this;
		},
		/**
		 * Set bounds of the map, or return bounds
		 * @since 0.0.1
		 * @param {Bounds} [bounds] Bounds object.
		 * @returns {Map} Returns map object, if the parameter not passed
		 * @returns {Bounds} Returns bounds of the map, if the parameter passed
		 */
		bounds: function(bounds) {
			// todo
		},
		/**
		 * Remove map object and all DOM elements of map
		 * @since 0.0.1
		 * @returns {Boolean} Returns true, if removing was successfull
		 */
		remove: function() {
			// todo
		},
		/**
		 * Set zoom of the map, or return zoom level
		 * @since 0.0.1
		 * @param {Number} [zoom] Zoom level of the map.
		 * @returns {Map} Returns map object, if the parameter not passed
		 * @returns {Number} Returns number of zoom level, if the parameter passed
		 */
		zoom: function(zoom) {
			if ( zoom === undefined )
				return this.__zoom;

			zoom = parseInt(zoom);
			if ( isNaN(zoom) )
				throw ErrorInvalidArguments();

			zoom = Math.min(zoom, this.maxZoom);
			zoom = Math.max(zoom, this.minZoom);
			this.__zoom = zoom;
			return this;
		},
		/**
		 * Increased zoom level
		 * @since 0.0.1
		 * @returns {Map} Returns map object
		 */
		zoomIn: function() {
			// todo
		},
		/**
		 * Decreased zoom level
		 * @since 0.0.1
		 * @returns {Map} Returns map object
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
		 * @param {Object} [opts] Map options.
		 * @returns {Map} Returns map object
		 */
		update: function(opts) {
			// todo
		}
	});