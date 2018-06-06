<template>
	<div ref='user3'>
		<span>{{unfin}}items left</span>		
			<span v-for='state in states' :key='state' 
			 :class="{active:filter==state}"
			 @click='togglefilter(state)'>{{state}}</span>		
		<span @click='del'> clear completed</span>
	</div>
</template>
<script>
export default{
	data(){
		return{
			states:['all','active','completed']
		}
	},
	props:{
		filter:{
			type:String,
			required:true
		},
		datas:{
			type:Array,
			required:true
		}
	},
	computed:{
		unfin(){
			return this.datas.filter(data=>!data.completed).length
		}

	},
	methods:{
		togglefilter(state){
			this.$emit('togglefilter',state)
		},
		del(){

		}
	}
}
</script>
<style>
.active{
	border:1px solid red;
}
</style>