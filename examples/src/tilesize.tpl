<h1>Another tile size</h1>




<h2>Tile size 64x64</h2>

<div class="swiftmap" id="first"></div>

<script>
var layer1 = swift.TileLayer('http://b.tile.cloudmade.com/cac000c14653416ba10e408adc9f25ed/997/64/${z}/${x}/${y}.png', {
	tileSize: swift.Size(64, 64)
});

swift.Map('first')
	.empty() 
	.add(layer1);
</script>




<h2>Tile size 64x64 with zoom shift</h2>

<div class="swiftmap" id="second"></div>

<script>
var layer2 = swift.TileLayer('http://b.tile.cloudmade.com/cac000c14653416ba10e408adc9f25ed/997/64/${z}/${x}/${y}.png', {
	tileSize: swift.Size(64, 64),
	zoomShift: 2
});

swift.Map('second')
	.empty() 
	.add(layer2);
</script>




<h2>Contracted tiles for retina displays</h2>

<div class="swiftmap" id="third"></div>

<script>
var layer3 = swift.TileLayer('http://b.tile.cloudmade.com/cac000c14653416ba10e408adc9f25ed/997@2x/256/${z}/${x}/${y}.png', {
	tileSize: swift.Size(128, 128),
	zoomShift: 1
});

swift.Map('third')
	.empty() 
	.add(layer3);
</script>