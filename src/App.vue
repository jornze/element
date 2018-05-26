<template>
  <div id="app">
    <div class='head'>头部</div>
    <div class='main'>
      <side></side>
      <div class='fl mainR'>
          <router-view></router-view>
      </div>
      
    </div>
   
  </div>
</template>

<script>
import Side from "@/components/side/side"
export default {
  components:{
    Side
  }
}
</script>

<style >



@import "./common/css/app.css"
</style>
