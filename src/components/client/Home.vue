<template>
  <div id="home">
    <!--<div id="bg">
            <img src="../../assets/images/mombaby.jpg">
        </div>-->
    <div id="first">
      <div class="section">
        <img src="../../assets/images/cleaner/1.jpg" />
        <img src="../../assets/images/cleaner/2.jpg" />
        <img src="../../assets/images/cleaner/3.jpg" />
        <img src="../../assets/images/cleaner/4.jpg" />
        <img src="../../assets/images/cleaner/5.jpg" />
        <img src="../../assets/images/cleaner/6.jpg" />
        <img src="../../assets/images/cleaner/7.jpg" />
        <img src="../../assets/images/cleaner/8.jpg" />
        <img src="../../assets/images/cleaner/9.jpg" />
        <div class="section-text">
          <p @click="toSection1">
            <strong>ennn</strong> Uygun <strong>9</strong> <br />
            Robot Süpürge
          </p>
        </div>
      </div>
      <div id="slide">
        <slider side="right" />
      </div>
    </div>
    <blog-list />
    <div id="second">
      <div class="section">
        <img src="../../assets/images/smartwatch/1.jpg" />
        <img src="../../assets/images/smartwatch/2.jpg" />
        <img src="../../assets/images/smartwatch/3.jpg" />
        <img src="../../assets/images/smartwatch/4.jpg" />
        <img src="../../assets/images/smartwatch/5.jpg" />
        <img src="../../assets/images/smartwatch/6.jpg" />
        <img src="../../assets/images/smartwatch/7.jpg" />
        <img src="../../assets/images/smartwatch/8.jpg" />
        <img src="../../assets/images/smartwatch/9.jpg" />
        <div class="section-text">
          <p>
            <strong>ennn</strong> Kullanışlı <strong>9</strong> <br />
            Akıllı Çocuk Saati
          </p>
        </div>
      </div>
      <div id="slide">
        <slider side="left" />
      </div>
    </div>
    <list-slide />
    <news-list />

    <div class="clearfix"></div>

    <!--<div class="list">
            <p class="offer-head">Son İncelenen Ürünler</p>
            <hr>
            <div class="offers">
                <div class="offer-item">
                    <img src="../../assets/images/offer1.jpg">
                    <p>90 TL</p>
                </div>
                <div class="offer-item">
                    <img src="../../assets/images/offer2.jpg">
                    <p>200 TL</p>
                </div>
                <div class="offer-item">
                    <img src="../../assets/images/offer3.jpg">
                    <p>375 TL</p>
                </div>
                <div class="offer-item">
                    <img src="../../assets/images/offer4.jpg">
                    <p>4000 TL</p>
                </div>
                <div class="offer-item">
                    <img src="../../assets/images/offer5.jpg">
                    <p>150 TL</p>
                </div>
                <div class="offer-item">
                    <img src="../../assets/images/offer6.jpg">
                    <p>900 TL</p>
                </div>
                <div class="offer-item">
                    <img src="../../assets/images/offer7.jpg">
                    <p>100 TL</p>
                </div>
            </div>
        </div>-->
  </div>
</template>

<script>
import Slider from "../slider/Slider.vue"
import ListSlide from "../client/utilities/ListSlide.vue"
import BlogList from "../client/utilities/BlogList.vue"
import NewsList from "../client/utilities/NewsList.vue"

export default {
    components:{
        Slider,
        ListSlide,
        BlogList,
        NewsList
    },

    methods:{
        toSection1(cat,id){
            this.$router.push({name:"ComparisonView", params:{cat:"Diğer",id:"pft57R58bxx7Ybc6VtFO"}})
        }
    }

}
</script>

<style scoped>
#home {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  padding-block: 4vh;
  padding-top: 0;
  box-sizing: border-box;
  background-color: rgba(30, 30, 100, 0.15);
  border: 1px solid transparent;
}
#first, #second {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  height: 27vw;
  width: 100%;
  margin: 0;
  margin-top: 1vh;
  padding: 0;
}
.section {
  box-sizing: border-box;
  width: 100%;
  max-height: 100%;
  background-image: linear-gradient(to bottom, whitesmoke, transparent);
  display: grid;
  grid-template-columns: 33% 33% 33%;
  grid-template-rows: 33% 33% 33%;
  grid-gap: 0.5vh;
  overflow: hidden;
  position: relative;
}
.section-text {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-image: linear-gradient(to bottom right, transparent, black);
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
}
.section p {
  margin: 0;
  margin-bottom: 2vh;
  margin-right: 2vh;
  padding: 0;
  box-sizing: border-box;
  font-size: 3.5vmax;
  color: whitesmoke;
  cursor: pointer;
}
.section img {
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  object-fit: cover;
}

#slide {
  height: 100%;
  width: 100%;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-end;
  overflow: hidden;
}

.clearfix {
  height: 0;
}

.list {
  height: 30vh;
  display: block;
  margin-block: 3vmax;
}
.offer-head {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-start;
  font-size: 1.5vmax;
  font-weight: 700;
  margin-left: 1vmax;
}

.list hr {
  width: 50%;
  float: left;
  margin-left: 1vmax;
  background-color: black;
}

.offers {
  box-sizing: border-box;
  width: 100%;
  height: 24vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0.5vmax;
}

.offer-item {
  position: relative;
  background-color: white;
  height: 100%;
  width: fit-content;
  margin-inline: 1vmax;
  border-radius: 0.3vmax;
  overflow: hidden;
  box-shadow: 0 0.2vmax 1vmax -0.2vmax rgb(50, 50, 50);
}
.offer-item img {
  height: 100%;
  width: auto;
  object-fit: contain;
}
.offer-item p {
  margin: 0;
  padding: 0;
  position: absolute;
  right: 0;
  bottom: 1%;
  color: red;
  font-weight: 700;
  background-color: white;
  border-radius: 0.3vmax;
  padding-inline: 0.5vmax;
}

@media screen and (max-width: 768px) {
  #home {
    padding-top: 0;
    background-color: rgba(30, 30, 100, 0.15);
  }
  #first {
    flex-direction: column;
    height: 51.8vh;
  }
  .section {
    height: 25.9vh;
  }
  #slide {
    height: 25.9vh;
    margin-top: 1vh;
  }

  .offers {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
  .offer-item {
    height: 20vh;
    width: 20vh;
    margin: 1vmax;
  }
}
</style>
