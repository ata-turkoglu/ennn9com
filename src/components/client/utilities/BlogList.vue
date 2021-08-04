<template>
    <div id="bloglist">
        <div
         id="item-list"
         :style="drag?{cursor:'grabbing'}:null"
         @touchstart="touchstart($event)"
         @touchmove="touchmove($event)"
         @touchend="touchend()"
         @mousedown.prevent="mouse_down()" 
         @mousemove.prevent="mouse_move($event)" 
         @mouseup.prevent="mouse_up($event)" 
         @mouseout="drag=false"
        >
            <div class="blog-item">
                <img class="blog-img" src="../../../assets/images/fashion/f9.jpg">
                <p class="blog-text"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque esse, qui iure sint minus maiores quisquam ducimus molestias nisi totam possimus cumque sequi quidem repudiandae ex odit ab similique accusantium. Sint minus maiores quisquam ducimus molestias nisi totam possimus cumque sequi quidem repudiandae ex odit ab similique accusantium.</p>
                <button class="blog-btn">Okumaya Devam Et</button>
            </div>
            <div class="blog-item">
                <img class="blog-img" src="../../../assets/images/fashion/f10.jpg">
                <p class="blog-text"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque esse, qui iure sint minus maiores quisquam ducimus molestias nisi totam possimus cumque sequi quidem repudiandae ex odit ab similique accusantium. Sint minus maiores quisquam ducimus molestias nisi totam possimus cumque sequi quidem repudiandae ex odit ab similique accusantium.</p>
                <button class="blog-btn">Okumaya Devam Et</button>
            </div>
            <div class="blog-item">
                <img class="blog-img" src="../../../assets/images/fashion/f11.jpg">
                <p class="blog-text"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque esse, qui iure sint minus maiores quisquam ducimus molestias nisi totam possimus cumque sequi quidem repudiandae ex odit ab similique accusantium. Sint minus maiores quisquam ducimus molestias nisi totam possimus cumque sequi quidem repudiandae ex odit ab similique accusantium.</p>
                <button class="blog-btn">Okumaya Devam Et</button>
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
                document.getElementById("item-list").scrollLeft-=(this.touch.endX-this.touch.startX)*2
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
                    document.getElementById("item-list").style.cursor="grabbing"
                    document.getElementById("item-list").scrollLeft-=event.movementX
                }
            },
        }
    }
</script>

<style>
    #bloglist{
        box-sizing: border-box;
        width: 100%;
        height: 50vh;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0;
        padding:0;
        margin-top: 1vh;
    }
        #item-list{
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            flex-wrap: nowrap;
            height: 100%;
            width: fit-content;
            overflow: hidden;
        }
            .blog-item{
                box-sizing: border-box;
                position:relative;
                min-width: 80vw;
                height: 100%;
                margin: 0;
                margin-left: 1vh;
                padding:0;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content:flex-end;
            }
                .blog-img{
                    box-sizing: border-box;
                    position: absolute;
                    left: 0;
                    top:0;
                    width: 100%;
                    height: auto;
                    object-fit:contain;
                    margin: 0;
                    padding:0;
                    z-index: 0;
                }
                .blog-text{
                    box-sizing: border-box;
                    margin: 0;
                    padding: 0;
                    padding-inline: 1vw;
                    margin-top: 50%;
                    height: 35%;
                    width: 100%;
                    background-color: transparent;
                    color:whitesmoke;
                    text-indent: 4vw;
                    text-align: center;
                    white-space:normal;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    z-index: 0;
                }

                .blog-btn{
                    box-sizing: border-box;
                    border: none;
                    height: 15%;
                    width: 100%;
                    margin: 0;
                    padding: 0;
                    z-index: 0;
                    background-color:transparent;
                    color: whitesmoke;
                    align-self: center;
                    justify-self: center;
                    font-family: Ubuntu, Helvetica, Arial, sans-serif;
                    -webkit-font-smoothing: antialiased;
                    -moz-osx-font-smoothing: grayscale;
                    font-size: 2vmax;
                }
</style>