<template>
<transition>
	<div>
		 <div style="padding:20px;" id="app">
        <div class="panel panel-primary">
            <div class="panel-heading">用户管理</div>
            <table class="table table-bordered table-striped text-center">
                <thead>
                    <tr>
                        <th>用户名</th>
                        <th>年龄</th>
                        <th>毕业学校</th>
                        <th>备注</th>
                    </tr>
                </thead>
                <tbody>
                    <template v-for="(row, index) in rows " >
                        <tr v-if="index>=(curpage-1)*pagesize&&index<curpage*pagesize">
                            <td >{{row.Name}}</td>
                            <td>{{row.Age}}</td>
                            <td>{{row.School}}</td>
                            <td>{{row.Remark}}</td>
                        </tr>
                    </template>
                    
                </tbody>
            </table>
        </div>
        <ul class="pagination pagination-lg">
                <li v-if="curpage==1" class="disabled"><a href="#">上一页</a></li>
                <li v-else v-on:click="PrePage()" ><a href="#">上一页</a></li>
                <template v-for="page in pageCount">
                    <li v-if="page==curpage" class="active" v-on:click="NumPage(page, $event)"><a href="#">{{page}}</a></li>
                    <li v-else v-on:click="NumPage(page, $event)"><a href="#">{{page}}</a></li>
                </template>
                <li v-if="curpage==pageCount" class="disabled"><a href="#">下一页</a></li>
                <li v-else v-on:click="NextPage()" ><a href="#">下一页</a></li>
            </ul>
        </div>
	</div>
</transition>
</template>
<script>
	export default{
		data(){
			return{
                rows:[],
				pagesize:6,
                curpage:1,
                pageCount:{
                    type:Number
                }
			}
		},
		created(){

           
            
           
        },
        mounted(){
            this.$nextTick(function(){
                this.fetchdata();
            })
            

        },
        methods: {
            //获取数据
            fetchdata(){
               let _this=this
                this.$http.get('static/data.json').then(function(res){
                    _this.rows=res.data.form.rows;
                    _this.pageCount = Math.ceil(_this.rows.length/_this.pagesize);
                   //console.log(res.data.form.rows)
                }).catch(err=>
                    console.log('formdata',err)
                )
            },
            //上一页方法
            PrePage: function (event) {
                if (this.curpage>1) {
                    this.curpage = this.curpage-1;
                }
            },
            //下一页方法
            NextPage: function (event) {
                if (this.curpage < this.pageCount) {
                    this.curpage = this.curpage+1;
                }
            },
            //点击页码的方法
            NumPage: function (num, event) {
                if (this.curpage == num) {
                    return;
                }
                this.curpage = num;
            }
        }
	}
</script>
<style>
.active{
	background:#ccc;
	border:1px solid blue;
    color:red;
}
.disabled a{
    color:#ccc
}
</style>