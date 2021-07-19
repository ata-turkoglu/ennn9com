<template>
    <div id="view">
        <div id="info">
            <div class="head">
                {{item.name}}
            </div>
            <div class="text">
                <div class="section">
                    {{item.text1}}
                </div>
                <div class="section">
                    {{item.text2}}
                </div>
                <div class="section">
                    <p>Genel Özellikleri</p>
                    <ul>
                        <li v-for="(li,indx) in item.text3" :key="indx">{{li}}</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="product" v-for="(product,index) in item.productlist" :key="index" @touchstart="touchstart($event)" @touchend="touchend($event,index)" ref="product">
            <div id="arrow">
            </div>
            <div class="ppic">
                <img :src="product.imageURLs[0]">
            </div>
            <div class="des">
                <div class="des-head">
                    <div class="brand">{{product.brand}}</div>
                    <div class="model">{{product.model}}</div>
                </div>
                <div class="des-text">
                    <p>{{product.origin}}</p>
                </div>
                <button>Detaylı İncele</button>
            </div>
            <div class="differences">
                <div class="pm">
                    <img src="../../assets/items/pm.png">
                </div>
                <p class="diff-item" v-for="(spec,ind) in product.specs" :key="ind">{{spec}}</p>
            </div>
            <div class="pvideo">
                <iframe :src="product.videolink" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from "vuex"
export default {

    props:["cat","id"],

    data(){
        return{
            item:{},
            touch:{
                startX:null,
                endX:null,
                swipe:[]
            }
        }
    },

    computed:{
        ...mapGetters(["getComparisons"])
        
    },

    mounted(){

        this.item = this.getComparisons.find(c=>{
            return c.title==this.cat
        }).contents.find(f=>{
            return f.id==this.id
        })

        this.touch.swipe.length=this.item.productlist.length
        for(let i=0;i<this.touch.swipe.length;i++){
            this.touch.swipe[i]=0
        }
    },

    methods:{
        
        touchstart(event){            
            this.touch.startX=event.changedTouches[0].clientX
        },

        touchend(event,index){
            this.touch.endX=event.changedTouches[0].clientX

            let product = this.$refs.product[index]

            if(this.touch.endX<this.touch.startX){
                if(this.touch.swipe[index]<this.touch.swipe.length-1){
                    this.touch.swipe[index]++
                    product.style.transform="translateX(-"+(this.touch.swipe[index]*100)+"%)"
                }
            }
            else{
                if(this.touch.swipe[index]!=0){
                    this.touch.swipe[index]--
                    product.style.transform="translateX(-"+(this.touch.swipe[index]*100)+"%)"
                }
            }
        }
    }
}
</script>

<style scoped>
    #view{
        height: 100%;
        width: 100%;
        margin: 0;
        margin-top: 2vmax;
        padding: 0;
        padding-inline: 1vmax;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }

        #info{
            height: 100%;
            width: 100%;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding: 1vmax;
        }  
            .head{
                font-size: 2vmax;
            }
            .text{
                margin: 0;
                padding: 0;
                width: 100%;
                box-sizing: border-box;
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                justify-content: space-around;
            }
                .section{
                    box-sizing: border-box;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: flex-start;
                    text-align: left;
                    font-size: 1.2vmax;
                    text-indent: 1.5vmax;
                    line-height: 2vmax;
                    margin-block: 1vmax;
                    margin-right: 2vmax;
                }

                    .section p{
                        margin: 0;
                        padding: 0;
                    }
        .product{
            box-sizing: border-box;
            height: 30vh;
            width: 100%;
            padding: 1vmax;
            margin-block: 1vmax;
            display: grid;
            grid-template-columns: 20% 30% 30% auto;
            grid-template-rows: 100%;
            border-radius: .5vmax;
            box-shadow: 0 0 1vmax -.5vmax grey;
            overflow: hidden;
            transition: all .5s ease-in-out;
        }
            #arrow{
                display: none;
            }
            .des{
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: space-between;
                height:100%;
            }
                .des-head{
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: flex-start;
                }
                    .brand{
                        font-size: 1.3vmax;
                        margin-right: 1vmax;
                        font-weight: 600;
                    }
                    .model{
                        font-size: 1.1vmax;
                    }
                .des button{
                    border: none;
                    font-weight: 700;
                    padding-block: .5vmax;
                    padding-inline: 1vmax;
                    border-radius: .5vmax;
                    background-color: rgb(255, 165, 105);
                    box-shadow: 0 0 .7vmax -.2vmax grey;
                    cursor:pointer;
                }
                .des button:hover{
                    box-shadow:none
                }

            .differences{
                box-sizing: border-box;
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: start;
                overflow: auto;
            }
                .pm{
                    height: 10%;
                    width: 12%;
                    object-fit: contain;
                    display: flex;
                    align-items: center;
                    justify-content: left;
                    margin-bottom: 1vmax;
                }
                    .pm img{
                        height: 100%;
                        width: auto;
                        object-fit: contain;

                    }
                .diff-item{
                    margin: 0;
                    margin-bottom: .2vmax;
                    padding: 0;
                    font-size: .9vmax;
                    color:black;
                    text-align: left;
                }


            .ppic{
                box-sizing: border-box;
                overflow: hidden;
                padding-inline: 1vmax;
            }
                .product img{
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                }

            .pvideo{
                box-sizing: border-box;
                height: 100%;
                width: 100%;
            }
                .pvideo iframe{
                    height: 100%;
                    width: auto;
                }

    @media screen and (max-width:768px) {
    #view{
        padding-inline: 0;
    }
        #info{
            padding: 4vw;
        }
            .head{
                font-size: 2.5vmax;
                margin-bottom: 1vh;
            }
            .text{
                flex-direction: column;
            }
                .section{
                    font-size: 1.8vmax;
                }

        .product{
            height: 50vw;
            width: 100vw;
            /*
            grid-template-columns: 50% 50%;
            grid-template-rows: 30% 25% 45%;
            grid-gap: 1vmax;*/
            margin-block: 2vmax;
            margin-inline: 0;
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            align-items: center;
            overflow: visible;
            justify-content: flex-start;
            position:relative;
            border-radius: none;
            touch-action: auto;
        }
            #arrow{
                display: block;
                box-sizing: border-box;
                position: absolute;
                top:0;
                right: -3%;
                height: 100%;
                width:6%;
                background-image: linear-gradient(to right, white, rgba(30,30,100,.2),white);
            }
            .ppic{
                min-width: 50vw;
                max-height: 100%;
            }
            .des{
                min-width: 50vw;
                max-height: 100%;
            }
                .brand{
                    font-size: 2.2vmax;
                }
                .model{
                    font-size: 2vmax;
                }
            .differences{
                min-width: 100vw;
                max-height: 100%;
                /*grid-area: 2/1;*/
                padding-inline: 1vmax;
            }
                .diff-item{
                    font-size: 1.5vmax;
                }
            .pvideo{
                box-sizing: border-box;
                max-height: 100%;
                min-width: 100vw;
                /*grid-area: 3/1/ span 1/span 2;*/
                margin: 0;
                padding: 0;
            }
                .pvideo iframe{
                    height: 100%;
                    width: auto;
                }
    }
</style>