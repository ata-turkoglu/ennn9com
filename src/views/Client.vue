<template>
    <div id="client">
        <Header/>
        <router-view></router-view>
    </div>
    
</template>

<script>
import Header from "../components/client/Header.vue"
export default {
    components:{
        Header,
    }
}
</script>

<style scoped>
    #client{
        position: relative;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
</style>