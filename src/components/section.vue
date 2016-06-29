<template>
	<div>
		<section>
            <template v-if="identity">
                <div class="pic" v-link="{name:'post',params:{id:post.id}}">
                    <img :src="post.image" alt="pic" v-if="post.image">
                    <div class="list-page">
                        <h2 class="title">{{post.title}}</h2>
                        <div>
                            <span class="pub-left">
                                <i class="fa fa-calendar" aria-hidden="true"></i>&nbsp;
                                <span class="pub-info" v-f-time="post.created_at"></span>
                            </span>
                            <span class="pub-right">
                                <i class="fa fa-user" aria-hidden="true"></i>&nbsp;
                                <span class="pub-info pub-right">Vizards</span>
                            </span>
                        </div>
                    </div>
                </div>
				<article v-link="{name:'post',params:{id:post.id}}" class="article-post-meta">
                    {{post.meta_description}}
				</article>
				<hr>
				<ul class="other-info">
					<li>
						<ul class="tags">
							<li v-for="tag in post.tags" v-if="post.tags.length > 0">
                                <a :href="'/tag/' + tag.slug">{{tag.name}}</a>
							</li>
							<li v-if="post.tags.length == 0">无标签</li>
						</ul>
					</li>
				</ul>
			</template>
			<template v-else>
                <img :src="post.image" alt="pic" v-if="post.image">
                <div class="article-info">
                    <h3 class="article-page">
                        <a v-link="{name:'post',params:{id:post.id}}">{{post.title}}</a>
                    </h3>
                    <div class="author-info">
                            <span class="author">
						        <img src="/assets/logo.png" alt="avatar" title="don't touch me~">
                                <a href="#">Vizards</a>
                            </span>
                            <span class="time" v-f-time="post.created_at"></span>
                    </div>
                </div>
				<article class="markdown-body">
                    {{{post.html}}}
				</article>
			</template>
		</section>
        <section>
            <my-navigaition v-if="!identity"></my-navigaition>
        </section>
		<my-comment :post_info='post' v-if="!identity"></my-comment> 
	</div>
</template>

<script>
	module.exports = {
		props:['post','identity'],
		components:{
			'myComment':require('../components/comment.vue'),
            'myNavigaition':require('../components/navigation.vue')
        },
        data:function () {
        }
	}
</script>