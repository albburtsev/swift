<h1>Another tile size</h1>

<div class="swiftmap" id="swiftmap"></div>

<script>
var layer = swift.TileLayer('http://b.tile.cloudmade.com/cac000c14653416ba10e408adc9f25ed/997/64/${z}/${x}/${y}.png', {
	tileSize: swift.Size(64, 64)
});

swift.Map('swiftmap')
	.empty() 
	.add(layer);
</script>