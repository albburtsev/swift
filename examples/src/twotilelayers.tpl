<h1>Two tile layers</h1>

<div class="swiftmap" id="swiftmap"></div>

<script>
var	// http://maps.stamen.com
	layer1 = swift.TileLayer('http://c.tile.stamen.com/watercolor/${z}/${x}/${y}.jpg'),
	// http://maps.google.com
	// Depricated for use
	layer2 = swift.TileLayer('https://mts0.google.com/vt/lyrs=h@177302884&hl=ru&src=app&x=${x}&y=${y}&z=${z}&s=Galile');

swift.Map('swiftmap')
	.empty() 
	.add(layer1)
	.add(layer2);
</script>