<h1>Usage namespace <code>swift.detect</code></h1>

<h2>For you browser detected:</h2>
<ul class="list"></ul>

<script>
var _list = $('ul');
$.each(swift.detect, function(key, value) {
	$('<li>')
		.html('swift.detect.' + key + ': ' + value)
		.appendTo(_list);
});
</script>