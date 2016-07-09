<template>
	<div class="pagination">
		<span v-show="canPrev" id="prev"><a href="#" @click.stop.prevent="forward">Prev</a></span>
		<span v-show="canNext" id="next"><a href="#" @click.stop.prevent="backward">Next</a></span>
	</div>
</template>

<script>
	module.exports = {
		data:function(){
				return {
					pages:pages
				}
		},
		props:['pid'],
		methods:{
			forward:function(e){
				route.go({
					name:'page',
					params:{
						id:this.pid-1
					}
				});
			},
			backward:function(e){
				route.go({
					name:'page',
					params:{
						id:this.pid+1
					}
				});
			}
		},
		computed:{
			canNext:function(){
				if(this.pid<this.pages){
					return true;
				}else{
					return false;
				}
			},
			canPrev:function(){
				if(this.pid>1){
					return true;
				}else{
					return false;
				}
			}
		}
	}
</script>