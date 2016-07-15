
<template>
	<div class="not-found">
		<div class="not-found-face">
			<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQAQMAAADdiHD7AAAABlBMVEUAAABTU1OoaSf/AAAAAXRSTlMAQObYZgAAAFJJREFUeF7t0cENgDAMQ9FwYgxG6WjpaIzCCAxQxVggFuDiCvlLOeRdHR9yzjncHVoq3npu+wQUrUuJHylSTmBaespJyJQoObUeyxDQb3bEm5Au81c0pSCD8HYAAAAASUVORK5CYII="/>
		</div>
		<div class="information">
			<h2>404 - 找不到您的文件</h2>
			<p>该页面可能已被移至别处或遭到删除。<p>
			<p class="en-info">ERR_GIRLFRIEND_NOT_FOUND</p>
		</div>
		<div class="button">
			<a href="/#!">返回首页</a>
		</div>
	</div>
</template>

<script>
	module.exports = {
		data: function () {
			document.title = "404 - GIRLFRIEND_NOT_FOUND";
			$('header').css('visibility','hidden');
		}
	}
</script>