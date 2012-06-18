<h1>Two maps</h1>

<div class="swiftmap" id="first"></div>
<div class="swiftmap" id="second"></div>

<script>
swift.Map('first');

swift.Map('second')
	.empty()
	.add( swift.TileLayer('http://b.tile.cloudmade.com/cac000c14653416ba10e408adc9f25ed/997/256/${z}/${x}/${y}.png') );
</script>