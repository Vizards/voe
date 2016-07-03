<template>
	<div>
		<section>
            <template v-if="identity">
                <div v-link="{name:'post',params:{slug:post.slug}}" class="post-list">
                    <h1>{{post.title}}</h1>
                    <span class="pub-time" >
                        <i class="fa fa-clock-o"></i>
                        <span v-f-time="post.created_at"></span>
                    </span>
                    <article class="article-post-meta" v-f-html="post.html">
                    </article>
                </div>
				<!--<ul class="other-info">-->
					<!--<li>-->
						<!--<ul class="tags">-->
							<!--<li v-for="tag in post.tags" v-if="post.tags.length > 0">-->
                                <!--<a :href="'/tag/' + tag.slug">{{tag.name}}</a>-->
							<!--</li>-->
							<!--<li v-if="post.tags.length == 0">无标签</li>-->
						<!--</ul>-->
					<!--</li>-->
				<!--</ul>-->
			</template>
			<template v-else>
                <div class="post-content">
                    <h1>{{post.title}}</h1>
                    <span v-f-time="post.created_at"></span>
                </div>
				<article class="markdown-body">
                    {{{post.html}}}
				</article>


                <div class="social-share" data-source=" Vagabund - Vizards's Blog " data-title={{post.title}} data-description={{post.meta_description}} data-image={{post.image}}></div>
            </template>
		</section>
		<my-comment :post_info='post' v-if="!identity"></my-comment> 
	</div>
</template>

<script>
	module.exports = {
		props:['post','identity'],
		components:{
			'myComment':require('../components/comment.vue')
        },
        data:function () {
        }
	}
</script>