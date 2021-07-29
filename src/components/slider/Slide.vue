<template>
    <transition name="slide-forward" mode="out-in">
        <div class="slide" v-show="visible">
            <img :src="image.image">
            <transition name="fade">
                <div id="info">
                    <p>Beraber Oynayabileceğiniz Oyunlar</p>
                    <button>İncele</button>
                </div>
            </transition>
        </div>
    </transition>
</template>

<script>
export default {
    
    props:["image"],
    
    computed:{
        visible(){
            return this.image.index==this.$parent.index
        },
        dir(){
            return this.$parent.slideDirection
        }
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
        padding-left: 1vmax;
    }
    img{
        /*border-radius: .5vmax 0 0 .5vmax;
        box-shadow: -.2vmax .2vmax .5vmax -0.2vmax rgb(50, 50, 50);*/
        z-index: 1;
        position: absolute;
        left: 10px;
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
        width: 94%;
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
        animation: slide-right-in 2s ease-in;
    }
    .slide-forward-leave-active {
        animation: slide-right-out 2s ease-in;
    }
    @keyframes slide-right-out{
        from  { transform: translateX(0%);}
        to { transform: translateX(200%);} 
    }
    @keyframes slide-right-in{
        from  { transform: translateX(200%);}
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
            left:0
        }
    }
</style>