	/**
	 * @namespace
	 * @ignore
	 */
	var	utils = {
		/** @ignore */
		mixin: function() {
			var	target = arguments[0],
				i, j;

			if ( arguments.length <= 1 )
				return target;

			for (i = 1; i < arguments.length; i++)
				for (j in arguments[i])
					if ( arguments[i].hasOwnProperty(j) )
						target[j] = arguments[i][j];
			return target;
		},
		/** @ignore */
		extend: function(parent, child, proto) {
			function F() {};
			F.prototype = parent.prototype;
			child.prototype = new F();
			child.prototype.constructor = child;
			utils.mixin(child.prototype, proto);
		}
	};