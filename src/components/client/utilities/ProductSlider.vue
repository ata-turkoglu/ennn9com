<template>
    <div class="card-pic">
        <img :src="image" @mouseover="Slide" @mouseleave="StopSlide">
    </div>
</template>

<script>
export default {
    props:["images"],
    data(){
        return{
            index:0,
            timer:null
        }
    },
    computed:{
        image(){
            return this.images[this.index]
        }
    },
    methods:{
        Slide(){
            this.timer=setInterval(()=>{
                if(this.index==this.images.length-1){
                    this.index=0
                }else{
                    this.index++
                }  
            },1000)
        },
        StopSlide(){
            clearInterval(this.timer)
        }
    }
}
</script>

<style scoped>
    .card-pic{
        position: relative;
        width: 100%;
        height:100%;
    }

    img{
        width: 100%;
        height: 12vmax;
        object-fit: cover;
    }

    @media screen and (max-width:768px) {
        img{
            height: 40vw;
        }
    }
</style>