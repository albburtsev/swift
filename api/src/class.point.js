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