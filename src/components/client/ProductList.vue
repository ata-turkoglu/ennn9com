<template>
    <div id="list">
        <div id="nav">
            <div class="filter">
                <div class="arrow left-arrow">
                    <img src="../../assets/items/left-arrow.png">
                </div>
                <div class="arrow right-arrow">
                    <img src="../../assets/items/right-arrow.png">
                </div>
                <div 
                id="filter1"
                ref="f1"
                tabindex="100"
                @touchstart="touchstart($event)"
                @touchmove="touchmove($event)"
                @touchend="touchend($event)"
                >
                    <!--<p v-for="(item,index) in getFilters.categories" :key="index" @click="filter1(item.title), isCat=index" :class="{'border1':isCat==index}">{{item.title}}</p>-->
                    <p @click="filter1(null), isCat=0" class="filter1-p" :class="{'border1':isCat==0}">Tümü</p>
                    <p @click="filter1('Hamilelik'), isCat=1" class="filter1-p" tabindex="1" :class="{'border1':isCat==1}">Hamilelik</p>
                    <p @click="filter1('Bebek'), isCat=2" class="filter1-p" tabindex="2" :class="{'border1':isCat==2}">Bebek</p>
                    <p @click="filter1('Çocuk'), isCat=3" class="filter1-p" tabindex="3" :class="{'border1':isCat==3}">Çocuk</p>
                    <p @click="filter1('Moda'), isCat=4" class="filter1-p" tabindex="4" :class="{'border1':isCat==4}">Moda</p>
                    <p @click="filter1('Kozmetik'), isCat=5" class="filter1-p" tabindex="5" :class="{'border1':isCat==5}">Kozmetik</p>
                </div>
            </div>
            <div class="filter" style="margin-top:1.5vh">
                <div v-if="isCat>0" class="arrow left-arrow">
                    <img src="../../assets/items/left-arrow.png">
                </div>
                <div v-if="isCat>0" class="arrow right-arrow">
                    <img src="../../assets/items/right-arrow.png">
                </div>
                <div 
                id="filter2"
                ref="f2"
                tabindex="200"
                @touchstart="touchstart($event)"
                @touchmove="touchmove($event)"
                @touchend="touchend($event)"
                >
                    <p v-for="(item,index) in subCategories" :key="index" @click="filter2(item),isSub=index" :tabindex="index" class="filter2-p" :class="{'border2':isSub==index}">{{item}}</p>
                </div>
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
            filt1:null,
            filt2:null,
            filters:{
                categories:[]
            },
            subCategories:[],
            isCat:0,
            isSub:null,

            click:null,
            drag:false,
            touch:{
                startX:null,
                endX:null,
            }
        }
    },

    computed:{
        ...mapGetters(["getProducts","getFilters"])
    },

    created(){
        this.filters=this.getFilters
        window.addEventListener("resize",this.arrows)
    },

    mounted(){
        if(window.innerWidth<768){
            let f1 = this.$refs.f1
            f1.parentElement.firstChild.style.display="none"
            if(f1.clientWidth+25>=f1.scrollWidth){
                f1.parentElement.firstChild.nextSibling.style.display="none"
            }
        }
    },

    beforeDestroy(){
        window.removeEventListener("resize",this.arrows)
    },

    methods:{

        arrows(){
            console.log("sss")
            if(window.innerWidth<768){
                let f1 = this.$refs.f1
                let f2 = this.$refs.f2
                if(f1.clientWidth>=f1.scrollWidth){
                    f1.parentElement.firstChild.style.display="none"
                    f1.parentElement.firstChild.nextSibling.style.display="none"
                }else{
                    f1.parentElement.firstChild.nextSibling.style.display="flex"
                }

                if(f2.clientWidth>=f2.scrollWidth && this.isCat>0){
                    f2.parentElement.firstChild.style.display="none"
                    f2.parentElement.firstChild.nextSibling.style.display="none"
                }else if(f2.clientWidth<f2.scrollWidth && this.isCat>0){
                    f2.parentElement.firstChild.nextSibling.style.display="flex"
                }
            }
        },

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
            
            setTimeout(() => {
                let f2 = this.$refs.f2
                if(f2.scrollWidth<=f2.clientWidth+10 && this.isCat>0){
                    f2.parentElement.firstChild.style.display="none"
                    f2.parentElement.firstChild.nextSibling.style.display="none"
                }else if(f2.scrollWidth>f2.clientWidth && this.isCat>0){
                    f2.parentElement.firstChild.nextSibling.style.display="flex"
                }
            },550);
        },

        filter2(value){
            this.$store.commit("setFilter2",value)
        },

        touchstart(event){
            event.preventDefault();
            this.click=new Date().getTime()            
            this.touch.startX=event.changedTouches[0].clientX
        },

        touchend(event){
            if(new Date().getTime()-this.click<100 && event.target.localName=="p"){
                if(event.target.parentElement.tabIndex==100 || event.target.tabIndex==100){
                    if(event.target.innerText=="Tümü"){
                        this.filter1(null)
                        this.isCat=0
                    }else{
                        this.filter1(event.target.innerText)
                        this.isCat=event.target.tabIndex
                    }
                }else if(event.target.parentElement.tabIndex==200 || event.target.tabIndex==200){
                    this.filter2(event.target.innerText)
                    this.isSub=event.target.tabIndex
                    console.log(this.isSub)
                }
            }

        },

        touchmove(event){
            let f1 = this.$refs.f1
            let f2 = this.$refs.f2
            let sw1 = f1.scrollWidth-f1.clientWidth
            let sw2 = f2.scrollWidth-f2.clientWidth

            this.touch.endX=event.changedTouches[0].clientX

            if(event.target.parentElement.tabIndex==100 || event.target.tabIndex==100){
            
                f1.scrollLeft-=(this.touch.endX-this.touch.startX)*2
                
                if(f1.scrollLeft<f1.clientWidth*0.05){
                    f1.parentElement.firstChild.style.display="none"
                }else if(f1.scrollLeft>sw1-f1.clientWidth*0.05){
                    f1.parentElement.firstChild.nextSibling.style.display="none"
                    f1.parentElement.firstChild.style.display="flex"
                }else{
                    f1.parentElement.firstChild.style.display="flex"
                    f1.parentElement.firstChild.nextSibling.style.display="flex"
                }

            }else if(event.target.parentElement.tabIndex==200 || event.target.tabIndex==200){
                
                f2.scrollLeft-=(this.touch.endX-this.touch.startX)*2
                
                if(f2.scrollLeft<f2.clientWidth*0.05){
                    f2.parentElement.firstChild.style.display="none"
                }else if(f2.scrollLeft>sw2-f2.clientWidth*0.05){
                    f2.parentElement.firstChild.nextSibling.style.display="none"
                    f2.parentElement.firstChild.style.display="flex"
                }else{
                    f2.parentElement.firstChild.style.display="flex"
                    f2.parentElement.firstChild.nextSibling.style.display="flex"
                }
            
            }

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
        margin-top: 0;
        padding-block: 1vh;
        padding-inline: 1vmax;
    }

    #inf{
        margin:0;
        margin-bottom: 1vmax;
        padding: 0;
        font-size: 3vmax;
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
        .arrow{
            display: none;
        }
            .left-arrow{
                display: none;
                left: 0;
                padding-right: 2.5vw;
                background-image: linear-gradient(to right, whitesmoke, whitesmoke, transparent);
            }
            .right-arrow{
                right: -1px;
                padding-left: 2.5vw;
                background-image: linear-gradient(to left, whitesmoke, whitesmoke, transparent);
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
            .filter1-p{
                margin: 0;
                padding-block: .3vmax;
                padding-inline: .5vmax;
                margin-right:2vmax;
                margin-bottom: 1vmax;
                cursor: pointer;
                position: relative;
            }

        #filter2{
            box-sizing: border-box;
            width: 100%;
            height: fit-content;
            margin: 0;
            padding: 0;
            /*left: 50%;
            top: 50%;*/
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-end;
        }
            .filter2-p{
                margin: 0;
                padding-block: .3vmax;
                padding-inline: .5vmax;
                margin-right:2vmax;
                margin-bottom: 1vmax;
                cursor: pointer;
                font-size: .9vmax;
                position: relative;
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
            box-shadow: 0 0 1.7vmax whitesmoke;
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
        #list{
            padding-inline: 0;
            margin-top:.5vh;
        }
        .filter{
            width: 100%;
            height: fit-content;
            position: relative;
            box-sizing: border-box;
        }
            .arrow{
                box-sizing: border-box;
                position:absolute;
                display: flex;
                height: 100%;
                width: fit-content;
                overflow: hidden;
                /*background-color: whitesmoke;*/
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 1;
            }
                .arrow img{
                    height: auto;
                    box-sizing: border-box;
                    width: 1vmax;
                    object-fit: contain;
                }
        #filter1{
            position: relative;
            width: 100%;
            height: fit-content;
            padding: 1vmax;
            background-color: whitesmoke;
            overflow: hidden;
        }
            .filter1-p{
                margin: 0;
                margin-inline: 2.5vmax;
                padding: 0;
                padding-block: .5vmax;
                font-size: 2.1vmax;
                font-weight: 600;
            }
            .filter1-p::after{
                content: "";
                position: absolute;
                height: .3vmax;
                width: 120%;
                left: -10%;
                bottom: -10%;
                transform: scaleX(0);
                background-color: rgb(30, 30, 100);
                transform-origin: bottom;
                transition: transform .25s ease-out;
            }
            .filter1-p:hover:after{
                height: .3vmax;
                transform: scaleX(1);
                transform-origin: bottom;
            }
            .border1{
                border: none;
            }
            .border1::after{
                content: "";
                height: .3vmax;
                position: absolute;
                width: 120%;
                border-radius: .1vmax; 
                transform: none;
            }
        #filter2{
            position: relative;
            width: 100%;
            height: fit-content;
            padding: 1vmax;
            padding-block: 1vmax;
            background-color: whitesmoke;
            overflow: hidden;
            justify-content: flex-start;
        }
            .filter2-p{
                margin: 0;
                padding: 0;
                margin-inline: 2vmax;
                padding-block: 0.5vmax;
                margin-block: 0;
                font-size: 1.6vmax;
                font-weight: 600;
                min-width: 6vmax;
            }
            .filter2-p::after{
                content: "";
                position: absolute;
                height: .2vmax;
                width: 120%;
                left: -10%;
                bottom: -10%;
                transform: scaleX(0);
                background-color: rgb(30, 30, 100);
                transform-origin: bottom;
                transition: transform .25s ease-out;
            }
            .filter2-p:hover:after{
                height: .25vmax;
                transform: scaleX(1);
                transform-origin: bottom;
            }
            .border2{
                border: none;
            }
            .border2::after{
                content: "";
                height: .3vmax;
                position: absolute;
                width: 120%;
                border-radius: .1vmax; 
                transform: none;
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