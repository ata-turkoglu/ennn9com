<template>
  <div id="admin">
    <div id="nav">
      <div class="navlink" @click="home">
        <p>Ana Menü</p>
      </div>
      <router-link tag="div" class="navlink" to="/admin/addproduct">
        <p>Ürün Ekle</p>
      </router-link>
      <router-link tag="div" class="navlink" to="/admin/addcomparison">
        <p>Karşılaştırma Ekle</p>
      </router-link>
      <router-link tag="div" class="navlink" to="/admin/addDealer">
        <p>Yazı Ekle</p>
      </router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import {mapGetters} from "vuex"
export default {
  
  computed:{
    ...mapGetters(["getFilters"])
  },

  methods:{
    home(){
      this.$router.push(
        {path:"/admin/adminhome"}
      )
    }
  }
}
</script>

<style scoped>
  
#admin {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  height: 100vh;

}
#nav {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  height: 6vh;
  width: 100%;
  background-color: rgb(0, 180, 200);
  margin: 0;
  padding: 0;
  font-size: 2vh;
  font-weight: 700;
  font-family: Arial, Helvetica, sans-serif;
  color: #2c3e50;
}

.navlink {
  position: relative;
  box-sizing: content-box;
  height: 100%;
  width: fit-content;
  padding-inline: 1.2vh;
  display: inline-flex;
  justify-content: center;
  align-items:center;
  margin-block: 0.2vmax;
  cursor: pointer;
  margin-inline: 1vmax;

}
.navlink p{
  margin-block: 0.8vmax;
}

.router-link-active{
  box-shadow: 0vmax 0vmax 1vmax -0.1vmax black;
  border-radius: 1vmax;
  height:80%;
  align-items: center;
}

.home{
  height: 100%;
  width: fit-content;
  display: flex;
}

.home img{
  height: 70%;
  width: auto;
}

@media screen and (max-width:768px) {
  .navlink p{
    font-size: 1.5vmax;
  }
}
</style>
