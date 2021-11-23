<template>
  <div id="bloglist">
    <div
      id="item-list"
      :style="drag?{cursor:'grabbing'}:null"
      @touchstart="touchstart($event)"
      @touchmove="touchmove($event)"
      @touchend="touchend($event)"
      @mousedown="mouse_down($event)"
      @mousemove="mouse_move($event)"
      @mouseup="mouse_up($event)"
      @mouseout="drag=false"
    >
      <div class="blog-head">
        <p>Blog</p>
      </div>
      <div class="blog-item">
        <img class="blog-img" src="../../../assets/images/fashion/f9.jpg" />
        <p class="blog-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque esse,
          qui iure sint minus maiores quisquam ducimus molestias nisi totam
          possimus cumque sequi quidem repudiandae ex odit ab similique
          accusantium. Sint minus maiores quisquam ducimus molestias nisi totam
          possimus cumque sequi quidem repudiandae ex odit ab similique
          accusantium. cumque sequi quidem repudiandae ex odit ab similique
          accusantium.
        </p>
        <button class="blog-btn" @click="toBlog()">Okumaya Devam Et</button>
      </div>
      <div class="blog-item">
        <img class="blog-img" src="../../../assets/images/fashion/f10.jpg" />
        <p class="blog-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque esse,
          qui iure sint minus maiores quisquam ducimus molestias nisi totam
          possimus cumque sequi quidem repudiandae ex odit ab similique
          accusantium. Sint minus maiores quisquam ducimus molestias nisi totam
          possimus cumque sequi quidem repudiandae ex odit ab similique
          accusantium. cumque sequi quidem repudiandae ex odit ab similique
          accusantium.
        </p>
        <button class="blog-btn" @click="toBlog()">Okumaya Devam Et</button>
      </div>
      <div class="blog-item">
        <img class="blog-img" src="../../../assets/images/fashion/f11.jpg" />
        <p class="blog-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque esse,
          qui iure sint minus maiores quisquam ducimus molestias nisi totam
          possimus cumque sequi quidem repudiandae ex odit ab similique
          accusantium. Sint minus maiores quisquam ducimus molestias nisi totam
          possimus cumque sequi quidem repudiandae ex odit ab similique
          accusantium. cumque sequi quidem repudiandae ex odit ab similique
          accusantium.
        </p>
        <button class="blog-btn" @click="toBlog()">Okumaya Devam Et</button>
      </div>
      <div class="blog-item">
        <img class="blog-img" src="../../../assets/images/fashion/f12.jpg" />
        <p class="blog-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque esse,
          qui iure sint minus maiores quisquam ducimus molestias nisi totam
          possimus cumque sequi quidem repudiandae ex odit ab similique
          accusantium. Sint minus maiores quisquam ducimus molestias nisi totam
          possimus cumque sequi quidem repudiandae ex odit ab similique
          accusantium. cumque sequi quidem repudiandae ex odit ab similique
          accusantium.
        </p>
        <button class="blog-btn" @click="toBlog()">Okumaya Devam Et</button>
      </div>
      <div class="blog-item">
        <img class="blog-img" src="../../../assets/images/fashion/f13.jpg" />
        <p class="blog-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque esse,
          qui iure sint minus maiores quisquam ducimus molestias nisi totam
          possimus cumque sequi quidem repudiandae ex odit ab similique
          accusantium. Sint minus maiores quisquam ducimus molestias nisi totam
          possimus cumque sequi quidem repudiandae ex odit ab similique
          accusantium. cumque sequi quidem repudiandae ex odit ab similique
          accusantium.
        </p>
        <button class="blog-btn" @click="toBlog()">Okumaya Devam Et</button>
      </div>
      <div class="blog-item">
        <img class="blog-img" src="../../../assets/images/fashion/f14.jpg" />
        <p class="blog-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque esse,
          qui iure sint minus maiores quisquam ducimus molestias nisi totam
          possimus cumque sequi quidem repudiandae ex odit ab similique
          accusantium. Sint minus maiores quisquam ducimus molestias nisi totam
          possimus cumque sequi quidem repudiandae ex odit ab similique
          accusantium. cumque sequi quidem repudiandae ex odit ab similique
          accusantium.
        </p>
        <button class="blog-btn" @click="toBlog()">Okumaya Devam Et</button>
      </div>
      <div class="blog-item">
        <img class="blog-img" src="../../../assets/images/fashion/f15.jpg" />
        <p class="blog-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque esse,
          qui iure sint minus maiores quisquam ducimus molestias nisi totam
          possimus cumque sequi quidem repudiandae ex odit ab similique
          accusantium. Sint minus maiores quisquam ducimus molestias nisi totam
          possimus cumque sequi quidem repudiandae ex odit ab similique
          accusantium. cumque sequi quidem repudiandae ex odit ab similique
          accusantium.
        </p>
        <button class="blog-btn" @click="toBlog()">Okumaya Devam Et</button>
      </div>
      <div class="blog-item">
        <img class="blog-img" src="../../../assets/images/fashion/f16.jpg" />
        <p class="blog-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque esse,
          qui iure sint minus maiores quisquam ducimus molestias nisi totam
          possimus cumque sequi quidem repudiandae ex odit ab similique
          accusantium. Sint minus maiores quisquam ducimus molestias nisi totam
          possimus cumque sequi quidem repudiandae ex odit ab similique
          accusantium. cumque sequi quidem repudiandae ex odit ab similique
          accusantium.
        </p>
        <button class="blog-btn" @click="toBlog()">Okumaya Devam Et</button>
      </div>
      <div class="blog-item">
        <img class="blog-img" src="../../../assets/images/fashion/f17.jpg" />
        <p class="blog-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque esse,
          qui iure sint minus maiores quisquam ducimus molestias nisi totam
          possimus cumque sequi quidem repudiandae ex odit ab similique
          accusantium. Sint minus maiores quisquam ducimus molestias nisi totam
          possimus cumque sequi quidem repudiandae ex odit ab similique
          accusantium. cumque sequi quidem repudiandae ex odit ab similique
          accusantium.
        </p>
        <button class="blog-btn" @click="toBlog()">Okumaya Devam Et</button>
      </div>
      <div class="blog-item">
        <img class="blog-img" src="../../../assets/images/fashion/f18.jpg" />
        <p class="blog-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque esse,
          qui iure sint minus maiores quisquam ducimus molestias nisi totam
          possimus cumque sequi quidem repudiandae ex odit ab similique
          accusantium. Sint minus maiores quisquam ducimus molestias nisi totam
          possimus cumque sequi quidem repudiandae ex odit ab similique
          accusantium. cumque sequi quidem repudiandae ex odit ab similique
          accusantium.
        </p>
        <button class="blog-btn" @click="toBlog()">Okumaya Devam Et</button>
      </div>
      <div class="blog-head">
        <p>Tümü</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            click:null,
            drag:false,
            touch:{
                startX:null,
                endX:null,
                index:0
            }
        }
    },

    mounted(){
        window.addEventListener("resize",this.resize)
    },
    beforeDestroy(){
        window.removeEventListener("resize",this.resize)
    },

    methods:{

        toBlog(){
            this.$router.push("/bloglist/blog")
        },

        resize(){
            if(window.innerWidth<768){
                //document.getElementById("item-list").style.transform="translateX(0)"
            }else{
                document.getElementById("item-list").style.transform="translateX(0)"
            }
        },

        touchstart(event){
            this.click=new Date().getTime()
            this.touch.startX=event.changedTouches[0].clientX
        },

        touchend(event){
            if(window.innerWidth>768){
                if(new Date().getTime()-this.click<100){
                    console.log()
                }
            }else{


                this.touch.endX=event.changedTouches[0].clientX
                let product = document.getElementById("item-list")

                if(this.touch.endX<this.touch.startX-20){
                    if(this.touch.index<10-1){
                        this.touch.index++
                        product.style.transform="translateX(-"+(this.touch.index*(80+18/9))+"vw)"
                    }
                }
                else if(this.touch.endX-20>this.touch.startX){
                    if(this.touch.index>0){
                        this.touch.index--
                        product.style.transform="translateX(-"+(this.touch.index*(80+18/9))+"vw)"
                    }
                }
            }

        },

        touchmove(event){
            if(window.innerWidth>768){
                this.touch.endX=event.changedTouches[0].clientX
                document.getElementById("item-list").scrollLeft-=(this.touch.endX-this.touch.startX)*2
                this.touch.startX=event.changedTouches[0].clientX
            }
        },

        mouse_down(event){
            if(window.innerWidth<768){
                this.click=new Date().getTime()
                this.touch.startX=event.clientX
            }else{
                this.drag=true
                this.click=new Date().getTime()
            }

        },

        mouse_up(event){
            if(window.innerWidth<768){
                event.target.draggable=false
                this.touch.endX=event.clientX
                let product = document.getElementById("item-list")

                if(this.touch.endX<this.touch.startX-20){
                    if(this.touch.index<10-1){
                        this.touch.index++
                        product.style.transform="translateX(-"+(this.touch.index*(80+18/9))+"vw)"
                    }
                }
                else if(this.touch.endX-20>this.touch.startX){
                    if(this.touch.index>0){
                        this.touch.index--
                        product.style.transform="translateX(-"+(this.touch.index*(80+18/9))+"vw)"
                    }
                }
            }else{
                this.drag=false
                if(new Date().getTime()-this.click<100){
                    //this.$router.push({name:"ComparisonView", params:{cat:cat,id:id}})
                    console.log()
                }
            }
        },

        mouse_move(event){
            if(window.innerWidth>768){
                //event.stopPropagation();
                event.preventDefault();
                event.target.draggable=false
                if(this.drag){
                    document.getElementById("item-list").style.cursor="grabbing"
                    document.getElementById("item-list").scrollLeft-=event.movementX*0.7
                }
            }
        },
    }
}
</script>

