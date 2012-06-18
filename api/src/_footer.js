
	/**
	 * @namespace
	 */
	var swift = {
		// Classes
		EventCover: EventCover,
		Layer: Layer,
		Map: Map,
		Pixel: Pixel,
		Point: Point,
		ProjectionDefault: ProjectionDefault,
		Size: Size,
		Tile: Tile,
		TileLayer: TileLayer,

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
swift.alias('sweet');
new sweet.Map(document.body);
		 */
		alias: function(ns) {
			if ( typeof ns === 'string' )
				ns = window[ns] = {};

			utils.each(swift, function(prop, value) {
				ns[prop] = value;
			});
		}
	};

	window.swift = swift;

})(window, document);