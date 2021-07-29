<template>
    <div id="slider" @mouseleave="timer" @mouseover="stop">
        <div v-for="(image,index) in images" :key="index">
            <slide :image="{image,index}"></slide>
        </div>
        <div id="nav">
            <img src="../../assets/items/right-arrow.png" @click="fwd">
            <img src="../../assets/items/left-arrow.png" @click="back">
        </div>

    </div>
</template>

<script>
import Slide from "./Slide.vue"
export default {
    components:{
        Slide
    },
    data(){
        return{
            images:[
                require("../../assets/images/mom.jpg"),
                require("../../assets/images/mom2.jpg"),
                require("../../assets/images/mom3.jpg"),
            ],
            index:0,
            intrvl:null
        }
    },
    created(){
        this.timer()
    },
    methods:{
        timer(){
            this.intrvl=setInterval(() => {
                if(this.index==this.images.length-1){
                    this.index=0
                }else{
                    this.index++
                }
            }, 10000);
        },

        stop(){
            clearInterval(this.intrvl)
        },

        fwd(){
            if(this.index==this.images.length-1){
                this.index=0
            }else{
                this.index++
            }
        },
        
        back(){
            if(this.index==0){
                this.index=this.images.length-1
            }else{
                this.index--
            }
        }
    }
}
</script>

<style scoped>
    #slider{
        position: relative;
        width: 40vw;
        height: 100%;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        overflow: hidden;
    }

        #nav{
            position: absolute;
            width: 6%;
            height: 95%;
            top: 0;
            right: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
            z-index: 2;
        }

            #nav img{
                width: 100%;
                height: auto;
                cursor:pointer;
                opacity: .85;
            }

            #nav img:hover{
                opacity: 0.5;
                transition-duration: 0.2s;
            }

        #bg{
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            margin: auto;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: -1;
        }

    @media screen and (max-width:768px) {
        #slider{
            width: 100%;
            height: 27.1vh;
        }
            #nav img{
                filter: drop-shadow(0 0 1vmax whitesmoke);
            }
    }

</style>