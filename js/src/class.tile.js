	/**
	 * Create tile instance
	 * @class
	 * @name Tile
	 * @since 0.0.1
	 * @param {Number} tx Horizontal tile index. **Required**
	 * @param {Number} ty Vertical tile index. **Required**
	 * @param {Number} tz Zoom level. **Required**
	 * @param {Number} [opts] Advanced options for tile.
	 * @param {Number} [opts.tnx] Normalize horizontal tile index.
	 * @param {Number} [opts.tny] Normalize vertical tile index.
	 * @param {Number} [opts.tpx] Horizontal pixel offset from the reference point.
	 * @param {Number} [opts.tpy] Vertical pixel offset from the reference point.
	 * @param {Pixel} [opts.pixel] Reference point.
	 */
	function Tile(tx, ty, tz, opts) {
		if ( !(this instanceof Tile) )
			return new Tile(tx, ty, tz, opts);

		utils.mixin(this, {
			tx: tx,
			ty: ty,
			tz: tz
		}, opts);

		this.tnx = utils.or(this.tnx, this.tx);
		this.tny = utils.or(this.tny, this.ty);
	};

	Tile.prototype = {
		// todo
	};