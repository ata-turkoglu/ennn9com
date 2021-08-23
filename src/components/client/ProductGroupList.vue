<template>
    <div id="list">
        <div class="section" v-for="(item,index) in getComparisons" :key="index">
            <p class="header">{{item.title}}</p>
            <hr>
            <div class="container">
                <div class="nav" style="left:0">
                    <img class="arrow" src="../../assets/items/left-arrow.png" @click="left($event,index)">
                </div>
                <div class="item-list" ref="itemlist">
                    
                    <div 
                     v-for="(content,indx) in item.contents"
                     :key="indx" 
                     class="item"
                     :style="drag?{cursor:'grabbing'}:null" 
                     @mousedown.prevent="mouse_down()" 
                     @mousemove.prevent="mouse_move($event)" 
                     @mouseup.prevent="mouse_up(item.title,content.id)" 
                     @mouseout="drag=false"
                     @touchstart="touchstart($event,indx)"
                     @touchmove="touchmove($event,index)"
                     @touchend="touchend(item.title,content.id)"
                    >
                        <div class="item-image">
                            <img 
                             :src="content.image" 
                             @mousedown.prevent="mouse_down()" 
                             @mousemove.prevent="mouse_move1($event)" 
                             @mouseup.prevent="mouse_up(item.title,content.id)" 
                             @mouseout="drag=false"
                            >
                        </div>
                        <div class="text">
                            Ennn {{content.adj}}<br>
                            {{content.name}}
                        </div>
                    </div>

                </div>
                <div class="nav" style="right:0">
                    <img class="arrow" src="../../assets/items/right-arrow.png" @click="right($event,index)">
                </div>
            </div>
        </div>
        <!--<div class="section">
            <p class="header">Bebek Ürünleri</p>
            <hr>
            <div class="container">
                
                <div class="nav" style="left:0">
                    <img class="arrow" src="../../assets/items/left-arrow.png" @click="left($event,1)">
                </div>

                <div class="item-list" :style="drag?{cursor: 'grabbing'}:null" @mousedown="mouse_down($event)" @mousemove="mouse_move($event)" @mouseup="drag=false">
                    
                    <div class="item" >
                        <div class="item-image">
                            <img src="../../assets/images/temp.jpg" @mousedown="drag=true" @mousemove="mouse_move1($event)" @mouseup="drag=false">
                        </div>
                        <div class="text">
                            Ennn Uygun <br>
                            Temassız Ateş Ölçerler
                        </div>
                    </div>

                    <div class="item" :style="drag?{cursor: 'grabbing'}:null" @mousedown="drag=true" @mousemove="mouse_move($event)" @mouseup="drag=false">
                        <div class="item-image">
                            <img src="../../assets/images/temp2.jpg" @mousedown="drag=true" @mousemove="mouse_move1($event)" @mouseup="drag=false">
                        </div>
                        <div class="text">
                            Ennn Çok Satılan <br>
                            Kulaktan Ateş Ölçerler
                        </div>
                    </div>

                    <div class="item" :style="drag?{cursor: 'grabbing'}:null" @mousedown="drag=true" @mousemove="mouse_move($event)" @mouseup="drag=false">
                        <div class="item-image">
                            <img src="../../assets/images/temp3.jpg" @mousedown="drag=true" @mousemove="mouse_move1($event)" @mouseup="drag=false">
                        </div>
                        <div class="text">
                            Ennn Uzun Ömürlü <br>
                            Dijital Ateş Ölçerler
                        </div>
                    </div>

                    <div class="item" :style="drag?{cursor: 'grabbing'}:null" @mousedown="drag=true" @mousemove="mouse_move($event)" @mouseup="drag=false">
                        <div class="item-image">
                            <img src="../../assets/images/childseat.jpg" @mousedown="drag=true" @mousemove="mouse_move1($event)" @mouseup="drag=false">
                        </div>
                        <div class="text">
                            Çocuk Bisiklet Koltukları
                        </div>
                    </div>

                    <div class="item" :style="drag?{cursor: 'grabbing'}:null" @mousedown="drag=true" @mousemove="mouse_move($event)" @mouseup="drag=false">
                        <div class="item-image">
                            <img src="../../assets/images/childseat.jpg" @mousedown="drag=true" @mousemove="mouse_move1($event)" @mouseup="drag=false">
                        </div>
                        <div class="text">
                            Çocuk Bisiklet Koltukları
                        </div>
                    </div>

                    <div class="item" :style="drag?{cursor: 'grabbing'}:null" @mousedown="drag=true" @mousemove="mouse_move($event)" @mouseup="drag=false">
                        <div class="item-image">
                            <img src="../../assets/images/stroller.jpg" @mousedown="drag=true" @mousemove="mouse_move1($event)" @mouseup="drag=false">
                        </div>
                        <div class="text">
                            Bebek Arabaları
                        </div>
                    </div>

                    <div class="item" :style="drag?{cursor: 'grabbing'}:null" @mousedown="drag=true" @mousemove="mouse_move($event)" @mouseup="drag=false">
                        <div class="item-image">
                            <img src="../../assets/images/stroller.jpg" @mousedown="drag=true" @mousemove="mouse_move1($event)" @mouseup="drag=false">
                        </div>
                        <div class="text">
                            Bebek Arabaları
                        </div>
                    </div>
                    <div class="item" :style="drag?{cursor: 'grabbing'}:null" @mousedown="drag=true" @mousemove="mouse_move($event)" @mouseup="drag=false">
                        <div class="item-image">
                            <img src="../../assets/images/stroller.jpg" @mousedown="drag=true" @mousemove="mouse_move1($event)" @mouseup="drag=false">
                        </div>
                        <div class="text">
                            Bebek Arabaları
                        </div>
                    </div>
                    <div class="item" :style="drag?{cursor: 'grabbing'}:null" @mousedown="drag=true" @mousemove="mouse_move($event)" @mouseup="drag=false">
                        <div class="item-image">
                            <img src="../../assets/images/stroller.jpg" @mousedown="drag=true" @mousemove="mouse_move1($event)" @mouseup="drag=false">
                        </div>
                        <div class="text">
                            Bebek Arabaları
                        </div>
                    </div>
                    <div class="item" :style="drag?{cursor: 'grabbing'}:null" @mousedown="drag=true" @mousemove="mouse_move($event)" @mouseup="drag=false">
                        <div class="item-image">
                            <img src="../../assets/images/stroller.jpg" @mousedown="drag=true" @mousemove="mouse_move1($event)" @mouseup="drag=false">
                        </div>
                        <div class="text">
                            Bebek Arabaları
                        </div>
                    </div>
                    <div class="item" :style="drag?{cursor: 'grabbing'}:null" @mousedown="drag=true" @mousemove="mouse_move($event)" @mouseup="drag=false">
                        <div class="item-image">
                            <img src="../../assets/images/stroller.jpg" @mousedown="drag=true" @mousemove="mouse_move1($event)" @mouseup="drag=false">
                        </div>
                        <div class="text">
                            Bebek Arabaları
                        </div>
                    </div>
                </div>
                <div class="nav" style="right:0">
                    <img class="arrow" src="../../assets/items/right-arrow.png" @click="right($event,1)">
                </div>
            </div>
        </div>

        <div class="section">
            <p class="header">Anne Ürünleri</p>
            <hr>
            <div class="container">
                
                <div class="nav" style="left:0">
                    <img class="arrow" src="../../assets/items/left-arrow.png" @click="left($event)">
                </div>
                <div class="item-list">
                    
                    <div class="item" :style="drag?{cursor: 'grabbing'}:null" @mousedown="drag=true" @mousemove="mouse_move($event)" @mouseup="drag=false" @mouseout="drag=false">
                        <div class="item-image">
                            <img src="../../assets/images/temp.jpg" @mousedown="drag=true" @mousemove="mouse_move1($event)" @mouseup="drag=false" @mouseout="drag=false">
                        </div>
                        <div class="text">
                            Temassız Ateş Ölçerler
                        </div>
                    </div>

                    <div class="item" :style="drag?{cursor: 'grabbing'}:null" @mousedown="drag=true" @mousemove="mouse_move($event)" @mouseup="drag=false" @mouseout="drag=false">
                        <div class="item-image">
                            <img src="../../assets/images/temp2.jpg" @mousedown="drag=true" @mousemove="mouse_move1($event)" @mouseup="drag=false" @mouseout="drag=false">
                        </div>
                        <div class="text">
                            Kulaktan Ateş Ölçerler
                        </div>
                    </div>

                    <div class="item" :style="drag?{cursor: 'grabbing'}:null" @mousedown="drag=true" @mousemove="mouse_move($event)" @mouseup="drag=false" @mouseout="drag=false">
                        <div class="item-image">
                            <img src="../../assets/images/temp3.jpg" @mousedown="drag=true" @mousemove="mouse_move1($event)" @mouseup="drag=false" @mouseout="drag=false">
                        </div>
                        <div class="text">
                            Dijital Ateş Ölçerler
                        </div>
                    </div>

                    <div class="item" :style="drag?{cursor: 'grabbing'}:null" @mousedown="drag=true" @mousemove="mouse_move($event)" @mouseup="drag=false" @mouseout="drag=false">
                        <div class="item-image">
                            <img src="../../assets/images/childseat.jpg" @mousedown="drag=true" @mousemove="mouse_move1($event)" @mouseup="drag=false" @mouseout="drag=false">
                        </div>
                        <div class="text">
                            Çocuk Bisiklet Koltukları
                        </div>
                    </div>

                    <div class="item" :style="drag?{cursor: 'grabbing'}:null" @mousedown="drag=true" @mousemove="mouse_move($event)" @mouseup="drag=false" @mouseout="drag=false">
                        <div class="item-image">
                            <img src="../../assets/images/childseat.jpg" @mousedown="drag=true" @mousemove="mouse_move1($event)" @mouseup="drag=false" @mouseout="drag=false">
                        </div>
                        <div class="text">
                            Çocuk Bisiklet Koltukları
                        </div>
                    </div>

                    <div class="item" :style="drag?{cursor: 'grabbing'}:null" @mousedown="drag=true" @mousemove="mouse_move($event)" @mouseup="drag=false" @mouseout="drag=false">
                        <div class="item-image">
                            <img src="../../assets/images/stroller.jpg" @mousedown="drag=true" @mousemove="mouse_move1($event)" @mouseup="drag=false" @mouseout="drag=false">
                        </div>
                        <div class="text">
                            Bebek Arabaları
                        </div>
                    </div>

                    <div class="item" :style="drag?{cursor: 'grabbing'}:null" @mousedown="drag=true" @mousemove="mouse_move($event)" @mouseup="drag=false" @mouseout="drag=false">
                        <div class="item-image">
                            <img src="../../assets/images/stroller.jpg" @mousedown="drag=true" @mousemove="mouse_move1($event)" @mouseup="drag=false" @mouseout="drag=false">
                        </div>
                        <div class="text">
                            Bebek Arabaları
                        </div>
                    </div>
                </div>
                <div class="nav" style="right:0">
                    <img class="arrow" src="../../assets/items/right-arrow.png" @click="right($event)">
                </div>
            </div>
        </div>-->
    </div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
    
    data(){
        return{
            drag:false,
            click:null,
            touch:{
                startX:null,
                endX:null,
                swipe:[]
            }
        }
    },

    computed:{
        ...mapGetters(["getFilters","getComparisons"])
    },
    
    methods:{

        push(){
            this.$router.push({name:"ComparisonView", params:{cat:"Bebek",id:"lW3Unst4hvNRuHydHQDq"}})
        },

        mouse_down(){
            this.drag=true
            this.click=new Date().getTime()
        },

        mouse_up(cat,id){
            this.drag=false
            if(new Date().getTime()-this.click<100){
                console.log(cat)
                console.log(id)
                this.$router.push({name:"ComparisonView", params:{cat:cat,id:id}})
            }
        },
        
        mouse_move(event){       
            event.preventDefault();
            event.target.draggable=false
            if(this.drag){
                event.target.parentElement.parentElement.style.cursor="grabbing"
                event.target.parentElement.parentElement.scrollLeft-=event.movementX
            }
        },

        mouse_move1(event){           
            event.preventDefault();
            event.target.draggable=false
            if(this.drag){
                event.target.parentElement.parentElement.parentElement.scrollLeft-=event.movementX
            }
        },

        left(event,index){
            let a=0
                let intrvl = setInterval(()=>{
                    event.target.parentElement.nextSibling.scrollLeft-=a
                    a++
                    if(a==30){
                        clearInterval(intrvl)
                    }
                },20)

            /*if(window.innerWidth>768){
                let a=0
                let intrvl = setInterval(()=>{
                    event.target.parentElement.nextSibling.scrollLeft-=a
                    a++
                    if(a==25){
                        clearInterval(intrvl)
                    }
                },20)
            }else{
                let element = document.getElementsByClassName("item-list")[index]
                element.style.transform="translateX(0vw)"
            }*/
        },

        right(event,index){
            let a=0
            let intrvl = setInterval(()=>{
                event.target.parentElement.previousSibling.scrollLeft+=a
                a++
                if(a==30){
                    clearInterval(intrvl)
                }
            },20)
            /*if(window.innerWidth>768){
                let a=0
                let intrvl = setInterval(()=>{
                    event.target.parentElement.previousSibling.scrollLeft+=a
                    a++
                    if(a==30){
                        clearInterval(intrvl)
                    }
                },20)
            }else{
                let element = document.getElementsByClassName("item-list")[index]
                element.style.transform="translateX(-102vw)"
            }*/
        },

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

        touchmove(event,index){
            this.touch.endX=event.changedTouches[0].clientX
            this.$refs.itemlist[index].scrollLeft-=(this.touch.endX-this.touch.startX)*2
            this.touch.startX=event.changedTouches[0].clientX
        }
    }
}
</script>