<style scoped>
#bloglist {
  box-sizing: border-box;
  width: 100%;
  height: 60vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  margin: 0;
  padding: 0;
  margin-top: 1vh;
  overflow: hidden;
}
.blog-head {
  background-color: whitesmoke;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.blog-head:last-child {
  margin-left: 0.5vw;
}
.blog-head p {
  transform: rotate(270deg);
  font-family: Ubuntu, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 700;
  font-size: 1.2vmax;
}
#item-list {
  box-sizing: border-box;
  position: relative;
  margin: 0;
  padding: 0;
  height: 100%;
  width: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: nowrap;
  transition: all 0.3s ease-out;
  overflow: hidden;
  user-select: none;
}
.blog-item {
  box-sizing: border-box;
  position: relative;
  min-width: 280px;
  width: 20vw;
  max-width: 20vw;
  height: 100%;
  margin: 0;
  margin-left: 1vh;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  user-select: none;
}
.blog-img {
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: auto;
  object-fit: contain;
  margin: 0;
  padding: 0;
  z-index: 0;
  filter: brightness(0.75);
  user-select: none;
}
.blog-text {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  padding-inline: 1vw;
  margin-top: 50%;
  height: 50%;
  width: 100%;
  background-color: transparent;
  color: whitesmoke;
  text-indent: 4vw;
  text-align: center;
  white-space: normal;
  text-overflow: ellipsis;
  overflow: hidden;
  z-index: 1;
  position: relative;
  user-select: none;
}
.blog-text::after {
  content: "";
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  position: absolute;
  box-sizing: border-box;
  background-image: linear-gradient(to bottom, transparent, black);
}

