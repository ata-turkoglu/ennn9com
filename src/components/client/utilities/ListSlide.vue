<template>
    <div 
     id="listslide" 
     class="list-slide"
     :style="drag?{cursor:'grabbing'}:null"
     @touchstart="touchstart($event)"
     @touchmove="touchmove($event)"
     @touchend="touchend($event)"
     @mousedown.prevent="mouse_down($event)" 
     @mousemove.prevent="mouse_move($event)" 
     @mouseup.prevent="mouse_up($event)" 
     @mouseout="drag=false"
    >
        <div class="slide-head">
            <p>Son İncelenen Ürünler</p>
        </div>
        <div class="items">
            <div class="item">
                <img src="../../../assets/images/offers/offer1.jpg">
            </div>
            <div class="item">
                <img src="../../../assets/images/offers/offer2.jpg">
            </div>
            <div class="item">
                <img src="../../../assets/images/offers/offer3.jpg">
            </div>
            <div class="item">
                <img src="../../../assets/images/offers/offer4.jpg">
            </div>
            <div class="item">
                <img src="../../../assets/images/offers/offer5.jpg">
            </div>
            <div class="item">
                <img src="../../../assets/images/offers/offer6.jpg">
            </div>
            <div class="item">
                <img src="../../../assets/images/offers/offer7.jpg">
            </div>
            <div class="item">
                <img src="../../../assets/images/offers/offer8.jpg">
            </div>
            <div class="item">
                <img src="../../../assets/images/offers/offer9.jpg">
            </div>
            <div class="item">
                <img src="../../../assets/images/offers/offer10.jpg">
            </div>
            <div class="item">
                <img src="../../../assets/images/offers/offer11.jpg">
            </div>
            <div class="item">
                <img src="../../../assets/images/offers/offer12.jpg">
            </div>
            <div class="item">
                <img src="../../../assets/images/offers/offer13.jpg">
            </div>
            <div class="item">
                <img src="../../../assets/images/offers/offer14.jpg">
            </div>
            <div class="item">
                <img src="../../../assets/images/offers/offer15.jpg">
            </div>
            <div class="item">
                <img src="../../../assets/images/offers/offer16.jpg">
            </div>
            <div class="item">
                <img src="../../../assets/images/offers/offer17.jpg">
            </div>
        </div>
        <div class="slide-head">
            <p>Tümü</p>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                click:null,
                drag:false,
                touch:{
                    startX:null,
                    endX:null
                }
            }
        },
        methods:{
            touchstart(event){
                //event.preventDefault();
                this.click=new Date().getTime()            
                this.touch.startX=event.changedTouches[0].clientX
            },

            touchend(cat,id){
                if(new Date().getTime()-this.click<100){
                    console.log()
                }

            },

            touchmove(event){
                this.touch.endX=event.changedTouches[0].clientX
                document.getElementById("listslide").scrollLeft-=(this.touch.endX-this.touch.startX)*2
                this.touch.startX=event.changedTouches[0].clientX
            },

            mouse_down(event){
                this.drag=true
                this.click=new Date().getTime()
                this.touch.startX=event.clientX
            },

            mouse_up(event){
                this.drag=false
                this.touch.endX=event.clientX
                let time = new Date().getTime()-this.click
                let distance = this.touch.endX-this.touch.startX
                let v = distance/time
                if(new Date().getTime()-this.click<100){
                    //this.$router.push({name:"ComparisonView", params:{cat:cat,id:id}})
                    console.log()
                }else{
                    document.getElementById("listslide").style.scrollBehavior="smooth"
                    if(v<0 && Math.abs(v)>1.3){
                        document.getElementById("listslide").scrollLeft+=600
                    }
                    else if(v>0 && Math.abs(v)>1.3){
                        document.getElementById("listslide").scrollLeft-=600
                    }
                }
            },
            
            mouse_move(event){       
                //event.preventDefault();
                document.getElementById("listslide").style.scrollBehavior="unset"
                event.target.draggable=false
                if(this.drag){
                    document.getElementById("listslide").style.cursor="grabbing"
                    document.getElementById("listslide").scrollLeft-=event.movementX*0.7
                }
            },
        }
    }
</script>

<style scoped>
    .list-slide{
        position: relative;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin: 0;
        padding:0;
        height: 25vh;
        overflow: hidden;
        margin-top: 1vh;
    }
        .slide-head{
            position: relative;
            display: flex;
            align-items: center;
            margin: 0;
            padding: 0;
            height: 100%;
            width: fit-content;
            background-color: whitesmoke;
            padding-inline: 2vmax;
        }
            .slide-head p{
                box-sizing: border-box;
                margin: 0;
                padding: 0;
                font-weight: 700;
            }
        .items{
            display: flex;
            box-sizing: border-box;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            flex-wrap: nowrap;
            height: 100%;
            width: fit-content;
            margin: 0;
        }
            .item{
                position: relative;
                display: flex;
                box-sizing: border-box;
                height: 100%;
                width: fit-content;
                padding-left:1vh;
            }
                .item img{
                    box-sizing: border-box;
                    height: 100%;
                    width: auto;
                }
                .item p{
                    position: absolute;
                    bottom:0;
                    right: 0;
                    margin: 0;
                    padding: 0;
                    color: red;
                    z-index: 1;
                    background-color: white;
                }

    @media screen and (max-width:768px) {
        .list-slide{
            height: 17vh;
            margin-top: 1vh;
        }
        .item{
            padding-left:1vh;
        }
        .item:last-child{
            padding-right: 1vh;
        }

        .slide-head:first-child{
            background-color: transparent;
            background-image: linear-gradient(to right, whitesmoke, transparent);
        }
        .slide-head:last-child{
            background-color: transparent;
            background-image: linear-gradient(to left, whitesmoke, transparent);
        }
    }
</style>