<template>
    <div id="BlogSection" class="form-group">
        <label for="section">Bölüm</label>
        <textarea id="section" class="section" :onkeyup="autoGrow()"></textarea>
    </div>
</template>

<script>
    
    export default {
        
        data(){
            return{
            }
        },

        mounted(){
        },

        methods:{
            autoGrow(){
                setTimeout(() => {
                    let spc = document.getElementById("section")
                    if (spc.scrollHeight > spc.clientHeight) {
                        spc.style.height = spc.scrollHeight + "px";
                    }
                }, 500);
            }
        }
    }

</script>

<style scoped>
    .form-group{
        box-sizing: border-box;
        padding: .5vmax;
        width: 100%;
        height: fit-content;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
        .section{
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
</style>