<template>
    <div id="slider" @mouseleave="timer" @mouseover="stop">
        <div v-for="(image,index) in (side=='right'?images:images2)" :key="index">
            <slide :image="{image,index}" :side="side"></slide>
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

    props:["side"],

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
            images2:[
                require("../../assets/images/fashion/f1.jpg"),
                require("../../assets/images/fashion/f2.jpg"),
                require("../../assets/images/fashion/f3.jpg"),
                require("../../assets/images/fashion/f4.jpg"),
                require("../../assets/images/fashion/f5.jpg"),
                require("../../assets/images/fashion/f6.jpg"),
                require("../../assets/images/fashion/f7.jpg"),
                require("../../assets/images/fashion/f8.jpg"),
            ],
            index:0,
            intrvl:null,
            direction:"slide-forward",
            ilen:null
        }
    },

    created(){
        if(this.side=='right'){
            this.ilen=this.images.length
        }
        else if(this.side=="left"){
            this.ilen=this.images2.length
        }
    },

    mounted(){

        if(window.innerWidth<768){
            console.log("küçük")
            document.getElementById("nav").style.right="0"
            document.getElementById("nav").style.removeProperty("left")
        }else{
            if(this.side=="left"){
                console.log("1")
                document.getElementById("nav").style.left="0"
                document.getElementById("nav").style.removeProperty("right")
            }
            else if(this.side=="right"){
                console.log("2")
                document.getElementById("nav").style.removeProperty("left")
                document.getElementById("nav").style.right="0"
            }
        }
        this.timer()
        window.addEventListener("resize",this.resize)
    },

    beforeDestroy(){
        this.stop()
    },

    beforeUpdate(){
        this.stop()
    },

    methods:{

        resize(){
            if(window.innerWidth<768){
                console.log("küçük")
                document.getElementById("nav").style.right="0"
                document.getElementById("nav").style.removeProperty("left")
            }else{
                if(this.side=="left"){
                    console.log("1")
                    document.getElementById("nav").style.left="0"
                    document.getElementById("nav").style.removeProperty("right")
                }
                else if(this.side=="right"){
                    console.log("2")
                    document.getElementById("nav").style.removeProperty("left")
                    document.getElementById("nav").style.right="0"
                }
            }
        },

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
            if(this.index==this.ilen-1){
                this.index=0
            }else{
                this.index++
            }
            this.direction="slide-forward"
        },
        
        back(){
            if(this.index==0){
                this.index=this.ilen-1
            }else{
                this.index--
            }
            this.direction="slide-back"
        }
    }
}
</script>

<style scoped>
    #slider{
        position: relative;
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        overflow: hidden;
    }

        #nav{
            position: absolute;
            width: 3%;
            height: 95%;
            top: 0;
            /*right: 0;*/
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
                right: 0;
            }
            #nav img{
                filter: drop-shadow(0 0 1vmax whitesmoke);
            }
    }

</style>