.blog-btn {
  box-sizing: border-box;
  border: none;
  height: fit-content;
  width: fit-content;
  margin: 0;
  padding: 0;
  z-index: 0;
  background-color: transparent;
  color: whitesmoke;
  align-self: center;
  justify-self: center;
  font-family: Ubuntu, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 2vmin;
  position: absolute;
  z-index: 1;
  bottom: 5%;
  left: 0;
  right: 0;
  margin-inline: auto;
  cursor: pointer;
  user-select: none;
}

@media screen and (max-width: 768px) {
  #bloglist {
    height: 60vh;
    width: 100%;
    padding: 0;
    margin-top: 1vh;
  }
  .blog-head:first-child {
    width: 8vw;
    background-color: transparent;
    background-image: linear-gradient(to right, whitesmoke, transparent);
  }
  .blog-head:last-child {
    margin-left: 2vw;
    width: 8vw;
    background-color: transparent;
    background-image: linear-gradient(to left, whitesmoke, transparent);
  }
  .blog-head p {
    font-size: 2.2vmax;
  }
  #item-list {
    height: 100%;
    width: fit-content;
    overflow: visible;
  }
  .blog-item {
    min-width: 80vw;
    width: 80vw;
    max-width: 80vw;
    margin-left: 2vw;
  }
  .blog-btn {
    font-size: 2vmax;
  }
}
</style>
