<template>
    <div id="list">
        <div id="nav">
            <div id="filter1">
                <!--<p v-for="(item,index) in getFilters.categories" :key="index" @click="filter1(item.title), isCat=index" :class="{'border1':isCat==index}">{{item.title}}</p>-->
                <p @click="filter1(null), isCat=0" :class="{'border1':isCat==0}">Tümü</p>
                <p @click="filter1('Hamilelik'), isCat=1" :class="{'border1':isCat==1}">Hamilelik</p>
                <p @click="filter1('Bebek'), isCat=2" :class="{'border1':isCat==2}">Bebek</p>
                <p @click="filter1('Çocuk'), isCat=3" :class="{'border1':isCat==3}">Çocuk</p>
                <p @click="filter1('Moda'), isCat=4" :class="{'border1':isCat==4}">Moda</p>
                <p @click="filter1('Kozmetik'), isCat=5" :class="{'border1':isCat==5}">Kozmetik</p>
            </div>
            <div id="filter2">
                <p v-for="(item,index) in subCategories" :key="index" @click="filter2(item),isSub=index" :class="{'border2':isSub==index}">{{item}}</p>
            </div>
        </div>
        <div class="container">
            <div class="product" v-for="(item,index) in getProducts" :key="index">
                <div class="pimage">
                    <product-slider class="slider" :images="item.imageURLs"></product-slider>
                </div>
                <div class="content">
                    <div class="brand">
                        <p class="text1">{{item.brand}}</p>
                        <p class="text2">{{item.model}}</p>
                    </div>
                    <p class="text3" v-for="(spec,indx) in item.specs" :key="indx">{{spec}}</p>
                </div>
            </div>
            <div class="product">
                <div class="pimage">
                    <img src="../../assets/images/product/bebek/30.jpg">
                </div>
                <div class="content">
                    <p class="text1">Kız Çocuk Alt Üst</p>
                </div>
            </div>
            <div class="product">
                <div class="pimage">
                    <img src="../../assets/images/product/bebek/3.jpg">
                </div>
                <div class="content">
                    <p class="text1">Kız Çocuk Elbise</p>
                </div>
            </div>
            <div class="product">
                <div class="pimage">
                    <img src="../../assets/images/product/bebek/4.jpg">
                </div>
                <div class="content">
                    <p class="text1">Erkek Çocuk Takım</p>
                </div>
            </div>
            <div class="product">
                <div class="pimage">
                    <img src="../../assets/images/product/bebek/5.jpg">
                </div>
                <div class="content">
                    <p class="text1">Erkek Bebek Takım</p>
                </div>
            </div>
            <div class="product">
                <div class="pimage">
                    <img src="../../assets/images/product/bebek/6.jpg">
                </div>
                <div class="content">
                    <p class="text1">Mavi Bebek Tulum</p>
                </div>
            </div>
            <div class="product">
                <div class="pimage">
                    <img src="../../assets/images/product/bebek/7.jpg">
                </div>
                <div class="content">
                    <p class="text1">Erkek Çocuk Tshirt</p>
                </div>
            </div>
            <div class="product">
                <div class="pimage">
                    <img src="../../assets/images/product/bebek/8.jpg">
                </div>
                <div class="content">
                    <p class="text1">Pembe Bebek Takım</p>
                </div>
            </div>
            <div class="product">
                <div class="pimage">
                    <img src="../../assets/images/product/bebek/9.jpg">
                </div>
                <div class="content">
                    <p class="text1">Erkek Çocuk Şort</p>
                </div>
            </div>
            <div class="product">
                <div class="pimage">
                    <img src="../../assets/images/product/bebek/10.jpg">
                </div>
                <div class="content">
                    <p class="text1">3'lü Kukla Oyuncak</p>
                </div>
            </div>
            <div class="product">
                <div class="pimage">
                    <img src="../../assets/images/product/bebek/11.jpg">
                </div>
                <div class="content">
                    <p class="text1">Çıngırak</p>
                </div>
            </div>
            <div class="product">
                <div class="pimage">
                    <img src="../../assets/images/product/bebek/12.jpg">
                </div>
                <div class="content">
                    <p class="text1">Tekerli Ördek</p>
                </div>
            </div>
            <div class="product">
                <div class="pimage">
                    <img src="../../assets/images/product/bebek/13.jpg">
                </div>
                <div class="content">
                    <p class="text1">Kurbağa Oyuncak</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ProductSlider from "./ProductSlider.vue"
