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
		 * Remove layer
		 * @since 0.0.1
		 * @returns {Boolean} Returns true, if removing was successfull
		 */
		remove: function() {
			// @tofix
			if ( this._node && this._node.parentNode ) {
				this._node.parentNode.removeChild(this._node);
				this.map = null;
				return true;
			}
			return false;
		}
	};