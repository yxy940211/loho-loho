
<template>

    <div class="footer">
    <router-link to="Home">首页</router-link>
    <router-link to="List">分类</router-link>
    <router-link to="Near">附近体验店</router-link>
    <router-link to="Mine">我的</router-link>

    </div>

</template>
<script>    
    export default { 
        name: "Footer",
         data() {
              return {

              }
         }
    }   
 </script> 
 
 
 <style scoped>
 .footer{height:0.48rem;position:fixed;bottom:0;width:100%;background:#282828;}
 .footer a{
     width:25%;height:0.48rem;background: pink;float:left;display:block;text-align: center;line-height:40px;
 }

</style>   