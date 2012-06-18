	/**
	 * Create new tile layers
	 * @class
	 * @name TileLayer
	 * @since 0.0.1
	 * @param {String|Function} url URL template or URL handler for getting tile URL.  **Required**
	 * @param {Object} [opts] Layer options.
	 * @param {Map} [map] Map instance.
	 * @param {Number} [z] zIndex of layer, default - 1.
	 * @param {Size} [tileSize] Size of tile, default - swift.Size(256, 256).
	 * @param {String} [name] Name of layer.
	 * @see [Cloudmade Tile API](http://developers.cloudmade.com/projects/tiles/documents)
	 * @example
```
var	map = swift.Map( document.body );

// First case
TileLayer(
	'http://b.tile.cloudmade.com/cac000c14653416ba10e408adc9f25ed/997/256/${z}/${x}/${y}.png',
	{ map: map }
);

// Second case
TileLayer(
	function(x, y, z) {
		return 'http://b.tile.cloudmade.com/cac000c14653416ba10e408adc9f25ed/997/256/'+z+'/'+x+'/'+y+'.png'
	},
	{ map: map }
);

// Third case
map.add(
	TileLayer('http://b.tile.cloudmade.com/cac000c14653416ba10e408adc9f25ed/997/256/${z}/${x}/${y}.png')
);
```
	 */
	function TileLayer(url, opts) {
		if ( !(this instanceof TileLayer) )
			return new TileLayer(url, opts);

		// Handle options
		opts = opts || {};
		if ( !url )
			throw ErrorInvalidArguments();

		utils.mixin(this, {
			map: null,
			name: '',
			tileSize: this.defaultTileSize,
			url: url,
			z: this.defaultZ
		}, opts);

		// Create layer node
		this._node = utils.node('div', '', {
			position: 'absolute',
			zIndex: this.z,
			left: 0,
			top: 0
		});

		this.update();
	};

	utils.extend(Layer, TileLayer,
	/** @lends TileLayer.prototype */
	{
		defaultZ: 1,
		defaultTileSize: new Size(256, 256),
		
		/**
		 * Rebuild tiles in layer
		 * @since 0.0.1
		 * @returns {TileLayer} Returns TileLayer instance
		 */
		rebuild: function() {
			if ( !this.map )
				return;

			var	rpt = this.rp(), // Tile for reference point of layer
				prj = this.prj(), // Projection of layer
				vp = this.map.vp(), // Map viewport
				vpc = vp.center(), // Center of map viewport
				tileWidth = this.tileSize.width(),
				tileHeight = this.tileSize.height(),
				rptTop = vpc.y() - rpt.tpy, // Top position for tile of reference point
				rptLeft = vpc.x() - rpt.tpx, // Left position for tile of reference point
				reserveX = Math.ceil(vp.width() / tileWidth / 2),
				reserveY = Math.ceil(vp.height() / tileHeight / 2),
				txMin = rpt.tx - reserveX, // Minimal tile x-index
				txMax = rpt.tx + reserveX, // Maximum tile x-index
				tyMin = rpt.ty - reserveY, // Minimal tile y-index
				tyMax = rpt.ty + reserveY, // Maximum tile y-index
				tx, ty, tz = rpt.tz,
				tile;

			// Do not repeat for Y-direction
			tyMin = Math.max(prj.min(tz), tyMin);
			tyMax = Math.min(prj.max(tz), tyMax);

			/*console.log(
				'reserveX', reserveX,
				'reserveY', reserveY,
				'txMin', txMin,
				'txMax', txMax,
				'tyMin', tyMin,
				'tyMax', tyMax
			);*/

			for (tx = txMin; tx <= txMax; tx++) {
				for (ty = tyMin; ty <= tyMax; ty++) {
					tile = Tile(tx, ty, tz, {
						tnx: prj.normalize(tx, tz),
						tny: prj.normalize(ty, tz)
					});
					this._node.appendChild( this.tileNode(tile, {
						position: 'absolute',
						top: (rptTop + (ty - rpt.ty) * tileHeight) + 'px',
						left: (rptLeft + (tx - rpt.tx) * tileWidth) + 'px'
					}) );
				}
			}

			// Memory leak fix
			rpt = prj = vp = vpc = tile = null;
		},
		/**
		 * Return tile node
		 * @since 0.0.1
		 * @param {Tile} tile Tile instance. **Required**
		 * @param {Object} [styles] Styles for tile position.
		 * @returns {HTMLElement} Tile node
		 * @ignore
		 */
		tileNode: function(tile, styles) {
			return utils.node('img', {
				src: this.url(tile.tnx, tile.tny, tile.tz),
				width: this.tileSize.width(),
				height: this.tileSize.height()
			}, styles);
		},
		/**
		 * Update layer options and rebuild layer
		 * @since 0.0.1
		 * @param {Object} opts Options for TileLayer class
		 * @returns {TileLayer} Returns TileLayer instance
		 */
		update: function(opts) {
			opts = opts || {};

			if ( opts.map && opts.map !== this.map ); // todo

			utils.mixin(this, opts);

			// Rewrite url option as handler, if given a string
			if ( !(this.url instanceof Function) ) {
				this.urltpl = this.url.toString();
				/** @ignore */
				this.url = function(x, y, z) {
					return utils.tmpl(this.urltpl, {
						x: x,
						y: y,
						z: z
					});
				};
			}

			// Add layer node and layer instance to map
			var	map  = this.map,
				added = false;

			if ( map instanceof Map ) {
				for (var i = 0; i < map.layers.length; i++)
					if ( map.layers[i] === this )
						added = true;

				if ( !added ) {
					map.layers.push( this );
					map._layers.appendChild(this._node);
				}
			}

			// Rebuild tiles
			this.rebuild();
		}
	});