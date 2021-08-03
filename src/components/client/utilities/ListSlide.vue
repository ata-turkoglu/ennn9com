<template>
    <div 
     id="listslide" 
     class="list-slide"
     :style="drag?{cursor:'grabbing'}:null"
     @touchstart="touchstart($event)"
     @touchmove="touchmove($event)"
     @touchend="touchend()"
     @mousedown.prevent="mouse_down()" 
     @mousemove.prevent="mouse_move($event)" 
     @mouseup.prevent="mouse_up($event)" 
     @mouseout="drag=false"
    >
        <div class="slide-head">
            <p>Son İncelenen Ürünler</p>
        </div>
        <div class="items">
            <div class="item">
                <img src="../../../assets/images/offer1.jpg">
                <p>90 TL</p>
            </div>
            <div class="item">
                <img src="../../../assets/images/offer2.jpg">
                <p>200 TL</p>
            </div>
            <div class="item">
                <img src="../../../assets/images/offer3.jpg">
                <p>375 TL</p>
            </div>
            <div class="item">
                <img src="../../../assets/images/offer4.jpg">
                <p>4000 TL</p>
            </div>
            <div class="item">
                <img src="../../../assets/images/offer5.jpg">
                <p>150 TL</p>
            </div>
            <div class="item">
                <img src="../../../assets/images/offer6.jpg">
                <p>900 TL</p>
            </div>
            <div class="item">
                <img src="../../../assets/images/offer7.jpg">
                <p>100 TL</p>
            </div>
            <div class="item">
                <img src="../../../assets/images/offer1.jpg">
                <p>90 TL</p>
            </div>
            <div class="item">
                <img src="../../../assets/images/offer2.jpg">
                <p>200 TL</p>
            </div>
            <div class="item">
                <img src="../../../assets/images/offer3.jpg">
                <p>375 TL</p>
            </div>
            <div class="item">
                <img src="../../../assets/images/offer4.jpg">
                <p>4000 TL</p>
            </div>
            <div class="item">
                <img src="../../../assets/images/offer5.jpg">
                <p>150 TL</p>
            </div>
            <div class="item">
                <img src="../../../assets/images/offer6.jpg">
                <p>900 TL</p>
            </div>
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
                event.preventDefault();
                this.click=new Date().getTime()            
                this.touch.startX=event.changedTouches[0].clientX
            },

            touchend(cat,id){
                if(new Date().getTime()-this.click<100){
                    this.$router.push({name:"ComparisonView", params:{cat:cat,id:id}})
                }

            },

            touchmove(event){
                this.touch.endX=event.changedTouches[0].clientX
                document.getElementById("listslide").scrollLeft-=(this.touch.endX-this.touch.startX)*2
                this.touch.startX=event.changedTouches[0].clientX
            },

            mouse_down(){
                this.drag=true
                this.click=new Date().getTime()
            },

            mouse_up(event){
                this.drag=false
                if(new Date().getTime()-this.click<100){
                    //this.$router.push({name:"ComparisonView", params:{cat:cat,id:id}})
                    console.log()
                }
            },
            
            mouse_move(event){       
                event.preventDefault();
                event.target.draggable=false
                if(this.drag){
                    document.getElementById("listslide").style.cursor="grabbing"
                    document.getElementById("listslide").scrollLeft-=event.movementX
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
        height: 17vh;
        overflow: hidden;
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
</style>