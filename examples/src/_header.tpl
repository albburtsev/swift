<!DOCTYPE html>
<html lang="ru-RU">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Examples</title>
		<link rel="stylesheet" href="../css/examles.css" />
		<link rel="stylesheet" href="http://yandex.st/highlightjs/7.0/styles/zenburn.min.css" />
		<!--[if lt IE 9]><script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
		<script src="http://yandex.st/jquery/1.7.2/jquery.min.js"></script>
		<script src="http://yandex.st/highlightjs/7.0/highlight.min.js"></script>
		<script src="http://yandex.st/highlightjs/7.0/languages/javascript.min.js"></script>
		<script src="../api/swift.js"></script>
		<script>
		jQuery(function($) {
			$('script', 'body').each(function() {
				var	_this = $(this);
				$('<pre><code class="javascript">' + $.trim( _this.html() ) + '</code></pre>')
					.insertAfter(this);
			});

			hljs.tabReplace = '<span class="indent">\t</span>';
			$('pre code').each(function(i, code) {hljs.highlightBlock(code)});
		});
		</script>
	</head>
	<body>
		<div id="wrapper">
			<article>
			<!-- Example code -->

