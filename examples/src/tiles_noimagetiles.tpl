<h1>Noimage tile layer</h1>

<p>Tile is a DIV element with image background.</p>

<div class="swiftmap" id="swiftmap"></div>

<script>
var layer = swift.TileLayer('', {
	/**
	 * Return tile node
	 * @param {Tile} tile Tile instance.
	 * @param {Object} styles Styles for tile position.
	 * @returns {HTMLElement} Tile node
	 */
	tileNode: function(tile, styles) {
		var	node = document.createElement('div'),
			bgUrl = this.url(tile.tnx, tile.tny, tile.tz);

		node.style.position = styles.position;
		node.style.top = styles.top;
		node.style.left = styles.left;
		node.style.width = this.tileSize.width() + 'px';
		node.style.height = this.tileSize.height() + 'px';
		node.style.background = 'no-repeat url(' + bgUrl + ') 0 0';
		node.style.border = '1px solid #333';

		node.innerHTML = 'DIV';

		return node;
	}
});

swift.Map('swiftmap')
	.empty()
	.add(layer);
</script>