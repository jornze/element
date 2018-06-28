<template>
<transition>
	<div ref='use'>
		<div id='user1'>
			<input type='text' 
				placeholder='输入你想要的内容'
				@keyup.enter='adddata'
			  />
	    </div>
		<user2 :data='data' v-for='data in filterData' :key='data.id' @del='delfun'></user2>
		<user3 :filter='filter' @togglefilter='togg' :datas='datas' @delcompleteddata='del'></user3>
	</div>
</transition>
</template>
<script>

import User2 from './user2/user2'
import User3 from './user3/user3'
let id=0;
export default{
	data(){
		return{
			datas:[],
			filter:'all'				
		}
	},
	computed:{
		filterData(){
			if(this.filter=='all'){
				return this.datas
			}
			let completed=this.filter=='completed'
			return this.datas.filter(data=>data.completed==completed)
		}
	},
	components:{
		
		User2,
		User3
	},
	methods:{
		adddata(e){
			this.datas.unshift({
				id:id++,
				cont:e.target.value.trim(),
				completed:false
			})
			e.target.value=''
		},
		delfun(id){
			this.datas.forEach((data,index)=>{
				if(this.datas[index].id==id){
					this.datas.splice(index,1);
				}
			})
		},
		togg(state){
			this.filter=state
		},
		del(){
			this.datas=this.datas.filter(data=>!data.completed)
		}
	}
}
</script>
<style></style>