<template>
   <transition>
        <div>
            <p>用户管理</p>
            <table>
                <thead>
                    <th>
                        <td>用户名</td>
                        <td>年龄</td>
                        <td>毕业学校</td>
                        <td>备注</td>
                        <td>操作</td>
                    </th>
                </thead>
                <tbody>
                    <template v-for='(item,index) in tbs' >
                        <tr>
                            <td v-text='item.Name'></td>
                            <td v-text='item.Age'></td>
                            <td v-text='item.School'></td>
                            <td v-text='item.Remark'></td>
                            <td @click='edit(item)'>编辑</td>
                            <td @click='del(item.Id)'>删除</td>
                        </tr>
                    </template>
                    <tr>
                            <td> <input type='text'v-model='editTemplate.Name'></td>
                            <td> <input type='text'v-model='editTemplate.Age'></td>
                            <td> <select v-model='editTemplate.School'>
                                <option>复兴中学</option>
                                <option>中山小学</option>
                                <option>光明小学</option>
                            </select></td>
                            <td> <input type='text'v-model='editTemplate.Remark'></td>
                            <td> <input type='button' value='保存' @click='save'></td>
                        </tr>
                </tbody>
            </table>
        </div>
   </transition>
</template>
<script>
    export default{
        data(){
            return{
                editTemplate:{ "Id": '0', "Name": "", "Age": '', "School": "", "Remark": "" },
                tbs:{
                    type:Array
                }
            }
        },
        mounted(){
            this.$nextTick(function(){
                this.fetchTabledata();
            })
        },
        methods:{
            fetchTabledata(){
          
                this.$http.get('static/data.json').then(res=>{
                   this.tbs=res.data.table.tbs;
                }).catch(err=>{
                    console.log('tabledata',err)
                })
            },
            edit(item){
                this.editTemplate=item;
            },
            del(id){
               //这里要用es6 将this作用域指向vue  否则作用域只是函数本身
                this.tbs.forEach((item,index)=>{
                    
                    if(this.tbs[index].Id==id){
                         this.tbs.splice(index,1);
                    }
                })
            },
            save(event){
                if(this.editTemplate.Id==0){
                    this.editTemplate.Id=this.tbs.length+1;
                    this.tbs.push(this.editTemplate);
                }
                this.editTemplate={ "Id": '0', "Name": "", "Age": '', "School": "", "Remark": "" }
            }
        }
    }
</script>
<style></style> 