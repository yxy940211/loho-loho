<template>

<div>
    <v-header></v-header>
    <ul>
         <li v-for = "(value,index) in listData">
        <router-link :to="'/Detail/'+value.goodsId">
            <img :src="'http://image.loho88.com/'+value.img" alt="">
            <p>{{value.title}}</p>
        </router-link> 
        </li>
    </ul>
    <v-footer></v-footer>
</div>

</template>

<script>
 export default{
     name:"List",
     data(){
         return{
             listData:[]
         }
     },
     mounted(){
        //  fetch("/api/category/items?id=10&page=1&num=10")
        //  .then(res=>res.json())
        //  .then(data=>{
        //     console.log(data.data.list) 
        
        //     this.listData = data.data.list
        //  })
        //  .catch(err=>console.log(err))

        this.axios.get("/loho88/search/?e=85&page=1")
        .then(res=>{
            console.log(res.data.result.data)
            this.listData = res.data.result.data;
        })

        // this.axios.get("/api/recommend/home?page=1&num=10")
        // .then(res=>{
        //     console.log(res.data.data.list)
        //     this.listData = res.data.data.list;
        // })
     }
 }

</script>


<style scoped>
    ul{float:left;}
    ul li{width:50%;float:left;list-style: none;}
    ul li img{width:100%;height:100%;}
</style>