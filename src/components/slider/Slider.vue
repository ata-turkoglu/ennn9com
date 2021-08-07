<template>
    <div id="slider" @mouseleave="timer" @mouseover="stop">
        <div v-for="(image,index) in (side=='right'?images:images2)" :key="index">
            <slide :image="{image,index}" :side="side"></slide>
        </div>
        <div id="slider-nav">
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
            ilen:null,
            widesize:null,
            tt:9000
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
        //console.log(this.side)
        this.timer()
        window.addEventListener("resize",this.resize)

        if(window.innerWidth>768){
            this.widesize=true
            if(this.side=="left"){
                //console.log("1")
                document.getElementById("slider-nav").style.left="0"
                if(document.getElementById("slider-nav").style.right>=0){
                    document.getElementById("slider-nav").style.removeProperty("right")
                }
            }
            else if(this.side=="right"){
                document.getElementById("slider-nav").style.right="0"
                if(document.getElementById("slider-nav").style.left>=0){
                    document.getElementById("slider-nav").style.removeProperty("left")
                }
            }
        }else{
            this.widesize=false
        }
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
                this.widesize=false
                //console.log("küçük")
                document.getElementById("slider-nav").style.right="0"
                document.getElementById("slider-nav").style.removeProperty("left")
            }else{
                this.widesize=true
                if(this.side=="left"){
                    //console.log("1")
                    document.getElementById("slider-nav").style.left="0"
                    document.getElementById("slider-nav").style.removeProperty("right")
                }
                else if(this.side=="right"){
                    //console.log("2")
                    document.getElementById("slider-nav").style.removeProperty("left")
                    document.getElementById("slider-nav").style.right="0"
                }
            }
        },

        timer(){
            this.tt=(Math.floor(Math.random()*5)+5)*1000
                console.log("tt",this.tt)
            this.intrvl=setInterval(() => {
                if(this.index==this.images.length-1){
                    this.index=0
                }else{
                    this.index++
                }
            }, this.tt);
        },

        stop(){
            clearInterval(this.intrvl)
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

        #slider-nav{
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

            #slider-nav img{
                width: 100%;
                height: auto;
                cursor:pointer;
                opacity: .85;
            }

            #slider-nav img:hover{
                opacity: 0.5;
                transition-duration: 0.2s;
            }

    @media screen and (max-width:768px) {
        #slider{
            width: 100%;
            height: 25vh;
            margin-block: .5vh;
        }
            #slider-nav{
                box-sizing: border-box;
                width: 4%;
                right: -1px;
                height: 100%;
                background-color: transparent;
                background-image: linear-gradient(to left, whitesmoke, transparent);
            }
            #slider-nav img{
                filter: drop-shadow(0 0 1vmax whitesmoke);
            }
    }

</style>