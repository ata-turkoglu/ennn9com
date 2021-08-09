<template>
    <div id="newslist">
        <div v-if="mobile" class="news-head2">
                <p>Haberler</p>
        </div>
        <div
         id="n-item-list"
         :style="drag?{cursor:'grabbing'}:null"
         @touchstart="touchstart($event)"
         @touchmove="touchmove($event)"
         @touchend="touchend($event)"
         @mousedown="mouse_down($event)" 
         @mousemove="mouse_move($event)" 
         @mouseup="mouse_up($event)" 
         @mouseout="drag=false"
        >
            <div v-if="!mobile" class="news-head">
                <p>Haberler</p>
            </div>
            <div class="news-item">
                <img class="news-img" src="../../../assets/images/news/n1.jpg">
                <p class="news-text"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque esse, qui iure sint minus maiores quisquam ducimus molestias nisi totam possimus cumque sequi quidem repudiandae ex odit ab similique accusantium. Sint minus maiores quisquam ducimus molestias nisi totam possimus cumque sequi quidem repudiandae ex odit ab similique accusantium. cumque sequi quidem repudiandae ex odit ab similique accusantium.</p>
                <button class="news-btn">Okumaya Devam Et</button>
            </div>
            <div class="news-item">
                <img class="news-img" src="../../../assets/images/news/n2.jpg">
                <p class="news-text"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque esse, qui iure sint minus maiores quisquam ducimus molestias nisi totam possimus cumque sequi quidem repudiandae ex odit ab similique accusantium. Sint minus maiores quisquam ducimus molestias nisi totam possimus cumque sequi quidem repudiandae ex odit ab similique accusantium. cumque sequi quidem repudiandae ex odit ab similique accusantium.</p>
                <button class="news-btn">Okumaya Devam Et</button>
            </div>
            <div class="news-item">
                <img class="news-img" src="../../../assets/images/news/n3.jpg">
                <p class="news-text"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque esse, qui iure sint minus maiores quisquam ducimus molestias nisi totam possimus cumque sequi quidem repudiandae ex odit ab similique accusantium. Sint minus maiores quisquam ducimus molestias nisi totam possimus cumque sequi quidem repudiandae ex odit ab similique accusantium. cumque sequi quidem repudiandae ex odit ab similique accusantium.</p>
                <button class="news-btn">Okumaya Devam Et</button>
            </div>
            <div class="news-item">
                <img class="news-img" src="../../../assets/images/news/n4.jpg">
                <p class="news-text"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque esse, qui iure sint minus maiores quisquam ducimus molestias nisi totam possimus cumque sequi quidem repudiandae ex odit ab similique accusantium. Sint minus maiores quisquam ducimus molestias nisi totam possimus cumque sequi quidem repudiandae ex odit ab similique accusantium. cumque sequi quidem repudiandae ex odit ab similique accusantium.</p>
                <button class="news-btn">Okumaya Devam Et</button>
            </div>
            <div class="news-item">
                <img class="news-img" src="../../../assets/images/news/n5.jpg">
                <p class="news-text"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque esse, qui iure sint minus maiores quisquam ducimus molestias nisi totam possimus cumque sequi quidem repudiandae ex odit ab similique accusantium. Sint minus maiores quisquam ducimus molestias nisi totam possimus cumque sequi quidem repudiandae ex odit ab similique accusantium. cumque sequi quidem repudiandae ex odit ab similique accusantium.</p>
                <button class="news-btn">Okumaya Devam Et</button>
            </div>
            <div class="news-item">
                <img class="news-img" src="../../../assets/images/news/n6.jpg">
                <p class="news-text"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque esse, qui iure sint minus maiores quisquam ducimus molestias nisi totam possimus cumque sequi quidem repudiandae ex odit ab similique accusantium. Sint minus maiores quisquam ducimus molestias nisi totam possimus cumque sequi quidem repudiandae ex odit ab similique accusantium. cumque sequi quidem repudiandae ex odit ab similique accusantium.</p>
                <button class="news-btn">Okumaya Devam Et</button>
            </div>
            <div class="news-item">
                <img class="news-img" src="../../../assets/images/news/n7.jpg">
                <p class="news-text"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque esse, qui iure sint minus maiores quisquam ducimus molestias nisi totam possimus cumque sequi quidem repudiandae ex odit ab similique accusantium. Sint minus maiores quisquam ducimus molestias nisi totam possimus cumque sequi quidem repudiandae ex odit ab similique accusantium. cumque sequi quidem repudiandae ex odit ab similique accusantium.</p>
                <button class="news-btn">Okumaya Devam Et</button>
            </div>
            <div class="news-item">
                <img class="news-img" src="../../../assets/images/news/n8.jpg">
                <p class="news-text"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque esse, qui iure sint minus maiores quisquam ducimus molestias nisi totam possimus cumque sequi quidem repudiandae ex odit ab similique accusantium. Sint minus maiores quisquam ducimus molestias nisi totam possimus cumque sequi quidem repudiandae ex odit ab similique accusantium. cumque sequi quidem repudiandae ex odit ab similique accusantium.</p>
                <button class="news-btn">Okumaya Devam Et</button>
            </div>
            <div class="news-item">
                <img class="news-img" src="../../../assets/images/news/n9.jpg">
                <p class="news-text"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque esse, qui iure sint minus maiores quisquam ducimus molestias nisi totam possimus cumque sequi quidem repudiandae ex odit ab similique accusantium. Sint minus maiores quisquam ducimus molestias nisi totam possimus cumque sequi quidem repudiandae ex odit ab similique accusantium. cumque sequi quidem repudiandae ex odit ab similique accusantium.</p>
                <button class="news-btn">Okumaya Devam Et</button>
            </div>
            <div class="news-item">
                <img class="news-img" src="../../../assets/images/news/n10.jpg">
                <p class="news-text"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque esse, qui iure sint minus maiores quisquam ducimus molestias nisi totam possimus cumque sequi quidem repudiandae ex odit ab similique accusantium. Sint minus maiores quisquam ducimus molestias nisi totam possimus cumque sequi quidem repudiandae ex odit ab similique accusantium. cumque sequi quidem repudiandae ex odit ab similique accusantium.</p>
                <button class="news-btn">Okumaya Devam Et</button>
            </div>
            <div class="news-item">
                <img class="news-img" src="../../../assets/images/news/n11.jpg">
                <p class="news-text"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque esse, qui iure sint minus maiores quisquam ducimus molestias nisi totam possimus cumque sequi quidem repudiandae ex odit ab similique accusantium. Sint minus maiores quisquam ducimus molestias nisi totam possimus cumque sequi quidem repudiandae ex odit ab similique accusantium. cumque sequi quidem repudiandae ex odit ab similique accusantium.</p>
                <button class="news-btn">Okumaya Devam Et</button>
            </div>
            <div class="news-item">
                <img class="news-img" src="../../../assets/images/news/n12.jpg">
                <p class="news-text"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque esse, qui iure sint minus maiores quisquam ducimus molestias nisi totam possimus cumque sequi quidem repudiandae ex odit ab similique accusantium. Sint minus maiores quisquam ducimus molestias nisi totam possimus cumque sequi quidem repudiandae ex odit ab similique accusantium. cumque sequi quidem repudiandae ex odit ab similique accusantium.</p>
                <button class="news-btn">Okumaya Devam Et</button>
            </div>
            <div class="news-item">
                <img class="news-img" src="../../../assets/images/news/n13.jpg">
                <p class="news-text"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque esse, qui iure sint minus maiores quisquam ducimus molestias nisi totam possimus cumque sequi quidem repudiandae ex odit ab similique accusantium. Sint minus maiores quisquam ducimus molestias nisi totam possimus cumque sequi quidem repudiandae ex odit ab similique accusantium. cumque sequi quidem repudiandae ex odit ab similique accusantium.</p>
                <button class="news-btn">Okumaya Devam Et</button>
            </div>
            <div v-if="!mobile" class="news-head">
                <p>Tümü</p>
            </div>
        </div>
        <div v-if="mobile" class="news-head2">
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
                    endX:null,
                    index:0
                }
            }
        },

        mounted(){
            window.addEventListener("resize",this.resize)
        },
        beforeDestroy(){
            window.removeEventListener("resize",this.resize)
        },

        computed:{
            mobile(){
                return window.innerWidth<768
            }
        },

        methods:{

            resize(){
                if(window.innerWidth<768){
                    //document.getElementById("n-item-list").style.transform="translateX(0)"
                    //document.getElementById("n-item-list").style.scrollLeft="0"
                }else{
                    document.getElementById("n-item-list").style.transform="translateX(0)"
                    document.getElementById("n-item-list").style.scrollLeft="0"
                }
            },
            
            touchstart(event){
                this.click=new Date().getTime()            
                this.touch.startX=event.changedTouches[0].clientX
                console.log(document.getElementById("n-item-list").style)
            },

            touchend(event){
                if(window.innerWidth>768){
                    if(new Date().getTime()-this.click<100){
                        console.log()
                    }
                }else{
                    this.touch.endX=event.changedTouches[0].clientX
                    let product = document.getElementById("n-item-list")

                    if(this.touch.endX<this.touch.startX-20){
                        if(this.touch.index<13-1){
                            this.touch.index++
                            product.style.transform="translateX(-"+(this.touch.index*92)+"vw)"
                        }
                    }
                    else if(this.touch.endX-20>this.touch.startX){
                        if(this.touch.index>0){
                            this.touch.index--
                            product.style.transform="translateX(-"+(this.touch.index*92)+"vw)"
                        }
                    }
                }

            },

            touchmove(event){
                if(window.innerWidth>768){
                    this.touch.endX=event.changedTouches[0].clientX
                    document.getElementById("n-item-list").scrollLeft-=(this.touch.endX-this.touch.startX)*2
                    this.touch.startX=event.changedTouches[0].clientX
                }
            },

            mouse_down(event){
                if(window.innerWidth<768){
                    this.click=new Date().getTime()            
                    this.touch.startX=event.clientX
                }else{
                    this.drag=true
                    this.click=new Date().getTime()
                }

            },

            mouse_up(event){
                if(window.innerWidth<768){
                    event.target.draggable=false
                    this.touch.endX=event.clientX
                    let product = document.getElementById("n-item-list")

                    if(this.touch.endX<this.touch.startX-20){
                        if(this.touch.index<13-1){
                            this.touch.index++
                            product.style.transform="translateX(-"+(this.touch.index*100)+"%)"
                        }
                    }
                    else if(this.touch.endX-20>this.touch.startX){
                        if(this.touch.index>0){
                            this.touch.index--
                            product.style.transform="translateX(-"+(this.touch.index*100)+"%)"
                        }
                    }
                }else{
                    this.drag=false
                    if(new Date().getTime()-this.click<100){
                        //this.$router.push({name:"ComparisonView", params:{cat:cat,id:id}})
                        console.log()
                    }
                }
            },
            
            mouse_move(event){
                if(window.innerWidth>768){
                    //event.stopPropagation();
                    event.preventDefault();
                    event.target.draggable=false
                    if(this.drag){
                        document.getElementById("n-item-list").style.cursor="grabbing"
                        document.getElementById("n-item-list").scrollLeft-=event.movementX*0.7
                    }
                }   
            },
        }
    }
