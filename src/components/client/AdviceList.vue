<template>
    <div id="adviceList">

        <h2>Yüzmeye Hazırlık</h2>
        
        <div class="info">
            <p>
                    İşte o an geldi! Binbir hevesle ve kaygıyla hazırlıklar yapılacak, illa ki bir eksik çıkacak ama sonu hep tatlıya bağlanacak.:)<br>
                Denizle Tanışma...<br>
                Suyun bebekler ve çocuklar üzerindeki olumlu etkisi yadsınamaz. Onlar rahat etsin, pamuk tenleri kızarmasın, minik ayakları yanmasın, e biraz da hareket kabiliyetleri gelişsin. Tamamdır bu iş.:)
            </p>
            <img src="../../assets/images/baby-summer.jpg">
        </div>

        <div class="p-list">
            <div class="item">
                <img src="../../assets/images/product/advice/1.jpg">
                <div class="text">
                    <p>Trukid Güneş Kremi</p>
                </div>
            </div>
            <div class="item">
                <img src="../../assets/images/product/advice/2.jpg">
                <div class="text">
                    <p>Swimtrainer</p>
                </div>
            </div>
            <div class="item">
                <img src="../../assets/images/product/advice/3.jpg">
                <div class="text">
                    <p>Muslim Bornoz</p>
                </div>
            </div>
            <div class="item">
                <img src="../../assets/images/product/advice/4.jpg">
                <div class="text">
                    <p>UV Şapka</p>
                </div>
            </div>
            <div class="item">
                <img src="../../assets/images/product/advice/5.jpg">
                <div class="text">
                    <p>UV Mayo</p>
                </div>
            </div>
            <div class="item">
                <img src="../../assets/images/product/advice/6.jpg">
                <div class="text">
                    <p>Slipstop Patik</p>
                </div>
            </div>
            <div class="item">
                <img src="../../assets/images/product/advice/7.jpg">
                <div class="text">
                    <p>Cherekes Kolluk</p>
                </div>
            </div>
            <div class="item">
                <img src="../../assets/images/product/advice/8.jpg">
                <div class="text">
                    <p>Swimava Boyun Simidi</p>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    #adviceList{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
        h2{
            text-align: left;
            padding-inline: 2vw;
        }
        .info{
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            width: 100%;
            height: 50vh;
            margin-bottom: 2vh;
        }
            .info img{
                box-sizing: border-box;
                width: auto;
                height: 100%;
                object-fit:contain;
                margin-right: 2vw;
            }
            .info p{
                box-sizing: border-box;
                text-align: left;
                margin: 0;
                padding: 0 2vw;
            }
        .p-list{
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 25vh;
            width: 100%;
            z-index: 1;
        }
            .item{
                box-sizing: border-box;
                margin: 0;
                margin-right: 1vw;
                padding: 0;
                height: 100%;
                width: 100%;
                aspect-ratio: 1/1;
                position: relative;
                border-top: none;
                box-shadow: 0 1vmax 1vmax grey;
            }
                .item::after{
                    content: "";
                    left: 0;
                    top:0;
                    height: 100%;
                    width: 100%;
                    position: absolute;
                    background-image: linear-gradient(to bottom, transparent, black);
                }
                .item img{
                    box-sizing: border-box;
                    margin: 0;
                    padding: 0;
                    height: 100%;
                    width: 100%;
                    left: 0;
                    top: 0;
                    object-fit: contain;
                    position: absolute;
                    z-index: -1;
                }
                .text{
                    box-sizing: border-box;
                    width: 100%;
                    height: 100%;
                    margin: 0;
                    padding: 0;
                    z-index: 2;
                    display: flex;
                    align-items: flex-end;
                    justify-content: center;
                }

                .item p{
                    color: white;
                    z-index: 2;
                }
</style>