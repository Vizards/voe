<template>
	<div class="tags">
		<div v-for="post in posts" class="content">
			<h2>{{ post.tags[0].name }}</h2>
			<div v-for="postInfo in post.title">
				<span>{{ postInfo.valTime }}</span>
				<a v-link="'/post/' + postInfo.valUrl">{{ postInfo.valTitle }}</a>
			</div>
		</div>
	</div>
</template>

<script>
	module.exports = {
		data:function(){
			return {
				posts: '',
			}
		},
		route:{
			data:function(transition){
				const tmp_id = transition.to.params.id;
				const moment = require('moment');
				$.get(ghost.url.api('posts',{limit: 'all', fields: 'title,image,id,meta_description,created_at,slug,url', include: 'tags'}))
					.done(function(data){
						let rv = data.posts.reduce((acc, val) => {
							let eItem = acc.find(w => w.tags[0].name === val.tags[0].name && w.tags[0].slug === val.tags[0].slug);
							if (!eItem) {
								eItem = { title: [], tags: val.tags };
								acc.push(eItem);
							}
							let valTitle = val.title;
							let valUrl = val.slug;
							let valTime = moment(val.created_at).format('YYYY年MM月DD日');
							let newVal = {valTitle, valUrl, valTime}
							eItem.title.push(newVal);

							return acc;
						}, []);
						console.log(rv);
						transition.next({posts: rv});
					})
					.fail(function(err){
						console.log(err);
					})
			}
		}
	}
</script>
