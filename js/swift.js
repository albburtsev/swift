/*! Swift Map v@0.0.1 */

(function(window, document, undefined) {
	'use strict';

	/**
	 * @namespace
	 * @ignore
	 */
	var	utils = {
		/** @ignore */
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
		/** @ignore */
		extend: function(parent, child, proto) {
			function F() {};
			F.prototype = parent.prototype;
			child.prototype = new F();
			child.prototype.constructor = child;
			utils.mixin(child.prototype, proto);
		}
	};
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
		
	};

	EventCover.prototype = {
		/**
		 * Add event handler
		 * @since 0.0.1
		 * @param {String} evetns Event string or some space-separated evets. **Required**
		 * @param {Function} handler Callback. **Required**
		 * @param {Object} opts Handling options. *Optional*
		 * @param {Boolean} opts.one The handler executed one time and removed, default - false. *Optional*
		 * @returns {Context object} Returns object
		 */
		on: function(evetns, handler, opts) {
			// todo
		},
		/**
		 * Remove event handler
		 * @since 0.0.1
		 * @param {String} evetns Event string or some space-separated evets. If parameter passed, it removed all handlers of all events. *Optional*
		 * @param {Function} handler Callback, which will be removed. *Optional*
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
		wgs: function() {
			// todo
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
new Point(37.6, 55.8);
// or
Point(37.6, 55.8);
	 */
	function Point(lon, lat) {
		if ( !(this instanceof Point) )
			return new Point(lon, lat);
		// todo
	};

	Point.prototype = {
		/**
		 * Measure a distance between current point and point from argument
		 * @since 0.0.1
		 * @param {Point} point Second point for measuring. **Required**
		 * @returns {Number} Returns distance in meters
		 */
		distance: function(point) {
			
		},
		/**
		 * Set a new longitude, or return current longitude
		 * @since 0.0.1
		 * @param {Number} lon Value of the longitude. *Optional*
		 * @returns {Point} Returns point object, if the parameter not passed
		 * @returns {Number} Returns value of the longitude, if the parameter passed
		 */
		lon: function(lon) {
			// todo
		},
		/**
		 * Set a new latitude, or return current latitude
		 * @since 0.0.1
		 * @param {Number} lat Value of the latitude. *Optional*
		 * @returns {Point} Returns point object, if the parameter not passed
		 * @returns {Number} Returns value of the latitude, if the parameter passed
		 */
		lat: function(lat) {
			// todo
		}
	};
	/**
	 * Create a new map instance
	 * @class
	 * @name Map
	 * @augments EventCover
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

	utils.extend(EventCover, Map,
	/** @lends Map.prototype */
	{
		/**
		 * Set center of the map, or return center
		 * @since 0.0.1
		 * @param {Point} center Center of the map. *Optional*
		 * @returns {Map} Returns map object, if the parameter not passed
		 * @returns {Point} Returns center of the map, if the parameter passed
		 */
		center: function(center) {
			// todo
		},
		/**
		 * Set bounds of the map, or return bounds
		 * @since 0.0.1
		 * @param {Bounds} bounds Bounds object. *Optional*
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
		 * @param {Number} zoom Zoom level of the map. *Optional*
		 * @returns {Map} Returns map object, if the parameter not passed
		 * @returns {Number} Returns number of zoom level, if the parameter passed
		 */
		zoom: function(zoom) {
			// todo
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
		 * @param {Object} opts Map options. *Optional*
		 * @returns {Map} Returns map object
		 */
		update: function(opts) {
			// todo
		},
		
		// + + + + + Ignored methods + + + + +
		
		/** @ignore */
		init: function() {
			
		}
	});

	/**
	 * @namespace
	 */
	var swift = {
		EventCover: EventCover,
		Point: Point,
		Map: Map,

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