<template>
    <div id="addProduct">
        <div id="form-container">
            <form id="form" @submit.prevent>
                <div class="form-group">
                    <label for="brand">Marka</label>
                    <input id="brand" type="text" v-model="$v.product.brand.$model">
                </div>
                <div class="form-group">
                    <label for="origin">Model</label>
                    <input id="model" type="text" v-model="$v.product.model.$model">
                </div>
                <div class="form-group">
                    <label for="origin">Menşei</label>
                    <input id="origin" type="text" v-model="$v.product.origin.$model">
                </div>
                <div class="form-group">
                    <label for="cat1">Kategori-1</label>
                    <select id="cat1" @change="onCat1Change()" v-model="$v.product.category1.$model">
                        <option value="null" selected disabled>Kategori-1 Seçin</option>
                        <option v-for="(item, index) in getFilters.categories" :key="index">{{item.title}}</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="cat2">Kategori-2</label>
                    <select id="cat2" v-model="$v.product.category2.$model">
                        <option value="null" selected disabled>Kategori-2 Seçin</option>
                        <option v-for="(item, index) in categories2" :key="index">{{item}}</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="cat3">Kategori-3</label>
                    <input id="cat3" type="text" v-model="$v.product.category3.$model">
                </div>
                <div class="form-group">
                    <label for="link">Link</label>
                    <input id="link" type="text" v-model="$v.product.link.$model">
                </div>
                <div class="form-group">
                    <label for="videolink">Video</label>
                    <input id="videolink" type="text" v-model="$v.product.videolink.$model">
                </div>
                <div class="form-group">
                    <label for="specs">Özellikler</label>
                    <textarea id="specs" :onkeyup="autoGrow('specs')" v-model="$v.product.specs.$model"></textarea>
                </div>
                <div class="form-group">
                    <label for="diff">Farklar</label>
                    <textarea id="diff" :onkeyup="autoGrow('diff')" v-model="$v.product.differences.$model"></textarea>
                </div>
                <div class="form-group">
                    <label for="addimage">Resimler</label>
                    <input type="file" accept="image/*" ref="inputImage" :style="{'display':'none'}" @change="addImage" @input="$v.product.images.$touch()">
                    <button id="inputButton" @click="$refs.inputImage.click()">Ekle</button>
                </div>
                <div class="image-group">
                    <img v-for="(item,index) in imgUrls" :key="index" :src="item">
                </div>
                <div class="button-group">
                    <button id="save" type="button" @click="save()" class="btn" :disabled="$v.$invalid">
                        Kaydet
                        <p class="warn" v-if="$v.$invalid">Boş alanları doldurun</p>
                    </button>
                    <button id="reset" type="reset" @click="reset" class="btn">Temizle - Yeni Ürün</button>
                </div>
            </form>
        </div>
        <crop-image v-if="cropstart" :parcomp="'addproduct'" :image="croppingImage" :ratio="1/1"></crop-image>
    </div>
</template>

<script>

import CropImage from "./utilities/CropImage.vue"
import { mapGetters } from "vuex"
import { required } from    "vuelidate/lib/validators"

