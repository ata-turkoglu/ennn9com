<template>
    <div id="bloglist">
        <div class="section" v-for="(item,index) in getFilters.categories" :key="index">
            {{item.title}}
            <hr>
        </div>
    </div>
</template>

<script>
import {mapGetters} from "vuex"
export default {
    computed:{
        ...mapGetters(["getFilters"])
    }
}
</script>

<style scoped>
    #bloglist{
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        min-height: 50vh;
        margin: 0;
        padding: 1vmax;
    }
        .section{
            box-sizing: border-box;
            height: fit-content;
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
            flex-direction: column;
            margin-bottom: 3vmax;
        }
            .section hr{
                width: 50%;
                margin-right: 0;
                margin-left: 0;
            }
</style>