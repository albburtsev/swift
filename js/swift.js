/*! Swift Map v@0.0.1 */

(function(window, document, undefined) {
	'use strict';

	function empty() {
		// Do nothing
	};
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
		 * Get value of computed style for given node
		 * @since 0.0.1
		 * @param {HTMLElement} node **Required**
		 * @param {String} prop Style property. **Required**
		 * @returns {String} Value of computed style
		 */
		computed: function(node, prop) {
			if ( !window.getComputedStyle )
				window.getComputedStyle = function(el) {
					var	re = /(\-([a-z]){1})/g;
					this.el = el;
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
			return getComputedStyle(node).getPropertyValue(prop);
		},
		/**
		 * Add styles for given node
		 * @since 0.0.1
		 * @param {HTMLElement} node **Required**
		 * @param {Object} [styles] Object with styles
		 * @returns {Object} Returns namespace utils
		 */
		css: function(node, styles) {
			this.each(styles || {}, function(prop, value) {
				node.style[prop] = value;
			});
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
		 * Create HTML-elements
		 * @since 0.0.1
		 * @param {String} [name] Element name, default - 'div'
		 * @param {String} [html] Element html content.
		 * @param {Object} [attr] Object with attribites.
		 * @param {Object} [styles] Object with styles.
		 * @returns {HTMLElement} Element
		 */
		node: function(name, html, attr, styles) {
			var	node = document.createElement(name || 'div');
			node.innerHTML = html || '';
			this
				//.attr(node, attr)
				.css(node, styles);
			return node;
		},
		/**
		 * Rewrite object property to technical name: __name
		 * @since 0.0.1
		 * @param {Object} obj **Required**
		 * @param {String} prop Property name. **Required**
		 * @returns {Object} Returns namespace utils
		 */
		reprop: function(obj, prop) {
			if ( obj[prop] ) {
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
	/**
	 * Handle errors when given invalid arguments
	 * @class
	 * @name ErrorInvalidArguments
	 * @since 0.0.1
	 * @ignore
	 */
	function ErrorInvalidArguments() {
		if ( !(this instanceof ErrorInvalidArguments) )
			return new ErrorInvalidArguments();

		this.message = 'Invalid arguments';
	};

	ErrorInvalidArguments.prototype = new Error;
	/**
	 * Event handling abstract class
	 * @class
	 * @name EventCover
	 * @since 0.0.1
	 * @example
// Class Map inherits from EventCover all methods
var	map = new swift.Map(document.body);
map.on('click', function(e) {
	// Geographic coordinates
	console.log( this.wgs(e) ); 
});
	 */
	function EventCover() {
		// Do nothing, abstract class
	};

	EventCover.prototype = {
		/**
		 * Add event handler
		 * @since 0.0.1
		 * @param {String} evetns Event string or some space-separated evets. **Required**
		 * @param {Function} handler Callback. **Required**
		 * @param {Object} [opts] Handling options.
		 * @param {Boolean} [opts.one] The handler executed one time and removed, default - false.
		 * @returns {Context object} Returns object
		 */
		on: function(evetns, handler, opts) {
			// todo
		},
		/**
		 * Remove event handler
		 * @since 0.0.1
		 * @param {String} [evetns] Event string or some space-separated evets. If parameter passed, it removed all handlers of all events.
		 * @param {Function} [handler] Callback, which will be removed.
		 * @returns {Context object} Returns object
		 */
		off: function(evetns, handler) {
			// todo
		},
		/**
		 * Transfrom pixel coordinates of event to geographic coordinates
		 * @since 0.0.1
		 * @param {String} e Event object. **Required**
		 * @returns {Point} Point with geographic coordinates
		 */
		geo: function() {
			// todo
		}
	};
	/**
	 * Create instance for any areas with width and height
	 * @class
	 * @name Size
	 * @since 0.0.1
	 * @param {Number} width Width of area. **Required**
	 * @param {Number} height Height of area. **Required**
	 */
	function Size(width, height) {
		if ( !(this instanceof Size) )
			return new Size(width, height);

		if ( width === undefined || height === undefined )
			throw ErrorInvalidArguments();

		this.width(width);
		this.height(height);
	};

	Size.prototype = {
		/**
		 * Set a new width, or return current
		 * @since 0.0.1
		 * @param {Number} [width] New width.
		 * @returns {Size} Returns size object, if the parameter not passed.
		 * @returns {Number} Returns width, if the parameter passed.
		 */
		width: function(width) {
			if ( width === undefined )
				return this.__w;

			this.__w = this.valid(width);
			return this;
		},
		/**
		 * Set a new height, or return current
		 * @since 0.0.1
		 * @param {Number} [height] New height.
		 * @returns {Size} Returns size object, if the parameter not passed.
		 * @returns {Number} Returns height, if the parameter passed.
		 */
		height: function(height) {
			if ( height === undefined )
				return this.__h;

			this.__h = this.valid(height);
			return this;
		},
		/**
		 * Validate value of width or height
		 * @since 0.0.1
		 * @param {Number} val Value for validation. **Required**
		 * @returns {Number}
		 * @ignore
		 */
		valid: function(val) {
			val = parseFloat(val);
			if ( isNaN(val) )
				throw ErrorInvalidArguments();
			return val;
		}
	};
	/**
	 * Create a new point instance with geographic coordinates
	 * @class
	 * @name Point
	 * @since 0.0.1
	 * @param {Number} lon Value of the longitude **Required**
	 * @param {Number} lat Value of the latitude **Required**
	 * @example
```
new Point(37.6, 55.8);
// or
Point(37.6, 55.8);
```
	 */
	function Point(lon, lat) {
		if ( !(this instanceof Point) )
			return new Point(lon, lat);

		if ( lon === undefined || lat === undefined )
			throw ErrorInvalidArguments();

		this.lon(lon);
		this.lat(lat);
	};

	Point.prototype = {
		accuracy: 6,
		minLat: -90,
		maxLat: 90,
		minLon: -180,
		maxLon: 180,
		fullTurn: 360,
		/**
		 * Measure a distance between current point and point from argument
		 * @since 0.0.1
		 * @param {Point} point Second point for measuring. **Required**
		 * @returns {Number} Returns distance in meters.
		 * @ignore
		 */
		distance: function(point) {
			
		},
		/**
		 * Set a new longitude, or return current longitude
		 * @since 0.0.1
		 * @param {Number} [lon] Value of the longitude.
		 * @returns {Point} Returns point object, if the parameter not passed.
		 * @returns {Number} Returns value of the longitude, if the parameter passed.
		 */
		lon: function(lon) {
			if ( lon === undefined )
				return this.__lon;

			lon = this.valid(lon);
			lon = lon % this.fullTurn;
			lon = lon < this.minLon
				? lon % this.minLon + this.maxLon
				: lon > this.maxLon
					? lon % this.maxLon + this.minLon
					: lon
			;
			this.__lon = lon;

			return this;
		},
		/**
		 * Set a new latitude, or return current latitude
		 * @since 0.0.1
		 * @param {Number} [lat] Value of the latitude.
		 * @returns {Point} Returns point object, if the parameter not passed.
		 * @returns {Number} Returns value of the latitude, if the parameter passed.
		 */
		lat: function(lat) {
			if ( lat === undefined )
				return this.__lat;

			lat = this.valid(lat);
			lat = Math.min(this.maxLat, lat);
			lat = Math.max(this.minLat, lat);
			this.__lat = lat;

			return this;
		},
		/**
		 * Return a string view of geo point
		 * @since 0.0.1
		 * @returns {String}
		 */
		toString: function() {
			return utils.tmpl('${__lon}°, ${__lat}°', this);
		},
		/**
		 * Validate value of latitude or longitude
		 * @since 0.0.1
		 * @param {Number} val Value for validation. **Required**
		 * @returns {Number}
		 * @ignore
		 */
		valid: function(val) {
			val = parseFloat(val);
			if ( isNaN(val) )
				throw ErrorInvalidArguments();
			return parseFloat( val.toFixed( this.accuracy ) );
		}
	};
	/**
	 * Create a new instance for pixel point
	 * @class
	 * @name Pixel
	 * @since 0.0.1
	 * @param {Number} x Horizontal coordinate. **Required**
	 * @param {Number} y Vertical coordinate. **Required**
	 */
	function Pixel(x, y) {
		if ( !(this instanceof Pixel) )
			return new Pixel(x, y);

		if ( x === undefined || y === undefined )
			throw ErrorInvalidArguments();

		this.x(x);
		this.y(y);
	};

	Pixel.prototype = {
		/**
		 * Set a new horizontal coordinate, or return current
		 * @since 0.0.1
		 * @param {Number} [x] New horizontal coordinate.
		 * @returns {Pixel} Returns pixel object, if the parameter not passed.
		 * @returns {Number} Returns value of the horizontal coordinate, if the parameter passed.
		 */
		x: function(x) {
			if ( x === undefined )
				return this.__x;

			this.__x = this.valid(x);
			return this;
		},
		/**
		 * Set a new vertical coordinate, or return current
		 * @since 0.0.1
		 * @param {Number} [y] New vertical coordinate.
		 * @returns {Pixel} Returns pixel object, if the parameter not passed.
		 * @returns {Number} Returns value of the vertical coordinate, if the parameter passed.
		 */
		y: function(y) {
			if ( y === undefined )
				return this.__y;

			this.__y = this.valid(y);
			return this;
		},
		/**
		 * Validate value of latitude or longitude
		 * @since 0.0.1
		 * @param {Number} val Value for validation. **Required**
		 * @returns {Number}
		 * @ignore
		 */
		valid: function(val) {
			val = parseInt(val, 10);
			if ( isNaN(val) )
				throw ErrorInvalidArguments();
			return val;
		}
	};
	/**
	 * Create instance for calculation coordinates in WGS84 system for spherical mercator projection
	 * @class
	 * @name ProjectionDefault
	 * @since 0.0.1
	 * @param {Object} [opts] Projection options.
	 * @param {Size} [opts.tileSize] Base tile size for projection.
	 * @see [Algorithms for spherical mercator](http://wiki.openstreetmap.org/wiki/Mercator#Spherical_Mercator)
	 * @see [Spherical Mercator projection](http://docs.openlayers.org/library/spherical_mercator.html)
	 */
	function ProjectionDefault(opts) {
		if ( !(this instanceof ProjectionDefault) )
			return new ProjectionDefault();

		// Sphere parameters
		this.radius = 6378137;
		this.halfEquator = Math.PI * this.radius;
		this.equator = 2 * this.halfEquator;
		this.tileSize = Size(256, 256);

		utils.extend(this, opts || {});
	};

	ProjectionDefault.prototype = {
		/**
		 * Convert geographic coordinates to pixel coordinates
		 * @since 0.0.1
		 * @param {Point} point Geographic coordinates. **Required**
		 * @param {Number} zoom Zoom level for convertation. **Required**
		 * @param {Size} [tileSize] Size of tile.
		 * @returns {Pixel} Pixel coordinates.
		 */
		geoToPixel: function(point, zoom, tileSize) {
			zoom = parseInt(zoom);
			if ( !(point instanceof Point) || isNaN(zoom) )
				throw ErrorInvalidArguments();

			var	mercX = this.degToRad( point.lon() ) * this.radius,
				mercY = Math.log(Math.tan(Math.PI / 4 + this.degToRad(point.lat()) / 2.0)) * this.radius,
				resolution = this.resolution(zoom);

			return Pixel(
				(mercX + this.halfEquator) / resolution.width(),
				(mercY + this.halfEquator) / resolution.height()
			);
		},
		/**
		 * Converts the number in degrees to the radian equivalent
		 * @since 0.0.1
		 * @param {Number} ang Degrees value
		 * @returns {Number} Radian value
		 * @ignore
		 */
		degToRad: function(deg) {
			return deg * Math.PI / 180;
		},
		/**
		 * Converts the radian number to the equivalent number in degrees
		 * @since 0.0.1
		 * @param {Number} ang Radian value
		 * @returns {Number} Degrees value
		 * @ignore
		 */
		radToDeg: function(rad) {
			return rad * 180 / Math.PI;
		},
		/**
		 * Convert pixel coordinates to geographic coordinates
		 * @since 0.0.1
		 * @param {Pixel} pixel Pixel coordinates. **Required**
		 * @param {Number} zoom Zoom level for convertation. **Required**
		 * @returns {Point} Geographic coordinates.
		 */
		pixelToGeo: function(pixel, zoom) {
			zoom = parseInt(zoom);
			if ( !(pixel instanceof Pixel) || isNaN(zoom) )
				throw ErrorInvalidArguments();

			var	resolution = this.resolution(zoom),
				mercX = pixel.x() * resolution.width() - this.halfEquator,
				mercY = pixel.y() * resolution.height() - this.halfEquator;

			return Point(
				this.radToDeg(mercX / this.radius),
				this.radToDeg(2 * Math.atan(Math.exp(mercY / this.radius)) - Math.PI / 2)
			);
		},
		/**
		 * Convert pixel coordinates to tile coordinates
		 * @since 0.0.1
		 * @param {Pixel} pixel Pixel coordinates. **Required**
		 * @param {Number} zoom Zoom level for convertation. **Required**
		 * @param {Size} [tileSize] Size of tile.
		 * @returns {TilePixel} Tile index and pixel coordinates in tile
		 */
		pixelToTile: function(pixel, zoom, tileSize) {
			// todo
		},
		/**
		 * Calculate pixel resolution for given zoom level and tile size
		 * @since 0.0.1
		 * @param {Number} zoom Zoom level. **Required**
		 * @param {Size} [tileSize] Size of tile.
		 * @returns {Size} Size of pixel resolution
		 * @ignore
		 */
		resolution: function(zoom, tileSize) {
			var	tiles = Math.pow(2, zoom), // Count of tiles on one way for given zoom level
				size = tileSize || this.tileSize;

			return Size(
				this.equator / size.width() / tiles,
				this.equator / size.height() / tiles
			);
		}
	};
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

	/**
	 * @namespace
	 */
	var swift = {
		// Classes
		ProjectionDefault: ProjectionDefault,
		EventCover: EventCover,
		Size: Size,
		Point: Point,
		Pixel: Pixel,
		Map: Map,

		// Namespaces
		utils: utils,

		/**
		 * Adds new namespace
		 * @param {Object|String} Object for namespace or string, which stands name of global variable
		 * @returns {Object} Return namespace
		 * @example
swift.ns(window);
new Map(document.body);
// or
swift.ns('sweet');
new sweet.Map(document.body);
		 */
		ns: function(ns) {
			// todo
		}
	};

	window.swift = swift;

})(window, document);