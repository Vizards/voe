<template>
	<loading v-if="showload"></loading>
	<my-section :post='post_content'></my-section>
</template>

<script>
	module.exports = {
		data:function(){
			return{
				post_content:'',
				showload:true
            }
		},
		components:{
			mySection: require('../components/section.vue'),
			loading: require('../components/loading.vue')
		},
		route:{
			data:function(transition){
				var tmp_id = transition.to.params.slug;
				//limit 大小应该与你后台设置的每页显示文章数一致
				$.get(ghost.url.api('posts/slug/'+tmp_id,{fields:'title,html,created_at,slug,url,image,published_at',limit:'5',page:tmp_id}))
					.done(function(data){
					    transition.next({post_content:data.posts[0],showload:false});
						document.title = data.posts[0].title + " - " + "FlowMine";
                    })
					.fail(function(err){
						console.log(err);
					});
				$('header').css('visibility','hidden');
            }
		}
	}
</script>