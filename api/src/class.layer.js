	/**
	 * Layers API abstract class
	 * @class
	 * @name Layer
	 * @since 0.0.1
	 */
	function Layer() {
		/*
		 * Required layer properties:
		 * _node {HTMLElement} layer node
		 */
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
		 * Remove layer
		 * @since 0.0.1
		 * @returns {Boolean} Returns true, if removing was successfull
		 */
		remove: function() {
			// @tofix
			if ( this._node && this._node.parentNode ) {
				this._node.parentNode.removeChild(this._node);
				return true;
			}
			return false;
		},
		/**
		 * Returns layer reference point
		 * @since 0.0.1
		 * @ignore
		 */
		rp: function() {
			return this.map
				? this.prj().geoToTile(this.map.center(), this.map.zoom(), this.tileSize)
				: null;
		}
	};