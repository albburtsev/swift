/*! Swift Map v@1.0.0 */

(function(window, document, undefined) {
	'use strict';

	/**
	 * Create a new Map
	 * @constructor
	 * @param {HTMLElement} node HTML element for map placement
	 * @param {Object} opts Map options, default - swift.Point(37.617633, 55.755786)
	 * @param {Number} opts.zoom Map zoom [1..17], default - 10
	 * @param {Point} opts.center Center of the map
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
		 * @param {Point} center Center of the map
		 * @returns {Map} Returned map object, if the parameter not passed
		 * @returns {Point} Returned center of the map, if the parameter passed
		 */
		center: function(center) {
			// todo
		},
		/**
		 * Set zoom of the map, or return zoom level
		 * @param {Number} zoom Zoom level of the map
		 * @returns {Map} Returned map object, if the parameter not passed
		 * @returns {Number} Returned number of zoom level, if the parameter passed
		 */
		zoom: function(zoom) {
			// todo
		},
		/**
		 * @ignore
		 */
		toString: function() {
			return 'Swift Map';
			//return 'Swift Map, zoom: ${__zoom}, center: ${__center}';
		}
	};

	/**
	 * @namespace
	 */
	var swift = {
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