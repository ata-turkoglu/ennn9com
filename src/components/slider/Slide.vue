<template>
    <transition :name="dir" mode="out-in">
        <div 
         id="slide"
         class="slide"
         v-show="visible"
         @mouseleave="timer" 
         @mouseover="stop"
         @touchstart="touchstart($event)"
         @touchend="touchend($event)"
         >
            <img :src="image.image">
            <transition name="fade">
                <div id="info">
                    <p v-if="side=='right'">Beraber Oynayabileceğiniz Oyunlar</p>
                    <p v-if="side=='left'">Trendleri Takip Edin</p>
                    <button>İncele</button>
                </div>
            </transition>
        </div>
    </transition>
</template>

<script>
export default {
    
    props:["image","side"],

    data(){
        return{
            touch:{
                startX:null,
                endX:null,
                state:null,
            }
        }
    },
    
    computed:{

        visible(){
            return this.image.index==this.$parent.index
        },

        dir(){
            return this.$parent.direction
        }

    },

    methods:{

        timer(){
            this.$parent.timer()
        },

        stop(){
            this.$parent.stop()
        },

        touchstart(event){ 
            this.$parent.stop()          
            this.touch.startX=event.changedTouches[0].clientX
        },

        touchend(event){
            this.touch.endX=event.changedTouches[0].clientX

            if(this.touch.endX-this.touch.startX>25){
                this.$parent.direction="slide-forward"
                this.$parent.fwd()
            }else if(this.touch.endX-this.touch.startX<-25){
                this.$parent.direction="slide-back"
                this.$parent.back()  
            }
            this.touch.startX=event.changedTouches[0].clientX
        },
    }
}
</script>

<style scoped>
    .slide{
        height: 100%;
        width: 100%;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    img{
        /*border-radius: .5vmax 0 0 .5vmax;
        box-shadow: -.2vmax .2vmax .5vmax -0.2vmax rgb(50, 50, 50);*/
        z-index: 1;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: auto;
        object-fit: contain;
    }

    #info{
        position: absolute;
        top: 0;
        left: 5%;
        height: 90%;
        width: 90%;
        display: grid;
        grid-template-rows: 70% 30%;
        align-items: center;
        justify-content: center;
        z-index: 2;
        overflow: hidden;
    }

        p{  
            color: rgb(30, 30, 100);
            font-size: 2.5vmax;
            font-weight: 700;
            z-index: 2;
            /*filter: drop-shadow( 0 .3vmax .8vmax rgb(0, 0, 0, .5));*/
            filter: drop-shadow( 0 .1vmax 1vmax whitesmoke);
            user-select: none;
        }

        button{
            left: 0;
            right: 0;
            margin-inline: auto;
            z-index: 2;
            height: fit-content;
            width: fit-content;
            padding-bottom: .5vmax;
            padding-top: .7vmax;
            padding-inline: 1vmax;
            border: none;
            border-radius: .3vmax;
            color: rgb(30, 30, 100);
            font-size: 1.5vmax;
            font-weight: 700;
            box-shadow: 0 .2vmax .5vmax -0.2vmax rgb(50, 50, 50);
            background-color:whitesmoke;
            cursor: pointer;
        }

        button:hover{
            box-shadow: none;
            transition: all .3s;
        }

    .slide-forward-enter-active {
        animation: slide-right-in 1s ease-out;
    }
    .slide-forward-leave-active {
        animation: slide-right-out 1s ease-out;
    }

    .slide-back-enter-active {
        animation: slide-left-in 1s ease-out;
    }
    .slide-back-leave-active {
        animation: slide-left-out 1s ease-out;
    }

    @keyframes slide-right-out{
        from  { transform: translateX(0%);}
        to { transform: translateX(100%);} 
    }
    @keyframes slide-right-in{
        from  { transform: translateX(-100%);}
        to { transform: translateX(0);} 
    }

    @keyframes slide-left-out{
        from  { transform: translateX(0%);}
        to { transform: translateX(-100%);} 
    }
    @keyframes slide-left-in{
        from  { transform: translateX(100%);}
        to { transform: translateX(0);} 
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity 2s;
    }
    .fade-enter, .fade-leave-to{
        opacity: 0;
    }

    



    @media screen and (max-width:768px) {
        .slide{
            padding-left: 0;
        }
        img{
            left:0;
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            width: calc(96% - 1vh);
            object-fit: contain;
        }
        button{
            padding-bottom: .8vmax;
            padding-top: 1vmax;
            padding-inline: 1.5vmax;
            font-size: 1.8vmax;
        }

        
        
    }
</style>