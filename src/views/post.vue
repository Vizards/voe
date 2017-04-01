<template>
	<loading v-if="showload"></loading>
	<my-section :post='post_content'></my-section>
</template>

<script>
	module.exports = {
		data:function(){
			return{
				post_content:'',
				showload:true,
				post_title: '',
				post_desc: '',
            }
		},
		components:{
			mySection: require('../components/section.vue'),
			loading: require('../components/loading.vue')
		},
		route:{
			data:function(transition){
				var tmp_id = transition.to.params.slug;
				var me = this;
				//limit 大小应该与你后台设置的每页显示文章数一致
				$.get(ghost.url.api('posts/slug/'+tmp_id,{fields:'title,html,created_at,meta_description,slug,url,image,published_at',limit:'5',page:tmp_id}))
					.done(function(data){
					    transition.next({post_content:data.posts[0],showload:false});
						me.post_title = me.post_content.title;
						me.post_desc = me.post_content.meta_description;
						me.$emit('updateHead');
                    })
					.fail(function(err){
						console.log(err);
					});
				$('header').css('visibility','hidden');
            }
		},
		head: {
			title: function() {
				return {
					inner: this.post_title,
				}
			},
			meta: function() {
				return [
			 		{ name: 'description', content: this.post_desc }
				]
			}
		}
	}
</script>