<h1>Usage other namespace</h1>

<div class="swiftmap" id="swiftmap"></div>

<script type="text/plain">
swift.alias(window);
Map('swiftmap');
</script>

<script>
// or
swift.alias('sweet');
sweet.Map('swiftmap');
</script>

<script type="text/plain">
// or
var S = {};
swift.alias(S);
S.Map('swiftmap');
</script>