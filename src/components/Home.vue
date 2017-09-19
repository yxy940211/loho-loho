<template>
<div>
    <v-header></v-header>
        <div class="bo">
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(value,index) in swiperData">
                <a :href="value.url"><img :src="value.pic"/></a>
            </mt-swipe-item>
        </mt-swipe>
        </div>
        <ul>
            <li>
                <img src="../../build/img/xpss.png" alt="">
                <p>新品上市</p>
            </li>
        </ul>
    <v-footer></v-footer>
</div>  
</template>

<script>
    export default{
        name:"Home",
        data(){
            return{
                swiperData:[]

            }
        },
        mounted(){
    this.axios.get("/loho88/index")
    .then(res=>{
        // console.log(res.data.result.focus)
        this.swiperData = res.data.result.focus
    })
        }
    }
    
</script>

<style scoped>

.bo{height:200px;background: pink;}
.bo img{width:100%;height:100%;display:block;}
ul{width:100%;height:2.53rem;background:blue;}
li{width:25%;height:50%;background: pink;}
li img{width:0.5rem;height: 0.5rem;}


</style>

