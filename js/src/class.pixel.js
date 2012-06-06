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