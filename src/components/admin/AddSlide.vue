<template>
    <div id="addslide">
        <input type="text" v-model="slide.text" placeholder="Slide için yazı">
        <div class="img" @click="$refs.slideInputImage.click()">
            <img :src="imageprev">
        </div>
        <div id="category">
            <label>Kategori</label>
            <select id="select">
                <option>Moda</option>
                <option>Aile</option>
            </select>
        </div>
        <button @click="save()">Kaydet</button>
        <input type="file" accept="image/*" ref="slideInputImage" :style="{'display':'none'}" @change="addImage($event)">
        <crop-image v-if="cropstart" :parcomp="'addslide'" :image="croppingImage" :ratio="16/9"></crop-image>
    </div>
</template>

<script>
    import CropImage from "./utilities/CropImage.vue"

    export default {

        data(){
            return{
                croppingImage:null,
                file:null,
                imageprev:null,
                cropstart:false,
                text:"",
                slide:{
                    text:"",
                    image:null,
                }
            }
        },

        components:{
            CropImage
        },

        methods:{
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

            save(){
                let conf = confirm("Kayıt edilsin mi?")
                if(conf){
                    this.$store.dispatch("saveSlide",this.slide)
                }
            }
        }

    }
</script>

<style scoped>
    #addslide{
        box-sizing: border-box;
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
        .img{
            height:50vh;
            width: 89vh;
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            background-image: url("../../assets/items/addimage1.png");
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
            margin-bottom: 2vh;
            cursor: pointer;
            box-shadow: 0 0 1vmax -.3vmax rgb(200, 200, 200);
        }
        img{
            height: 100%;
            object-fit: contain;
            width: 100%;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            z-index: 2;
        }
        input{
            box-sizing: border-box;
            width: 89vh;
            margin-bottom: 2vh;
            height: 4vh;
            border-radius: .5vmax;
            outline: none;
            border: none;
            box-shadow: 0 0 1vmax -.3vmax rgb(160, 160, 160);
            padding-inline: 1vmax;
        }
        button{
            width: 10vw;
            height: 4vh;
            border: none;
            box-shadow: 0 0 1vmax -.3vmax rgb(100, 100, 100);
            cursor: pointer;
        }

        #category{
            height: 4vh;
            width: 89vh;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            margin-bottom: 2vh;
        }
        #category label{
            margin-right: 3vw;
        }
        #category select{
            outline: none;
            width: 10vw;
            border-radius: .5vmax;
            height: 3vh;
            padding-inline: .5vmax;
            cursor: pointer;
        }

        ::placeholder {
            color: rgb(180, 180, 180);
        }

        :-ms-input-placeholder {
            color: rgb(180, 180, 180);
        }

        ::-ms-input-placeholder {
            color: rgb(180, 180, 180);
        }

    @media screen and (max-width:768px) {
        .img{
            height: 53.5vw;
            width: 95vw;
        }
        input{
            width: 95%;
        }
        #category{
            width: 95%
        }
        #category label{
            margin-left: 1vw;
            font-size: 2vmax;
        }
        #category select{
            width: 25vw;
        }
        button{
            width: 25vw;
            height: 4vh;
        }
    }
</style>