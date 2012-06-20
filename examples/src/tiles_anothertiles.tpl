<h1>Another tile layer</h1>

<div class="swiftmap" id="swiftmap"></div>

<script>
swift.Map('swiftmap')
	.empty()
	.add( swift.TileLayer('http://b.tile.cloudmade.com/cac000c14653416ba10e408adc9f25ed/997/256/${z}/${x}/${y}.png') );
</script>