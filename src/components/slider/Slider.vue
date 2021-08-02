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
                require("../../assets/images/temp3.jpg"),
                require("../../assets/images/baby-smile.jpg"),
                require("../../assets/images/stroller.jpg"),
                require("../../assets/images/childseat.jpg"),
                require("../../assets/images/temp.jpg"),
                require("../../assets/images/temp2.jpg"),
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
            console.log("timer")
        },

        stop(){
            clearInterval(this.intrvl)
            console.log("stop")
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

    @media screen and (max-width:768px) {
        #slider{
            width: 100%;
            height: 25.9vh;
        }
            #nav{
                width: 4%;
            }
            #nav img{
                filter: drop-shadow(0 0 1vmax whitesmoke);
            }
    }

</style>