export default {

    components:{
        CropImage,
    },

    validations:{
        product:{
            brand:{
                required
            },
            model:{
                required
            },
            origin:{
                required
            },
            category1:{
                required
            },
            category2:{
                required
            },
            category3:{
                required
            },
            link:{
                required
            },
            videolink:{
                required
            },
            specs:{
                required
            },
            differences:{
                
            },
            images:{
                required
            }
        },
    },

    data(){
        return{
            product:{
                brand:null,
                model:null,
                origin:null,
                category1:null,
                category2:null,
                category3:null,
                link:null,
                videolink:null,
                specs:[],
                differences:[],
                images:[],
            },
            categories1:[],
            categories2:[],
            cropstart:false,
            file:null,
            croppingImage:null,
            imgUrls:[]
        }
    },

    computed:{
        ...mapGetters(["getFilters"])
    },

    methods:{

        autoGrow(id){
            setTimeout(() => {
                let spc = document.getElementById(id)
                if (spc.scrollHeight > spc.clientHeight) {
                    spc.style.height = spc.scrollHeight + "px";
                }
            }, 500);

        },

        addImage(event){
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

        onCat1Change(){
            let list = this.getFilters.categories.filter(e=>{
                return e.title==this.product.category1
            })
            this.categories2=list[0].sub
        },

        save(){
            let lines = this.product.specs.split("\n")
            let difflines = this.product.differences.split("\n")
            this.product.specs=lines
            this.product.differences=difflines
            if(this.update){
                let conf=confirm("Ürün Güncellensin mi?")
                if(conf){
                    this.wait=true
                    this.$store.dispatch("updateProduct",[this.product,this.updateid,this.updateimg])
                }
            }else{
                let conf=confirm("Kaydedilsin mi?")
                if(conf){
                    this.wait=true
                    this.$store.dispatch("saveProduct",this.product)
                }
            }
        },

        reset(){
            this.product={
                brand:null,
                model:null,
                origin:null,
                category1:null,
                category2:null,
                category3:null,
                link:null,
                videolink:null,
                specs:[],
                differences:[],
                images:[],
            }
            this.imgUrls=[]
        }


    }

}
</script>

<style scoped>
    #addProduct{
        box-sizing: border-box;
        min-height: 50vh;
        width: 100%;
        display: flex;
        margin-top: 2vmax;
    }
        #form-container{
            box-sizing: border-box;
            height: 100%;
            width: 50%;
        }
            #form{
                box-sizing: border-box;

            }
                .image-group{
                    box-sizing: border-box;
                    padding: .5vmax;
                    width: 25vmax;
                    height: fit-content;
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                    flex-wrap: wrap;
                }
                    .image-group img{
                        width: 7vmax;
                        height: 7vmax;
                        object-fit: cover;
                        margin: .5vmax;
                    }

                .form-group{
                    box-sizing: border-box;
                    padding: .5vmax;
                    width: 25vmax;
                    height: fit-content;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;

                }
                    .form-group input{
                        box-sizing: border-box;
                        width: 15vmax;
                        height: 2vmax;
                        border-radius: .5vmax;
                        outline: none;
                        border: 1px solid black;
                        padding-inline: .5vmax;
                    }
                    .form-group select{
                        box-sizing: border-box;
                        width: 15vmax;
                        height: 2vmax;
                        border-radius: .5vmax;
                        outline: none;
                        border: 1px solid black;
                        padding-inline: .5vmax;
                    }
                    .form-group textarea{
                        box-sizing: border-box;
                        width: 15vmax;
                        max-width: 15vmax;
                        height: 6vmax;
                        border-radius: .5vmax;
                        outline: none;
                        border: 1px solid black;
                        padding-inline: .5vmax;
                        font-family: Ubuntu, Helvetica, Arial, sans-serif;
                        -webkit-font-smoothing: antialiased;
                        -moz-osx-font-smoothing: grayscale;
                    }
                    .form-group button{
                        width: 7.5vmax;
                        height: 2vmax;
                        border-radius: .5vmax;
                        outline: none;
                        border: none;
                        box-sizing: border-box;
                        cursor: pointer;
                    }

                .button-group{
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-start;
                    align-items: center;
                    width: fit-content;
                    margin: 0.5vmax;
                }
                    .btn{
                        position: relative;
                        margin:1vmax;
                        margin-bottom: 3vmax;
                        height: 2vmax;
                        min-width: 5vmax;
                        width: fit-content;
                        padding-inline: 1vmax;
                        border-radius: 0.5vmax;
                        border: 1px solid rgb(199, 199, 199);
                        background-color:rgba(180, 230, 240, 1);
                        box-shadow: 0 0 0.5vmax 0.1vmax rgb(180, 180, 180);
                        cursor: pointer;
                        font-weight: 600;
                        font-size: .9vmax;
                    }

                    .btn:hover{
                        box-shadow: 0 0;
                    }
                        .warn{
                            position: absolute;
                            width: 10vmax;
                            color: red;
                            top:100%;
                            left: 0%;
                            text-align: left;
                            font-size: 0.8vmax ;
                        }


    @media screen and (max-width:768px){
        #addProduct{
            flex-direction: column;
            padding: 1vmax;
        }
            #form-container{
                width:100%;
            }
                .form-group{
                    width: 100%;
                }
                    .form-group input{
                        height: 3.5vmax;
                        width: 25vmax;
                    }
                    .form-group select{
                        height: 3.5vmax;
                        width: 25vmax;
                    }
                    .form-group textarea{
                        height: 10vmax;
                        width: 25vmax;
                        max-width: 25vmax;
                    }
                    .form-group button{
                        width: 12.5vmax;
                        height: 3.5vmax;
                    }
                .image-group{
                    width: 100%;
                }
                    .image-group img{
                        width: 10vmax;
                        height: 10vmax;
                    }
                .button-group{
                    width: fit-content;
                }
                    .btn{
                        margin-bottom: 3vmax;
                        height: 3.5vmax;
                        min-width: 5vmax;
                        width: fit-content;

                        font-size: 1.8vmax;
                    }
                        .warn{
                            width: 20vmax;
                            font-size: 1.5vmax ;
                        }
    }
</style>