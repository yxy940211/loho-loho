<template>
    <div>
        <ul>
             <li v-html="DetailData" class="tu">

            </li> 
        </ul>
    </div>
    
</template>

<script>
    export default{
        name:"Detail",
        data(){
            return{
                DetailData:{}
            }
        },
        mounted(){
         this.axios.get("/api/item/desc?id="+this.$route.params.id)
         .then(res=>{
             console.log(res.data.data.desc)

            this.DetailData = res.data.data.desc
         })
        }
    }
</script>

<style scoped>

.tu p img{width:100%;height:100%;}


</style>

