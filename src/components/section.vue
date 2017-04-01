<template>
	<div>
		<section>
            <template v-if="identity">
                <div v-link="{name:'post',params:{slug:post.slug}}" class="post-list">
                    <h1>{{post.title}}</h1>
                    <span class="pub-time" >
                        <i class="fa fa-clock-o"></i>
                        <span v-f-time="post.published_at"></span>
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
                    <span v-f-time="post.published_at"></span>
                </div>
				<article class="markdown-body">
                    {{{post.html}}}
				</article>
                <div class="share">
                    <div>
                        <span class="social-text">😳 觉得本文不错?</span>
                        <i class="fa fa-share-alt"></i>
                        <span class="social-text">安利给你的朋♂友吧</span>
                    </div>

                    <span class="social-share" data-mobile-sites="weibo,qq,douban,twitter" data-source=" Flowmine - Vizards's Blog " data-title={{post.title}} data-weibo-title={{post.title}} data-qq-title={{post.title}} data-description={{post.meta_description}} data-image={{post.image}}></span>
                </div>
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
	}
</script>