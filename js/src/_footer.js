
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