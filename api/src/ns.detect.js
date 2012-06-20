	/**
	 * Detects native implementations for css properties and not only it
	 * @namespace
	 * @name detect
	 * @since 0.0.1
	 */
	var	detect =
	/** @lends detect */ 
	{
		browser: undefined,
		browserVersion: undefined,
		transform: undefined
	};

	(function() {
		var	i, item,
			div = dom.node('div'),
			userAgent = navigator.userAgent,
			transforms = ['transform', 'MozTransform', 'WebkitTransform', 'OTransform', 'msTransform'],
			browsers = [
				['webkit', /(webkit)[ \/]([\w.]+)/i],
				['opera', /(opera)(?:.*version)?[ \/]([\w.]+)/i],
				['msie', /(msie) ([\w.]+)/i],
				['mozilla', /(mozilla)(?:.*? rv:([\w.]+))?/i]
			];

		// Detect browser
		for (i = 0; i < browsers.length; i++) {
			item = browsers[i];
			if ( item[1] = userAgent.match(item[1]) ) {
				detect.browser = item[0];
				if ( item[1][2] )
					detect.browserVersion = parseFloat(item[1][2]) || false;
				break;
			}
		}

		// Detect transform properties
		for (i = 0; i < transforms.length; i++) {
			item = transforms[i];
			if ( item in div.style ) {
				detect.transform = item;
				break;
			}
		}
	})();