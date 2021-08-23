<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  created(){
    this.$store.dispatch("getProducts")
    this.$store.dispatch("getCategories")
    this.$store.dispatch("getComparisons")
    setTimeout(() => {
      console.log("env",process.env)
    }, 2000);
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
  }
  @font-face {
    font-family: "Ubuntu";
    src: url("./assets/fonts/Ubuntu/Ubuntu-Regular.ttf");
  }

  ::-webkit-scrollbar {
    width: .7vmax;
    height: 0.5vmax;
    background-color: whitesmoke;
  }
  ::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 .5vmax rgba(0,0,0,0.3);
      box-shadow: inset 0 0 .5vmax rgba(0,0,0,0.3);
      -webkit-border-radius: 6px;
      border-radius: 6px;
  }
  ::-webkit-scrollbar-thumb {
      -webkit-border-radius: 6px;
      border-radius: 6px;
      background: rgb(20,20,90,.7);
  }
  ::-webkit-scrollbar-thumb:window-inactive {
      background: rgb(40,40,110,.7);
  }
</style>
