<template>
    <div id="select">
        <div id="view">
            <div id="filters">
                <div class="filtergroup">
                    <label for="filter1">Kategori 1</label>
                    <select id="filter1" @change="onCat1()" v-model="category1">
                        <option disabled selected>Kategori 1 Seçin</option>
                        <option v-for="(item,index) in getFilters.categories" :key="index">{{item.title}}</option>
                    </select>
                </div>
                <div class="filtergroup">
                    <label for="filter2">Kategori 2</label>
                    <select id="filter2" @change="onCat2()" v-model="category2">
                        <option disabled selected>Kategori 2 Seçin</option>
                        <option v-for="(item,index) in categories2" :key="index">{{item}}</option>
                    </select>
                </div>
                <div class="filtergroup">
                    <label for="filter3">Kategori 3</label>
                    <select id="filter3" @change="onCat3()" v-model="category3">
                        <option disabled selected>Kategori 3 Seçin</option>
                        <option v-for="(item,index) in categories3" :key="index">{{item}}</option>
                    </select>
                </div>
            </div>
            <div id="list">
                <div class="listitem" v-for="(product,index) in products" :key="index">
                    <button @click="selectProduct(product.id,index)">+</button>
                    <img :src="product.imageURLs[0]">
                    <div class="item">
                        <p class="brand">{{product.brand}}</p>
                        <p class="model">{{product.model}}</p>
                        <p class="id">{{product.id}}</p>
                    </div>
                </div>
            </div>
            <button id="close" @click="close">Bitti</button>
        </div>
    </div>
</template>

<script>

import {mapGetters} from "vuex"

export default {

    data(){
        return{
            category1:null,
            categories2:[],
            category2:null,
            categories3:[],
            category3:null,
            productlist:[],
            products:[],
        }
    },

    computed:{
        ...mapGetters(["getProducts","getFilters"])
    },

    methods:{

        onCat1(){
            let list = this.getFilters.categories.filter(e=>{
                return e.title==this.category1
            })
            this.categories2=list[0].sub
        },

        onCat2(){
            this.categories3 = new Set(this.getProducts.filter(product=>{
                return product.category1==this.category1 && product.category2==this.category2
            }).map(p=>{
                return p.category3
            }))
        },

        onCat3(){
            this.products=[]
            this.products=this.getProducts.filter(product=>{
                return product.category1==this.category1 && product.category2==this.category2 && product.category3==this.category3
            })
            console.log(this.products)
        },

        selectProduct(id,index){
            if(this.$parent.comp.productlist.includes(id)){
                let elem = document.getElementById("list").children
                elem[index].firstChild.innerHTML="+"
                let indx = this.$parent.comp.productlist.indexOf(id)
                this.$parent.comp.productlist.splice(indx,1)
            }else{
                let elem = document.getElementById("list").children
                elem[index].firstChild.innerHTML="✔"
                this.$parent.comp.productlist.push(id)
            }
        },

        close(){
            this.$parent.select=false
            this.$parent.products=this.getProducts.filter(p=>{
                return this.$parent.comp.productlist.includes(p.id)
            })
        }

    }

}
</script>

<style scoped>
    #select{
        box-sizing: border-box;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    #select:after{
        content: "";
        box-sizing: border-box;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background-color: lightgray;
        opacity: .8;
        filter: blur(5px);
    }
        #view{
            box-sizing: border-box;
            width: 70vw;
            min-height: 70vh;
            height: fit-content;
            background: whitesmoke;
            z-index: 1;
            box-shadow: 0 0 .8vmax -.3vmax grey;
            border-radius: .5vmax;
            padding: 1vmax;
        }
            #filters{
                width: 100%;
                box-sizing: border-box;
                min-height: 5vh;
                height: 5vh;
                display: flex;
                align-items: center;
                justify-content: space-around;
            }
                .filtergroup{
                    width: 50%;
                    height: 100%;
                    box-sizing: border-box;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                    .filtergroup select{
                        width: 60%;
                        min-height: 70%;
                        height: 70%;
                        box-sizing: border-box;
                        border-radius: .5vmax;
                        margin: .5vmax;
                        cursor: pointer;
                        outline: none;
                    }
            #list{
                box-sizing: border-box;
                margin-top: 1vmax;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: center;
                padding: .5vmax;
                overflow: auto;
            }
                .listitem{
                    display: flex;
                    align-items: center;
                    margin-bottom: .5vmax;
                }
                    .listitem button{
                        border-radius: .2vmax;
                        border: none;
                        box-sizing: border-box;
                        font-size: 1.5vmax;
                        cursor:pointer;
                        box-shadow: 0 0 .7vmax -.3vmax grey; 
                    }
                    .listitem button:hover{
                        box-shadow: none;
                    }
                    .listitem img{
                        box-sizing: border-box;
                        width: 4vmax;
                        height: 4vmax;
                        object-fit: contain;
                        margin-inline:1vmax;
                    }
                    .item{
                        box-sizing: border-box;
                        display: flex;
                        align-items: center;
                    }
                        .item p{
                            margin-inline: 1vmax;
                        }
            #close{
                border: none;
                box-sizing: border-box;
                font-size: 1vmax;
                padding-inline: 1vmax;
                padding-block: .5vmax;
                border-radius: .5vmax;
                box-shadow: 0 0 .8vmax -.3vmax grey;
                cursor: pointer;
            }
</style>