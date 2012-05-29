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