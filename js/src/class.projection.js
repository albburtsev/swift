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
				resolution = this.resolution(zoom, tileSize);

			return Pixel(
				(mercX + this.halfEquator) / resolution.width(),
				(mercY + this.halfEquator) / resolution.height()
			);
		},
		/**
		 * Convert geographic coordinates to tile coordinates
		 * @since 0.0.1
		 * @param {Point} point Geographic coordinates. **Required**
		 * @param {Number} zoom Zoom level for convertation. **Required**
		 * @param {Size} [tileSize] Size of tile.
		 * @returns {Tile} Tile instance.
		 */
		geoToTile: function(point, zoom, tileSize) {
			return this.pixelToTile(
				this.geoToPixel(point, zoom, tileSize),
				zoom,
				tileSize
			);
		},
		/**
		 * Convert pixel coordinates to geographic coordinates
		 * @since 0.0.1
		 * @param {Pixel} pixel Pixel coordinates. **Required**
		 * @param {Number} zoom Zoom level for convertation. **Required**
		 * @param {Size} [tileSize] Size of tile.
		 * @returns {Point} Geographic coordinates.
		 */
		pixelToGeo: function(pixel, zoom, tileSize) {
			zoom = parseInt(zoom);
			if ( !(pixel instanceof Pixel) || isNaN(zoom) )
				throw ErrorInvalidArguments();

			var	resolution = this.resolution(zoom, tileSize),
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
		 * @returns {Tile} Tile instance.
		 */
		pixelToTile: function(pixel, zoom, tileSize) {
			var	size = tileSize || this.tileSize;

			return Tile(
				Math.floor(pixel.x() / size.width()), // tx
				Math.pow(2, zoom) - Math.floor(pixel.y() / size.height()) - 1, // ty
				zoom, // tz
				{
					tpx: (pixel.x() < 0 ? size.width() : 0) + (pixel.x() % size.width()),
					tpy: Math.floor(size.height() - pixel.y() % size.height()),
					pixel: pixel
				}
			);
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