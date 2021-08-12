<template>
    <div id="addBlog">
        <div id="form-container">
            <form id="form" ref="form" @submit.prevent>
                <div class="form-group">
                    <label for="cat1">Kategori-1</label>
                    <select id="cat1" @change="onCat1Change()" v-model="category">
                        <option value="null" selected disabled>Kategori-1 Seçin</option>
                        <option v-for="(item, index) in getFilters.categories" :key="index">{{item.title}}</option>
                    </select>
                </div>
                <blog-section/>
                <div class="form-group">
                    <label for="head">Başlık</label>
                    <input id="head" type="text" v-model="header">
                </div>
                <div class="form-group">
                    <label for="section">Bölüm</label>
                    <textarea class="section" :onkeyup="autoGrow()" v-model="sections[0]"></textarea>
                </div>
                <div class="form-group">
                    <label>Resim/Reklam</label>
                    <div class="visuals">
                        <div class="v-img">
                            <img src="">
                            <input style="display:none" type="file">
                            <p>Resim Ekle</p>
                        </div>
                        <div class="v-advert">
                            <img src="">
                            <input style="display:none" type="file">
                            <p>Reklam Ekle</p>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label for="section">Bölüm</label>
                    <textarea class="section" :onkeyup="autoGrow()" v-model="sections[1]"></textarea>
                </div>
            </form>
        </div>
        <div class="addbuttons">
            <button class="btn" @click="addSection()">Bölüm Ekle</button>
            <button class="btn" @click="addImage()">Resim Ekle</button>
        </div>
    </div>
</template>

<script>

    import Vue from "vue" 
    import BlogSection from "../admin/utilities/BlogSection.vue"
    import { mapGetters } from "vuex"
    import { eventBus } from "../../main"

    export default {     

        components:{
            BlogSection
        },
        
        data(){
            return{
                category:null,
                header:null,
                sections:[],
                sec:1,

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
            addSection(){
                this.sec++

                let CompClass = Vue.extend(BlogSection)
                let instance = new CompClass({
                    props:{
                        "sections" : 3
                    }
                })
                console.log(instance)
                instance.$mount()
                this.$refs.form.appendChild(instance.$el)

                /*this.sections.forEach(e=>{
                    console.log(e)
                })

                let div =  document.createElement("div")
                div.classList.add("form-group")
                div.style.cssText="box-sizing: border-box; padding: .5vmax; width: 100%; height: fit-content; display: flex; align-items: center; justify-content: space-between;"
                document.getElementById("form").appendChild(div)

                let label = document.createElement("label")
                label.setAttribute("for","section");
                label.innerHTML="Bölüm"
                div.appendChild(label)

                this.sec++
                let textarea = document.createElement("textarea")
                textarea.classList.add("section")
                this.$set(document.getElementsByClassName("section")[document.getElementsByClassName("section").length-1],"v-model",this.sections[this.sec])
                textarea.style.cssText="box-sizing: border-box; width: 80%; min-width: 80%; max-width: 80%; height: 25vh; border-radius: .5vmax; outline: none; border: 1px solid black; padding-inline: .5vmax; font-family: Ubuntu, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;"
                div.appendChild(textarea)*/

            },

            addImage(){

                let div = document.createElement("div")
                div.classList.add("form-group")
                div.style.cssText = "box-sizing: border-box; padding: .5vmax; width: 100%; height: fit-content; display: flex; align-items: center; justify-content: space-between;"
                document.getElementById("form").appendChild(div)

                let label = document.createElement("label")
                label.innerHTML="Resim/Reklam"
                div.appendChild(label)

                let div1 = document.createElement("div")
                div1.classList.add("visuals")
                div1.style.cssText = "box-sizing: border-box; width: 80%; height: 20vh; border: 1px solid black; display: flex; align-items: center; justify-content: center;"
                div.appendChild(div1)
                
                let div2 = document.createElement("div")
                div2.classList.add("v-img")
                div2.style.cssText = "box-sizing: border-box; height: 100%; width: 50%; display: flex; position: relative;"
                div1.appendChild(div2)

                let img1 = document.createElement("img")
                div2.appendChild(img1)

                let p1 = document.createElement("p")
                p1.innerHTML = "Resim Ekle"
                p1.style.cssText = "box-sizing: border-box; margin: 0; height: fit-content; width: fit-content; padding: 0; position: absolute; top: 0; bottom: 0; right: 0; left: 0; margin: auto; cursor:pointer;"
                div2.appendChild(p1)

                let div3 = document.createElement("div")
                div3.classList.add("v-advert")
                div3.style.cssText = "box-sizing: border-box; height: 100%; width: 50%; display: flex; position: relative;"
                div1.appendChild(div3)

                let img2 = document.createElement("img")
                div3.appendChild(img2)

                let p2 = document.createElement("p")
                p2.innerHTML = "Reklam Ekle"
                p2.style.cssText = "box-sizing: border-box; margin: 0; height: fit-content; width: fit-content; padding: 0; position: absolute; top: 0; bottom: 0; right: 0; left: 0; margin: auto; cursor:pointer;"
                div3.appendChild(p2)
            },

            autoGrow(){
                /*setTimeout(() => {
                    let spc = document.getElementById("section")
                    if (spc.scrollHeight > spc.clientHeight) {
                        spc.style.height = spc.scrollHeight + "px";
                    }
                }, 500);*/
            },

            onCat1Change(){

            },
        }

    }
</script>

<style scoped>
    #addBlog{
        box-sizing: border-box;
        height: fit-content;
        min-height: 50vh;
        width: 100%;
        display: flex;
        flex-direction: row;
        margin-top: 2vmax;
    }
        .addbuttons{
            padding: 1vh;
            width: 30%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
            box-sizing: border-box;            
        }
        #form-container{
            box-sizing: border-box;
            height: 100%;
            width: 70%;
            border: 1px solid purple;
        }
            #form{
                box-sizing: border-box;
                width: 100%;
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
                    width: 100%;
                    height: fit-content;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;

                }
                    .visuals{
                        box-sizing: border-box;
                        width: 80%;
                        height: 20vh;
                        border: 1px solid black;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                        .v-img, .v-advert{
                            box-sizing: border-box;
                            height: 100%;
                            width: 50%;
                            display: flex;
                            position: relative;
                        }
                            .visuals p{
                                box-sizing: border-box;
                                margin: 0;
                                height: fit-content;
                                width: fit-content;
                                padding: 0;
                                position: absolute;
                                top: 0;
                                bottom: 0;
                                right: 0;
                                left: 0;
                                margin: auto;
                                cursor:pointer;
                            }
                    .form-group input{
                        box-sizing: border-box;
                        width: 80%;
                        height: 2vmax;
                        border-radius: .5vmax;
                        outline: none;
                        border: 1px solid black;
                        padding-inline: .5vmax;
                    }
                    .form-group select{
                        box-sizing: border-box;
                        width: 80%;
                        height: 2vmax;
                        border-radius: .5vmax;
                        outline: none;
                        border: 1px solid black;
                        padding-inline: .5vmax;
                    }
                    .form-group textarea{
                        box-sizing: border-box;
                        width: 80%;
                        min-width: 80%;
                        max-width: 80%;
                        min-height: 25vh;
                        height: fit-content;
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