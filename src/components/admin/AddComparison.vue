<template>
    <div id="comparison">
        <div id="head-text">
            <div id="head">
                <img :src="imageprev">
                <div class="inputs">
                    <select id="category" v-model="comp.category">
                        <option value="null" disabled selected>Kategori Seçin</option>
                        <option>Hamilelik</option>
                        <option>Bebek</option>
                        <option>Çocuk</option>
                        <option>Moda</option>
                        <option>Kozmetik</option>
                    </select>
                    <input id="header" type="text" placeholder="Başlık" v-model="comp.name">
                    <input type="file" accept="image/*" ref="inputImage" :style="{'display':'none'}" @change="addImage($event)">
                </div>
                <div class="buttons">
                    <button style="background-color:burlywood" @click="$refs.inputImage.click()">Resim Ekle</button>
                    <button @click="addProduct">Ürün Ekle</button>
                    <button style="background-color:lightblue" @click="save">Kaydet</button>
                </div>
            </div>
            <div id="content">
                <textarea placeholder="Giriş" v-model="comp.text1"></textarea>
                <textarea placeholder="Anlatım" v-model="comp.text2"></textarea>
                <textarea placeholder="Genel Özellikler" v-model="comp.text3"></textarea>
            </div>
        </div>

        <div id="container" v-if="products.length>0">
            <div class="product" v-for="(product,index) in products" :key="index">
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
                    <p class="diff-item" v-for="(spec,indx) in product.specs" :key="indx">{{spec}}</p>
                </div>
                <div class="pvideo">
                    <iframe :src="product.videolink" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </div>
        <select-product v-if="select"></select-product>
        <crop-image v-if="cropstart" :parcomp="'addcomparison'" :image="croppingImage"></crop-image>
    </div>
</template>

<script>

import {mapGetters} from "vuex"
import {db} from "../../../firebase" 
import SelectProduct from "./utilities/SelectProduct.vue"
import CropImage from "./utilities/CropImage.vue"
export default {

    components:{
        SelectProduct,
        CropImage
    },

    data(){
        return{
            indx:0,
            comp:{
                image:null,
                category:null,
                name:null,
                text1:null,
                text2:null,
                text3:[],
                productlist:[],
            },
            products:[],
            croppingImage:null,
            file:null,
            imageprev:null,
            select:false,
            cropstart:false,
        }
    },

    computed:{
        ...mapGetters(["getProducts"])
    },

    

    methods:{

        addProduct(event){
            this.select=true
            this.comp.productlist=[]
        },

        addImage(){
            this.croppingImage = null
            this.file = event.target.files[0]
            let reader = new FileReader()
            reader.onload = e=>{
                this.croppingImage=e.target.result
                //this.$refs.cropper.replace(e.target.result)
                this.$refs.cropper.replace(event.target.result)
            }
            reader.readAsDataURL(this.file)
            this.cropstart=true
        },

        save(){
            let conf = confirm("Kayıt edilsin mi?")
            if(conf){
                let lines = this.comp.text3.split("\n")
                this.comp.text3=lines
                for(let i=0; i<this.comp.productlist.length; i++){
                    this.comp.productlist[i]=db.doc("/products/"+this.comp.productlist[i])
                }


                console.log(this.comp)
                this.$store.dispatch("saveComparison",this.comp)
            }
        }
    }
}
</script>

<style scoped>
    #comparison{
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        min-height: 50vh;
        margin: 0;
        padding: 0;
    }
        #head-text{
            box-sizing: border-box;
            margin: 0;
            padding: 1vmax;
            display: flex;
            flex-direction: column;

        }
            #head{
                box-sizing: border-box;
                margin: 0;
                padding: 0;
                display: flex;
                width: 100%;
            }
                #head img{
                    box-sizing: border-box;
                    height: 10vmax;
                    width: 10vmax;
                    margin: 1vmax 1vmax 1vmax 0;
                }
                .inputs{
                    box-sizing: border-box;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    width:30%;
                }
                    #header{
                        box-sizing: border-box;
                        width: 100%;
                        height: 2.5vmax;
                        border-radius: .5vmax ;
                        margin-bottom: 1vmax;
                        outline: none;
                        padding-inline: 1vmax;
                    }
                    #category{
                        box-sizing: border-box;
                        width: 100%;
                        height: 2.5vmax;
                        border-radius: .5vmax ;
                        margin-bottom: 1vmax;
                        outline: none;
                        padding-inline: 1vmax;
                        cursor: pointer;
                    }
                .buttons{
                    box-sizing: border-box;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }
                    .buttons button{
                        box-sizing: border-box;
                        height: 2.5vmax;
                        width: 10vmax;
                        margin-left: 3vmax;
                        margin-block: .3vmax;
                        border-radius: .5vmax;
                        border: none;
                        cursor: pointer;
                        box-shadow: 0 0 .8vmax -.3vmax grey;
                        transition: all .25s;
                    }
                    .buttons button:hover{
                        box-shadow: none;
                    }
            #content{
                box-sizing: border-box;
                margin: 0;
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                grid-template-rows: fit-content;
                grid-gap: 1vmax;
            }
                #content textarea{
                    box-sizing: border-box;
                    border: 1px solid black;
                    width: 100%;
                    min-height: 40vh;
                    font-family: Ubuntu, Helvetica, Arial, sans-serif;
                    -webkit-font-smoothing: antialiased;
                    -moz-osx-font-smoothing: grayscale;
                    padding: 1vmax;
                    border-radius: .5vmax;
                }
        .container{
            box-sizing: border-box;
            width: 100%;
            height: fit-content;
        }
            .product{
            box-sizing: border-box;
            height: 30vh;
            width: 100%;
            padding: 1vmax;
            margin-block: 1vmax;
            display: grid;
            grid-template-columns: 20% 30% 30% 20%;
            grid-template-rows: 100%;
            border-radius: .5vmax;
            box-shadow: 0 0 1vmax -.5vmax grey;
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
</style>