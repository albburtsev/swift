	/**
	 * Layers API abstract class
	 * @class
	 * @name Layer
	 * @since 0.0.1
	 */
	function Layer() {
		
	};

	Layer.prototype = {
		/**
		 * Return layer projection
		 * @since 0.0.1
		 * @ignore
		 */
		prj: function() {
			return this.__prj || (this.map ? this.map.prj() : null);
		},
		/**
		 * Returns layer reference point
		 * @since 0.0.1
		 * @ignore
		 */
		rp: function() {
			if ( this.__prj )
				return; // todo layer self projections

			if ( this.map )
				return this instanceof TileLayer 
					? this.map.prj().pixelToTile(this.map.rp(), this.map.zoom(), this.tileSize)
					: this.map.rp();
		}
	};