<style scoped>
    #list{
        box-sizing: border-box;
        height: 100%;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        margin: 0;
        margin-top: 2vmax;
        padding: 0;
        padding-inline: 1vmax;
    }

        .section{
            box-sizing: border-box;
            height: fit-content;
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
            flex-direction: column;
            margin-bottom: 3vmax;
        }
            .header{
                box-sizing: border-box;
                margin: 0;
                padding: 0;
                text-align: left;
                font-size: 2.5vh;
                font-weight: 700;
                filter: drop-shadow( 0 0 .8vmax rgb(10, 10, 10, .4));
            }
            .section hr{
                width: 50%;
                margin-right: 0;
                margin-left: 0;
            }
            .container{
                box-sizing: border-box;
                height: 100%;
                width: 100%;
                display: flex;
                align-items: center;
                position: relative;
                margin:0;
                overflow: hidden;
            }
                .nav{
                    box-sizing: border-box;
                    position: absolute;
                    height: 100%;
                    width: 1.5vmax;
                    top:0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 1;
                }
                    .arrow{
                        height: 4vmax;
                        width: 100%;
                        cursor: pointer;
                        margin: 0;
                        padding:0;
                    }
                .item-list{
                    position: relative;
                    box-sizing: border-box;
                    height: 100%;
                    width: 100%;
                    display: flex;
                    overflow:hidden;
                    transition: transform .5s ease-in-out
                }
                    .item{
                        height: 20vmax;
                        min-height: 20vmax;
                        max-height: 20vmax;
                        width: 15vmax;
                        min-width: 15vmax;
                        max-width: 15vmax;
                        padding: 0;
                        margin: 1vmax;
                        margin-inline: .5vmax;
                        box-shadow: 0 0 .7vmax -.2vmax grey;                        
                        background-color: whitesmoke;
                        display: grid;
                        grid-template-rows: 75% 25%;
                        grid-template-columns: 100%;
                        overflow: hidden;
                        cursor: pointer;
                        user-select: none;
                    }
                    .item:first-child{
                        margin-left: 0;
                    }
                    .item:last-child{
                        margin-right: 0;
                    }
                    .item:hover{
                        box-shadow: none;
                        /*border: 1px solid rgb(220, 220, 220);*/
                        box-shadow: 0 0 .5vmax -.2vmax rgb(0, 153, 204);
                        transform: translateY(-1vh);
                        transition: transform .2s ease-in;
                    }
                        .item-image{
                            height: 100%;
                            width: 100%;
                            margin: 0;
                            padding: 0;
                            box-sizing: border-box;
                        }
                            .item-image img{
                                height: 100%;
                                width: 100%;
                                margin: 0;
                                object-fit: cover;
                                border-bottom: .3vmax solid lightblue;
                                box-sizing: border-box;
                            }
                        .text{
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            font-size: 1.2vmax;
                            font-weight: 700;
                        }

    @media screen and (max-width:768px) {
        #list{
            padding-inline: 0;
        }
            .header{
                padding-inline: 1vw;
            }
        .item{
            min-width: 33vw;
            min-height: 44vw;
            margin: .5vw;
        }
        .text{
            font-size: 1.3vmax;
            line-height: 1.8vmax;
        }
    }
</style>