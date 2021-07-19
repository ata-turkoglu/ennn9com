<template>
    <div id="home">
        <!--<div id="bg">
            <img src="../../assets/images/mombaby.jpg">
        </div>-->
        <div id="slide">
            <slider/>
        </div>

        <div class="clearfix"></div>

        <div class="list">
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
        </div>


    </div>
</template>

<script>
import Slider from "../slider/Slider.vue"
export default {
    components:{
        Slider
    }
}
</script>

<style scoped>
    #home{
       height: 100%;
       width: 100%;
       margin: 0;
       padding: 0;
       padding-block: 4vh;
       box-sizing: border-box;
    }
        #bg{
            box-sizing: border-box;
            height: 100vh;
            width: 100%;
            position: absolute;
            top: 0;
            left: 0;
            z-index: -1;

        }
        
            #bg img{
                height: 100%;
                width: 100%;
                object-fit: cover;
                filter: brightness(80%);
            }

        #slide{
            height: 50vh;
            width: 100%;
            display: flex;
            box-sizing: border-box;
            align-items: center;
            justify-content: flex-end;
        }

        .clearfix{
            height: 26vh;
        }

        .list{
                height: 30vh;
                display: block;
                margin-block: 3vmax;
        }
            .offer-head{
                margin: 0;
                padding: 0;
                display: flex;
                justify-content: flex-start;
                font-size: 1.5vmax;
                font-weight: 700;
                margin-left: 1vmax;
            }

            .list hr{
                width: 50%;
                float: left;
                margin-left: 1vmax;
                background-color: black;
            }

            .offers{
                box-sizing: border-box;
                width: 100%;
                height: 24vh;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                padding: .5vmax;
            }

                .offer-item{
                    position: relative;
                    background-color: white;
                    height: 100%;
                    width: fit-content;
                    margin-inline: 1vmax;
                    border-radius: .3vmax;
                    overflow: hidden;
                    box-shadow: 0 .2vmax 1vmax -0.2vmax rgb(50, 50, 50);
                }
                    .offer-item img{
                        height: 100%;
                        width: auto;
                        object-fit: contain;
                    }
                    .offer-item p{
                        margin: 0;
                        padding:0;
                        position: absolute;
                        right: 0;
                        bottom: 1%;
                        color: red;
                        font-weight: 700;
                        background-color: white;
                        border-radius: .3vmax;
                        padding-inline: .5vmax;
                    }
</style>