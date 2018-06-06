<template>
	<div ref='user2'>
	
			<li :class="['list',{del:data.completed}]">
				<span >
					<input type='checkbox' v-model='data.completed'/>
				</span>
				<span v-text='data.cont' class='cont'></span>
				<span @click='deldata'>删除</span>
			</li>
		
	</div>
</template>
<script>
	export default{
		props:{
			data:{
				type:Object,
				required:true
			}
		},
		methods:{
			deldata(){
				this.$emit('del',this.data.id)
			}
		}
	}
</script>
<style>
.list{
	border-bottom:1px solid #ccc;
}
.del .cont{
	text-decoration:line-through
}
</style>