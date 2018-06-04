<template>
    <transition>
        <div>
            <p>用户管理</p>
            <table>
                <th>
                    <td>用户名</td>
                    <td>年龄</td>
                    <td>毕业学校</td>
                    <td>备注</td>
                </th>
                <template  v-for="(row, index) in rows">
                    <tr :key='row.Id' v-if='index<curpage*pagesize && index>=(curpage-1)*pagesize'>
                       
                        <td v-text=''>{{row.Name | filtwo}}</td>
                        <td >{{row.Age | fileone}}</td>
                        <td v-text='row.School'></td>
                        <td v-text='row.Remark'></td>
                        
                    </tr>
                </template>
                
            </table>
            <ul>
                <li v-if='curpage==1' class='disabled'>上一页</li>
                <li v-else @click='prepage' class='normal'>上一页</li>
                <template v-for='(page,index) in pagecount'>
                    <li v-text='page' @click='filtpage(page)' v-if='curpage==page' class='active'></li>
                     <li v-text='page' @click='filtpage(page)' v-else></li>
                </template>
                <li v-if='curpage==pagecount' class='disabled'>下一页</li>
                <li v-else @click='nextpage'>下一页</li>
            </ul>
        </div>
    </transition>
</template>
<script >
   
    export default{
        data(){
            return{
                rows:{
                    type:Array
                },
                pagesize:6,
                pagecount:{
                    type:Number
                },
                curpage:1,
                iscur:false
            }
        },
        computed:{
            rowsfiltdata(){ 
                let lists=this.rows;
               
                    return lists.Filter(function(item){  
                        return item.Age>20 
                    })
                }  
        },
        filters:{
            fileone(val){
                return val+'dd';
            },
            filtwo(val){
                return val+'usa'
            }
        },
        mounted(){
            this.$nextTick(function(){

                this.fetchData();
               
            })

        },
        methods:{
            
            fetchData(){
                this.$http.get('static/data.json').then(
                    res=>{
                     this.rows=res.data.form.rows;  
                     this.pagecount=Math.ceil(this.rows.length/this.pagesize);
                    }
                ).catch(err=>{console.log('fetchformdada',err)})
            },
            filtpage(page){
                this.curpage=page;
                if(this.curpage==page){
                    this.iscur=true;
                }
            },
            prepage(){
                this.curpage--
            },
            nextpage(){
                this.curpage++
            },
            curhight(page){
                if(this.curpage==page){
                    return iscur=true;
                }
            }
            
           
        }
    }
</script>
<style>
.disabled{
    color:#ccc;
}
.active{
    color:blue;
}
</style>