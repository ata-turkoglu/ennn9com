<template>
  <div id="client">
    <Header />
    <transition name="slide-forward" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Header from "../components/client/Header.vue"
export default {
    components:{
        Header,
    }
}
</script>

<style scoped>
#client {
  position: relative;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  height: fit-content;
  width: 100%;
}

.slide-forward-enter-active {
  animation: slide-right-in 0.4s ease-out;
}
.slide-forward-leave-active {
  animation: slide-right-out 0.5s ease-in;
}

@keyframes slide-right-out {
  /*from  { transform: translateX(0%);}
        to { transform: translateX(105%);} */
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes slide-right-in {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}
</style>
