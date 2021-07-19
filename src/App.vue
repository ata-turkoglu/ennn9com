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
</style>
