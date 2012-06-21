	/**
	 * Create a new map instance
	 * @class
	 * @name Map
	 * @augments EventCover
	 * @since 0.0.1
	 * @param {HTMLElement|String} node HTML element for map container or id attribute string. **Required**
	 * @param {Object} [opts] Map options
	 * @param {Number} [opts.zoom] Map zoom [1..17], default - 10.
	 * @param {Point} [opts.center] Center of the map, default - swift.Point(37.617633, 55.755786).
	 * @param {Number} [opts.minZoom] The minimum possible zoom, default - 0.
	 * @param {Number} [opts.maxZoom] The maximum possible zoom, default - 18.
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
			.reprop(opts, 'prj')
			.mixin(this, {
				__layers: [],
				__prj: ProjectionDefault(),
				__rp: null,
				__vp: null,
				background: this.defaultBackground
			}, opts);

		// Strong validation for zoom and center options
		this.zoom( utils.or(opts.__zoom, this.defaultZoom) );
		this.center(opts.__center || this.defaultCenter);

		// Prepare node
		if ( typeof node === "string" )
			node = document.getElementById(node);

		if ( node.nodeType !== 1 )
			throw ErrorInvalidArguments();

		var	nodeStylePosition = utils.computed(node, 'position');
		dom.css(node, {
			background: this.background,
			position: nodeStylePosition === 'static' ? 'relative' : nodeStylePosition,
			overflow: 'hidden'
		});
		this._node = node;

		// Calculate map viewport
		this.vp(true);

		// Calculate map reference point
		this.rp(true);

		// Init layers
		this._layers = dom.node('div', '', {
			position: 'absolute',
			left: 0,
			top: 0
		});
		node.appendChild(this._layers);

		// Add default layer
		// @tofix
		this.add( TileLayer('http://api.tiles.mapbox.com/v3/mapbox.mapbox-streets/${z}/${x}/${y}.png') );

		// Init events handling

		// Init controls
		// this._controls; // node
	};

	utils.extend(EventCover, Map,
	/** @lends Map.prototype */
	{
		defaultBackground: '#eee',
		defaultZoom: 10,
		defaultCenter: Point(37.617633, 55.755786),
		minZoom: 0,
		maxZoom: 18,

		/**
		 * Add various objects on map
		 * @since 0.0.1
		 * @param {TileLayer} instance Instance for adding. **Required**
		 * @returns {Map} Returns map instance
		 */
		add: function(instance) {
			// Add TileLayer instance
			if ( instance instanceof TileLayer ) {
				this.__layers.push( instance );
				this._layers.appendChild(instance._node);
				instance.update({ map: this });
			// Invalid instance
			} else
				throw ErrorInvalidArguments();
			return this;
		},
		/**
		 * Set bounds of the map, or return bounds
		 * @since 0.0.1
		 * @param {Bounds} [bounds] Bounds object.
		 * @returns {Map} Returns map instance, if the parameter not passed
		 * @returns {Bounds} Returns bounds of the map, if the parameter passed
		 */
		bounds: function(bounds) {
			// todo
		},
		/**
		 * Set center of the map, or return center
		 * @since 0.0.1
		 * @param {Point} [center] Center of the map.
		 * @returns {Map} Returns map instance, if the parameter not passed
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
		 * Remove all layers from the map
		 * @since 0.0.1
		 * @returns {Map} Returns map instance
		 */
		empty: function() {
			var	layers = this.__layers, i;

			for (i = 0; i < layers.length; i++)
				layers[i].remove();
			layers.length = 0;

			return this;
		},
		/**
		 * Returns map projection
		 * @since 0.0.1
		 * @ignore
		 */
		prj: function() {
			return this.__prj;
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
		 * Returns map reference point
		 * @since 0.0.1
		 * @param {Boolean} [calc] If true, than reference point calculated again, default - false.
		 * @returns {Pixel} Returns Pixel instance for map reference point
		 * @ignore
		 */
		rp: function(calc) {
			if ( calc ) {
				this.__rp = this.prj().geoToPixel(
					this.center(),
					this.zoom()
				);
			};
			return this.__rp;
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
		 * @returns {Map} Returns map instance
		 */
		update: function(opts) {
			// todo
		},
		/**
		 * Returns map viewport
		 * @since 0.0.1
		 * @param {Boolean} [calc] If true, than viewport calculated again for map, default - false.
		 * @returns {Size} Returns Size instance for map viewport
		 * @ignore
		 */
		vp: function(calc) {
			if ( calc )
				this.__vp = Size(
					this._node.offsetWidth,
					this._node.offsetHeight
				);
			return this.__vp;
		},
		/**
		 * Set zoom of the map, or return zoom level
		 * @since 0.0.1
		 * @param {Number} [zoom] Zoom level of the map.
		 * @returns {Map} Returns map instance, if the parameter not passed
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
		 * @returns {Map} Returns map instance
		 */
		zoomIn: function() {
			// todo
		},
		/**
		 * Decreased zoom level
		 * @since 0.0.1
		 * @returns {Map} Returns map instance
		 */
		zoomOut: function() {
			// todo
		}
	});