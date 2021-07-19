<template>
    <div id="cropperview" ref="cv">
            <div v-if="image" class="view">
                <div class="top">
                    <div class="buttons">
                        <button @click="cropImage">Kırp</button>
                        <button @click="setImage(), close()">Kaydet</button>
                        <button @click="close">Çıkış</button>
                    </div>
                </div>
                <div class="bottom">
                    <vue-cropper
                        class="cropper"
                        ref="cropper"
                        :guides="true"
                        :src="image"
                        :aspectRatio="1/1"
                        :outputSize="1"
                        :fixedBox="true"
                        :maxImgSize="800"
                    ></vue-cropper>
                    <img v-if="croppedImage" :src="croppedImage" />
                </div>
            </div>
        </div>
</template>

<script>

import VueCropper from "vue-cropperjs"
import 'cropperjs/dist/cropper.css';

export default {

    components:{
        VueCropper
    },

    props:["parcomp","image"],

    data(){
        return{
            croppedImage:null
        }
    },

    mounted(){
        window.scrollTo(0,0)
        document.getElementById("cropperview").style.height=document.body.scrollHeight+"px"
    },

    watch:{
        croppedImage(){
            window.addEventListener("resize",()=>{
                document.getElementById("cropperview").style.height=document.body.scrollHeight+"px"
            })
        }
    },

    methods:{
        cropImage(){
            this.croppedImage = this.$refs.cropper.getCroppedCanvas().toDataURL()
            document.getElementById("cropperview").style.height=document.body.scrollHeight+"px"
        },

        async setImage(){
            if(this.parcomp=="addproduct"){
                this.resizeImg(this.croppedImage,500,500).then(result=>{
                    this.$parent.imgUrls.push(result)
                    return this.dataURLtoFile(result,this.$parent.file.name)
                }).then(img=>{
                    this.$parent.product.images.push(img)
                }).catch(err=>{
                    console.log(err)
                })
            }else if(this.parcomp=="addcomparison"){
                this.resizeImg(this.croppedImage,500,500).then(result=>{
                    this.$parent.imageprev=result
                    return this.dataURLtoFile(result,this.$parent.file.name)
                }).then(img=>{
                    this.$parent.comp.image=img
                }).catch(err=>{
                    console.log(err)
                })
            }
        },

        close(){
            this.$parent.cropstart=false
        },
        
        dataURLtoFile(dataurl, filename) {
            var arr = dataurl.split(','),
                mime = arr[0].match(/:(.*?);/)[1],
                bstr = atob(arr[1]), 
                n = bstr.length, 
                u8arr = new Uint8Array(n);
            while(n--){
                u8arr[n] = bstr.charCodeAt(n);
            }
            return new File([u8arr], filename, {type:mime});
        },

        resizeImg(base64, newWidth, newHeight) {
            return new Promise((resolve, reject)=>{
                var canvas = document.createElement("canvas");
                canvas.width=newWidth
                canvas.height=newHeight
                let context = canvas.getContext("2d");
                let img = document.createElement("img");
                img.src = base64;
                img.onload = function () {
                    context.scale(newWidth/img.width,  newHeight/img.height);
                    context.drawImage(img, 0, 0); 
                    resolve(canvas.toDataURL());     
                    reject(e=>{
                        console.log(e)
                    })          
                }
            });
        },
    }
}
</script>

<style scoped>
    #cropperview{
        box-sizing: border-box;
        display: flex;
        position: absolute;
        flex-direction: row;
        justify-content: space-between;
        top: 0;
        left: 0;
        padding: 0;
        margin: 0;
        min-height: 100vh;
        height: 100%;
        width: 100%;
        z-index: 1;
        backdrop-filter: blur(10px);
        transform-style: preserve-3d;
    }
    #cropperview::after{
        content: "";
        position: absolute;
        box-sizing: border-box;
        background-color: rgba(100,100,100,0.9);
        width: 100%;
        min-height: 100vh;
        height: 100%;
        top: 0;
        left: 0;
    }
        .view{
            box-sizing: border-box;
            display: flex;
            flex-direction:column;
            align-items: flex-start;
            justify-content: top;
            height: 90vh;
            width: 100%;
            box-sizing: border-box;
        }
            .view .top{
                box-sizing: border-box;
                width: 100%;
                height: 5vh;
                display: flex;
                flex-direction: row-reverse;
                align-items: center;
                justify-content: space-between;
                margin-top: 2vh;
            }
                #cropperview .buttons{
                    box-sizing: border-box;
                    z-index : 3;
                    display : flex;
                    top: 0.5vmax;
                    right: 0.5vmax;
                    margin: 0.5vmax;
                    height: 100%;
                }
                #cropperview .buttons button{
                    cursor : pointer;
                    height: 85%;
                    width: 5vmax;
                    border-radius:0.5vmax;
                    border: none;
                    box-sizing: border-box;
                    margin-inline: 0.25vmax;
                    background-color:rgb(0, 180, 200);
                    box-shadow: 0 0 0.5vmax 0.1vmax rgb(105, 105, 105);
                    font-weight: 600;
                    text-align:center;
                }
                #cropperview .buttons button:hover{
                    box-shadow: 0 0 0.5vmax 0.1vmax rgb(105, 135, 125);
                }
            .view .bottom{
                box-sizing: border-box;
                height: 100%;
                width: 100%;
                z-index: 1;
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-template-rows: 100%;
                grid-gap: 1vmax;
                align-items: center;
                justify-items: center;
                padding: .5vmax;
                overflow: hidden;
            }
                .cropper{
                    box-sizing: border;
                    width:auto;
                    max-width: 100%;
                    max-height: 100%;
                    z-index: 1;
                    box-shadow: 0 0 1vmax -.2vmax rgb(70, 70, 70);
                }
                #cropperview img{
                    box-sizing: border-box;
                    z-index: 1;
                    max-width: 100%;
                    max-height: 100%;
                    object-fit: contain;
                    box-shadow: 0 0 1vmax -.2vmax rgb(70, 70, 70);
                    align-self: center;
                }

    @media screen and (max-width:768px) {
        .view{
            height: 100%;
            max-height: 100%;
        }

            .view .top{
                margin-top: 1vh;
                height: 5vh;
                flex-direction: column;
                padding-right: 2vmax;
            }
                #cropperview .buttons{
                    align-self: flex-end;
                }
                #cropperview .buttons button{
                    width: 9vmax;
                    height: 100%;
                    margin-right: 1vmax;
                    font-size: 1.7vmax;
                }
            .view .bottom{
                box-sizing: border-box;
                align-self: center;
                width: 100%;
                height: 94vh;
                grid-template-columns: 1fr;
                grid-template-rows: 50% 50%;
                padding-inline: 1vmax;
            }
                .cropper{
                    width:auto;
                    max-width: 100%;
                    max-height: 100%;
                    justify-self: center;   
                }
                #cropperview img{
                    max-width: 100%;
                    max-height: 95%;
                }
    }
</style>