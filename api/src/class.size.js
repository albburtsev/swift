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
		 * Returns center of area
		 * @since 0.0.1
		 * @returns {Pixel} Pixel instance for center
		 */
		center: function() {
			return Pixel(
				this.width() / 2,
				this.height() / 2
			);
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
		},
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
		}
	};