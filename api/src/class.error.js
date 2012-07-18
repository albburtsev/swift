	/**
	 * Handle errors when given invalid arguments
	 * @class
	 * @name ErrorInvalidArguments
	 * @since 0.0.1
	 * @ignore
	 */
	function ErrorInvalidArguments() {
		if ( !(this instanceof ErrorInvalidArguments) )
			return new ErrorInvalidArguments();

		this.message = 'Invalid arguments';
	};

	ErrorInvalidArguments.prototype = new Error;


	/**
	 * Handle errors when given invalid HTMLElement
	 * @class
	 * @name ErrorInvalidHTMLElement
	 * @since 0.0.1
	 * @ignore
	 */
	function ErrorInvalidHTMLElement() {
		if ( !(this instanceof ErrorInvalidHTMLElement) )
			return new ErrorInvalidHTMLElement();

		this.message = 'Invalid HTMLElement';
	};

	ErrorInvalidHTMLElement.prototype = new Error;