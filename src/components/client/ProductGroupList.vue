<template>
    <div id="list">
        <div class="section" v-for="(item,index) in getComparisons" :key="index">
            <p class="header">{{item.title}}</p>
            <hr>
            <div class="container">
                <div class="nav">
                    <img class="arrow" src="../../assets/items/left-arrow.png" @click="left($event)">
                </div>
                <div class="item-list">
                    
                    <div v-for="(content,indx) in item.contents" :key="indx" class="item" :style="drag?{cursor: 'grabbing'}:null" @mousedown="drag=true" @mousemove="mouse_move($event)" @mouseup="drag=false" @mouseout="drag=false" @click="gotoComp(item.title,content.id)">
                        <div class="item-image">
                            <img :src="content.image" @mousedown="drag=true" @mousemove="mouse_move1($event)" @mouseup="drag=false" @mouseout="drag=false">
                        </div>
                        <div class="text">
                            {{content.name}}
                        </div>
                    </div>

                </div>
                <div class="nav">
                    <img class="arrow" src="../../assets/items/right-arrow.png" @click="right($event)">
                </div>
            </div>
        </div>
        <div class="section">
            <p class="header">Bebek Ürünleri</p>
            <hr>
            <div class="container">
                
                <div class="nav">
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
                <div class="nav">
                    <img class="arrow" src="../../assets/items/right-arrow.png" @click="right($event)">
                </div>
            </div>
        </div>

        <div class="section">
            <p class="header">Anne Ürünleri</p>
            <hr>
            <div class="container">
                
                <div class="nav">
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
                <div class="nav">
                    <img class="arrow" src="../../assets/items/right-arrow.png" @click="right($event)">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex"
export default {
    
    data(){
        return{
            drag:false
        }
    },

    computed:{
        ...mapGetters(["getFilters","getComparisons"])
    },

    mounted(){
        this.$store.dispatch("getComparisons")
    },

    methods:{
        
        mouse_move(event){
            event.target.draggable=false
            if(this.drag){
                event.target.parentElement.parentElement.scrollLeft-=event.movementX
            }
        },

        mouse_move1(event){
            event.target.draggable=false
            if(this.drag){
                event.target.parentElement.parentElement.parentElement.scrollLeft-=event.movementX
            }
        },

        left(event){
            let a=0
            let intrvl = setInterval(()=>{
                event.target.parentElement.nextSibling.scrollLeft-=a
                a++
                if(a==25){
                    clearInterval(intrvl)
                }
            },20)
        },

        right(event){
            let a=0
            let intrvl = setInterval(()=>{
                event.target.parentElement.previousSibling.scrollLeft+=a
                a++
                if(a==25){
                    clearInterval(intrvl)
                }
            },20)
        },

        gotoComp(cat,id){
            this.$router.push({name:"ComparisonView", params:{cat:cat,id:id}})
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
                font-size: 1.2vmax;
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
                
            }
                .nav{
                    height: 100%;
                    width: 2vmax;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                    .arrow{
                        height: 4vmax;
                        width: 100%;
                        cursor: pointer;
                    }
                .item-list{
                    position: relative;
                    box-sizing: border-box;
                    height: 100%;
                    width: 100%;
                    display: flex;
                    overflow: hidden;
                }
                    .item{
                        height: 15vmax;
                        min-height: 15vmax;
                        max-height: 15vmax;
                        width: 15vmax;
                        min-width: 15vmax;
                        max-width: 15vmax;
                        padding: 0;
                        margin: 1vmax;
                        border-radius: .5vmax;
                        box-shadow: 0 0 1vmax -.2vmax grey;
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
</style>