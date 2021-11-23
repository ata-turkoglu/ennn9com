<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
export default {

  computed:{
    ...mapGetters(["getIdList"])
  },

  methods:{

    log(){
      let pass = {
        blapg : null,
        new : true
      }

      let list = []

      new Promise(()=>{
        this.$store.dispatch("getLog")
        .then(()=>{
          list = this.getIdList
        })
      })

      if(localStorage.getItem("blapg")==null){

        let same = null
        do{
          pass.blapg = (Math.floor(Math.random()*1000)+1)
          same = list.includes(pass.blapg)
          localStorage.setItem("blapg",pass.blapg)
        }while(same)

        this.$store.dispatch("setLog",pass)

      }else{

        pass.blapg = localStorage.getItem("blapg")
        pass.new = false
        this.$store.dispatch("setLog",pass)

      }

    }

  },

  created(){
    this.$store.dispatch("getProducts")
    this.$store.dispatch("getCategories")
    this.$store.dispatch("getComparisons")
    this.log()
  }
}
</script>

<style>
#app {
  font-family: Ubuntu, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  position: relative;
}
@font-face {
  font-family: "Ubuntu";
  src: url("./assets/fonts/Ubuntu/Ubuntu-Regular.ttf");
}

::-webkit-scrollbar {
  width: 0.7vmax;
  height: 0.5vmax;
  background-color: whitesmoke;
}
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 0.5vmax rgba(0, 0, 0, 0.3);
  box-shadow: inset 0 0 0.5vmax rgba(0, 0, 0, 0.3);
  -webkit-border-radius: 6px;
  border-radius: 6px;
}
::-webkit-scrollbar-thumb {
  -webkit-border-radius: 6px;
  border-radius: 6px;
  background: rgb(20, 20, 90, 0.7);
}
::-webkit-scrollbar-thumb:window-inactive {
  background: rgb(40, 40, 110, 0.7);
}
</style>
