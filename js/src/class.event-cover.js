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