</script>

<style scoped>
    #newslist{
        box-sizing: border-box;
        width: 100%;
        height: 50vh;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        position: relative;
        margin: 0;
        padding:0;
        margin-top: 1vh;
        overflow: hidden;
    }
        .news-head{
            background-color: whitesmoke;
            height: 100%;
            max-width: 2.5vw;
            min-width: 2.5vw;
            display: flex;
            align-items: center;
            justify-content: center;
            box-sizing: border-box;
        }
            .news-head:last-child{
                margin-left: .5vw;
            }
            .news-head p{
                transform: rotate(270deg);
                font-family: Ubuntu, Helvetica, Arial, sans-serif;
                    -webkit-font-smoothing: antialiased;
                    -moz-osx-font-smoothing: grayscale;
                font-weight: 700;
                font-size: 1.2vmax;
                margin: 0;
                padding: 0;
            }
        .news-head2{
            background-color: whitesmoke;
            height: 100%;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            box-sizing: border-box;
            display: none;
        }
            .news-head2 p{
                font-family: Ubuntu, Helvetica, Arial, sans-serif;
                    -webkit-font-smoothing: antialiased;
                    -moz-osx-font-smoothing: grayscale;
                font-weight: 700;
                font-size: 2vmax;
                margin-left: 2vw;
            }
        #n-item-list{
            box-sizing: border-box;
            position: relative;
            margin: 0;
            padding: 0;
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            flex-wrap: nowrap;
            transition: all .3s ease-out;
            overflow:hidden;
            user-select: none;
        }
            .news-item{
                box-sizing: border-box;
                position:relative;
                min-width: 540px;
                width: auto;
                max-width: auto;
                height: 100%;
                margin: 0;
                margin-left: .5vw;
                padding:0;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content:flex-end;
                user-select: none;
            }
            .news-item:first-child{
                margin-left: 0;
            }
                .news-img{
                    box-sizing: border-box;
                    position: absolute;
                    left: 0;
                    top:0;
                    width: 100%;
                    height: 100%;
                    object-fit:cover;
                    margin: 0;
                    padding:0;
                    z-index: 0;
                    filter: brightness(.75);
                    user-select: none;
                }
                .news-text{
                    box-sizing: border-box;
                    margin: 0;
                    padding: 0;
                    padding-inline: 1vw;
                    margin-top: 50%;
                    min-height: 40%;
                    width: 100%;
                    background-color: transparent;
                    color:whitesmoke;
                    text-indent: 4vw;
                    text-align: center;
                    white-space:normal;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    z-index: 1;
                    position: relative;
                    user-select: none;
                }
                .news-text::after{
                    content: "";
                    height: 100%;
                    width: 100%;
                    top:0;
                    left: 0;
                    position: absolute;
                    box-sizing: border-box;
                    background-image: linear-gradient(to bottom, transparent, black);
                }

                .news-btn{
                    box-sizing: border-box;
                    border: none;
                    height: fit-content;
                    width: fit-content;
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
                    font-size: 2vmin;
                    position: absolute;
                    z-index: 1;
                    bottom: 5%;
                    left: 0;
                    right: 0;
                    margin-inline: auto;
                    cursor: pointer;
                    user-select: none;
                }

    @media screen and (max-width:768px) {
        #newslist{
            height: 38vh;
            width: 100%;
            padding: 0;
            flex-direction: column;
            justify-content: flex-start;
        }
            .news-head:first-child{
                display: none;
                width: 8vw;
                background-color: transparent;
                background-image: linear-gradient(to right, whitesmoke, transparent);
            }
            .news-head2:first-child{
                display: flex;
                width: 100%;
                height: 4vh;
                background-color: transparent;
                background-image: linear-gradient(to bottom right, whitesmoke, transparent);
                justify-content: flex-start;
            }
            .news-head:last-child{
                display: none;
                margin-left: 2vw;
                width: 8vw;
                background-color: transparent;
                background-image: linear-gradient(to left, whitesmoke, transparent);
            }
            .news-head2:last-child{
                display: flex;
                width: 100%;
                height: 4vh;
                background-color: transparent;
                background-image: linear-gradient(to top left, whitesmoke, transparent);
                justify-content: flex-end;
                padding-right: 2vw;
            }
                .news-head p{
                    font-size: 2.2vmax;
                }
            #n-item-list{
                min-height: 30vh;
                width: 100%;
                overflow: visible;
                justify-content: flex-start;
            }
            .news-item{
                min-width: 90vw;
                width: 90vw;
                max-width: 90vw;
                margin-left: 2vw;
            }
            .news-item:first-child{
                margin-left: 5vw;
            }
                .news-btn{
                    font-size: 2vmax;
                }
    }
            
</style>