import { mapGetters } from "vuex"
export default {

    components:{
        ProductSlider
    },
    
    data(){
        return{
            filters:{
                categories:[]
            },
            subCategories:[],
            isCat:0,
            isSub:null
        }
    },

    computed:{
        ...mapGetters(["getProducts","getFilters"])
    },

    created(){
        this.filters=this.getFilters
    },

    methods:{

        filter1(value){
            this.isSub=null
            this.$store.commit("setFilter1",value)
            this.$store.commit("setFilter2",null)
            if(value==null){
                this.subCategories=[]
            }else{
                setTimeout(() => {
                    this.subCategories=this.filters.categories.find(cat=>cat.title==value).sub
                }, 500);
            }
        },

        filter2(value){
            this.$store.commit("setFilter2",value)
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

    #nav{
        box-sizing: border-box;
        height: fit-content;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items:stretch;
        justify-content:center;    
    }

        #filter1{
            box-sizing: border-box;
            width: 100%;
            height: fit-content;
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
        }
            #filter1 p{
                margin: 0;
                padding-block: .3vmax;
                padding-inline: .5vmax;
                margin-right:2vmax;
                margin-bottom: 1vmax;
                cursor: pointer;
                position: relative;
            }
            #filter1 p:after{
                content: "";
                position: absolute;
                bottom: -4%;
                background-color: rgb(30, 30, 100);
                height: 1px;
                width: 200%;
                left:-50%
            }

        #filter2{
            box-sizing: border-box;
            width: 100%;
            height: fit-content;
            margin: 0;
            padding: 0;
            left: 50%;
            top: 50%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-end;
        }
            #filter2 p{
                margin: 0;
                padding-block: .3vmax;
                padding-inline: .5vmax;
                margin-right:2vmax;
                margin-bottom: 1vmax;
                cursor: pointer;
                font-size: .9vmax;
            }

            .border1{
                border-radius: .5vmax .5vmax 0 0;
                border: 1px solid rgb(30, 30, 100);
            }
            .border2{
                border-radius: 1vmax;
                border: 1px solid black;
            }

    .container{
        box-sizing: border-box;
        width: 100%;
        height: 40vh;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        margin-top: 2vmax;
    }
        .product{
            position: relative;
            box-sizing: border-box;
            margin: 1.5vmax;
            padding: 0;
            height: 12vmax;
            width: 12vmax;
            cursor: pointer;
            box-shadow: 0 0 1vmax -.2vmax grey;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            overflow: hidden;
            border-radius: .5vmax;
            transition: all .5s ease ;
        }
        .product:hover{
            height: 20vmax;
            
        }
        .product .pimage{
            width: 12vmax;
            min-height: 12vmax;
            height: 12vmax;
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }
            .slider{
                height: 100%;
                min-width: 100%;
                width: 100%;
                object-fit: cover;
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                overflow: hidden;
                z-index: 1;
            }
            .pimage img{
                height: 100%;
                min-width: 100%;
                width: 100%;
                object-fit: cover;
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                overflow: hidden;
                z-index: 1;
            }
        .product .content{
            height: 8vmax;
            width: 12vmax;
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            display: none;
            animation: show 2s ease;  
        }
            .brand{
                box-sizing: border-box;
                width: 100%;
                height: fit-content;
                margin-block: 1vmax;
                display: flex;
                flex-direction: row;
                align-items: baseline;
                justify-content: center;
            }
                .text1{
                    font-size: 1.1vmax;
                    margin: 0;
                    margin-right: 1vmax;
                    padding:0;
                }
                .text2{
                    font-size: .8vmax; 
                    margin: 0;
                    padding:0;
                }
            .text3{
                font-size: .7vmax;
            }
        .product:hover .content{
                display: block;
        } 

        @keyframes show{
            from{
                opacity: 0;
            }
            to{
                opacity: 1;
            }
        }

    @media screen and (max-width:768px) {
        #filter1{
            width: 100%;
        }
            #filter1 p{
                font-size: 1.5vmax;
            }
            #filter1 p::after{
                display: none;
            }
        #filter2{
            width:100%;
            flex-wrap: wrap;
        }
            #filter2 p{
                font-size: 1vmax;
            }
        .container{
            display: grid;
            grid-template-columns: 45vw 45vw;
            grid-template-rows: fit-content;
            grid-auto-flow: row dense;
            grid-gap: 2vmax;
            height: 100%;
        }
            .product{
                height: 40vw;
                width: 40vw;
            }
            .product:hover{
                height: 70vw;     
            }
            .product .pimage{
                width: 40vw;
                min-height: 40vw;
                height: 40vw;
            }
            .product .content{
                width: 40vw;
                height: 30vw;
            }

                    .text1{
                        font-size: 2.1vmax;
                    }
                    .text2{
                        font-size: 1.6vmax; 
                    }
                .text3{
                    font-size: 1.3vmax;
                }
    }
</style>