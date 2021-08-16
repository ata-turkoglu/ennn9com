<template>
    <div id="adviceList">

        <h2>Yüzmeye Hazırlık</h2>
        
        <div class="info">
            <p class="text1">
                İşte o an geldi! Binbir hevesle ve kaygıyla hazırlıklar yapılacak, illa ki bir eksik çıkacak ama sonu hep tatlıya bağlanacak.:)<br>
                Denizle Tanışma...<br>
                Suyun bebekler ve çocuklar üzerindeki olumlu etkisi yadsınamaz. Onlar rahat etsin, pamuk tenleri kızarmasın, minik ayakları yanmasın, e biraz da hareket kabiliyetleri gelişsin. Tamamdır bu iş.:)
            </p>
            <img src="../../assets/images/baby-summer.jpg">
            <p class="text2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br>
                Aspernatur a ipsa expedita nihil voluptatem, laudantium nobis tenetur voluptates, <br>
                delectus voluptatum explicabo recusandae! Repudiandae quam doloremque nisi, ducimus praesentium saepe et. <br>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br> Aspernatur a ipsa expedita nihil voluptatem, laudantium nobis tenetur voluptates, <br> delectus voluptatum explicabo recusandae! Repudiandae quam doloremque nisi, ducimus praesentium saepe et. <br>
            </p>
        </div>

        <div class="p-list">
            <div class="item">
                <div class="item-pic">
                    <img src="../../assets/images/product/advice/1.jpg">
                    <div class="text">
                        <p>Trukid Güneş Kremi</p>
                    </div>
                </div>
                <div class="item-info">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam vero iste a sequi esse fuga reprehenderit amet impedit numquam blanditiis reiciendis ducimus libero laudantium repellendus culpa ratione, fugit eum eos?</p>
                </div>
            </div>
            <div class="item">
                <div class="item-pic">
                    <img src="../../assets/images/product/advice/2.jpg">
                    <div class="text">
                        <p>Swimtrainer</p>
                    </div>
                </div>
                <div class="item-info">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam vero iste a sequi esse fuga reprehenderit amet impedit numquam blanditiis reiciendis ducimus libero laudantium repellendus culpa ratione, fugit eum eos?</p>
                </div>
            </div>
            <div class="item">
                <div class="item-pic">
                    <img src="../../assets/images/product/advice/3.jpg">
                    <div class="text">
                        <p>Muslim Bornoz</p>
                    </div>
                </div>
                <div class="item-info">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam vero iste a sequi esse fuga reprehenderit amet impedit numquam blanditiis reiciendis ducimus libero laudantium repellendus culpa ratione, fugit eum eos?</p>
                </div>
            </div>
            <div class="item">
                <div class="item-pic">
                    <img src="../../assets/images/product/advice/4.jpg">
                    <div class="text">
                        <p>UV Şapka</p>
                    </div>
                </div>
                <div class="item-info">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam vero iste a sequi esse fuga reprehenderit amet impedit numquam blanditiis reiciendis ducimus libero laudantium repellendus culpa ratione, fugit eum eos?</p>
                </div>
            </div>
            <div class="item">
                <div class="item-pic">
                    <img src="../../assets/images/product/advice/5.jpg">
                    <div class="text">
                        <p>UV Mayo</p>
                    </div>
                </div>
                <div class="item-info">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam vero iste a sequi esse fuga reprehenderit amet impedit numquam blanditiis reiciendis ducimus libero laudantium repellendus culpa ratione, fugit eum eos?</p>
                </div>
            </div>
            <div class="item">
                <div class="item-pic">
                    <img src="../../assets/images/product/advice/6.jpg">
                    <div class="text">
                        <p>Slipstop Patik</p>
                    </div>
                </div>
                <div class="item-info">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam vero iste a sequi esse fuga reprehenderit amet impedit numquam blanditiis reiciendis ducimus libero laudantium repellendus culpa ratione, fugit eum eos?</p>
                </div>
            </div>
            <div class="item">
                <div class="item-pic">
                    <img src="../../assets/images/product/advice/7.jpg">
                    <div class="text">
                        <p>Cherekes Kolluk</p>
                    </div>
                </div>
                <div class="item-info">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam vero iste a sequi esse fuga reprehenderit amet impedit numquam blanditiis reiciendis ducimus libero laudantium repellendus culpa ratione, fugit eum eos?</p>
                </div>
            </div>
            <div class="item">
                <div class="item-pic">
                    <img src="../../assets/images/product/advice/8.jpg">
                    <div class="text">
                        <p>Swimava Boyun Simidi</p>
                    </div>
                </div>
                <div class="item-info">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam vero iste a sequi esse fuga reprehenderit amet impedit numquam blanditiis reiciendis ducimus libero laudantium repellendus culpa ratione, fugit eum eos?</p>
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
            align-items: flex-start;
            justify-content: center;
            width: 100%;
            height: fit-content;
            margin-bottom: 2vh;
            display: grid;
            grid-template-columns: auto auto;
            grid-template-rows: 50% 50%;
        }
            .text1{
                grid-area: 1 / span 1;
            }
            .text2{
                grid-area: 2 / span 1;
            }
            .info img{
                box-sizing: border-box;
                width: auto;
                height: 100%;
                max-height: 50vh;
                object-fit:cover;
                margin-right: 2vw;
                grid-area: 1 / 2 / span 2 / span 1
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
            margin-top: 3vh;
            padding: 0;
            display: flex;
            flex-direction: column;
            width: 100%;
            height: fit-content;
            z-index: 1;
            justify-content: flex-start;
            padding-inline: 1vh;
            overflow: hidden;
        }
            .item{
                box-sizing: border-box;
                margin: 0;
                margin-right: 1vw;
                padding: 0;
                height: 20vh;
                width: 100%;
                aspect-ratio: 1/1;
                position: relative;
                border-top: none;
                display: flex;

                margin-right: 0;
                margin-bottom: 2vh;
            }
            /*.item:hover > .item-info{
                display: flex;
                background-color: ivory;
                position: absolute;
                left: 0;
                bottom: 0%;
                width: 30vw;
                height: fit-content;
                margin: 0;
                padding: 0;
                border: 1px solid red;
            }*/
                .item-pic{
                    height: 100%;
                    width: 20vh;
                    box-sizing: border-box;
                    position: relative;
                }
                    .item-pic::after{
                        box-sizing: border-box;
                        content: "";
                        left: 0;
                        top:0;
                        height: 100%;
                        width: 20vh;
                        position: absolute;
                        background-image: linear-gradient(to bottom, transparent, black);
                    }
                    .item-pic img{
                        box-sizing: border-box;
                        margin: 0;
                        padding: 0;
                        height: 100%;
                        width: 20vh;
                        left: 0;
                        top: 0;
                        object-fit: contain;
                        position: absolute;
                        z-index: -1;
                    }

                    .item:nth-child(odd){
                        align-self: flex-start;
                    }
                    .item:nth-child(odd) > .item-info{
                        background-image: linear-gradient(to right, whitesmoke, transparent);
                    }

                    .item:nth-child(even){
                        align-self: flex-end;
                        flex-direction: row-reverse;
                    }
                    .item:nth-child(even) > .item-info{
                        background-image: linear-gradient(to left, whitesmoke, transparent);
                    }

                    .text{
                        box-sizing: border-box;
                        width: 20vh;
                        height: 100%;
                        margin: 0;
                        padding: 0;
                        z-index: 2;
                        display: flex;
                        align-items: flex-end;
                        justify-content: center;
                    }
                    .text p{
                        font-size: 1vmax;
                        color: white;
                        z-index: 2;
                    }
                .item-info{
                    box-sizing: border-box;
                    display: flex;
                    font-size: 1vmax;
                    height: 100%;
                    margin: 0;
                    padding: 0;
                    padding: 3vw;
                    width: 100%;
                    text-align: center;
                    justify-content: center;
                }
                .item-info p{
                    display: flex;
                    align-self: center;
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }

    @media screen and (max-width:768px) {
        h2{
            font-size: 2vmax;
        }
        .info{
            display: flex;
            flex-direction: column;
            height: fit-content;
        }
            .info p{
                font-size: 1.7vmax;
                width: 100%;
                margin-block: 1vh;
            }
            .info img{
                margin-bottom: 1vh;
                padding: 1vw;
                width: 100%;
                height: auto;
                overflow: hidden;
            }
        .p-list{
            flex-direction: column;
            margin-top: 1vh;
            justify-content: flex-start;
            height: fit-content;
            padding-inline: 1vh;
            overflow: hidden;
        }
            .item{
                width: 100%;
                height: 30vw;
                margin-right: 0;
                margin-bottom: 2vh;
                box-shadow: none;
            }
                .item-pic{
                    height: 100%;
                    width: 30vw;
                }

                .item:nth-child(odd){
                    align-self: flex-start;
                }
                .item:nth-child(odd) > .item-info{
                    background-image: linear-gradient(to right, whitesmoke, transparent);
                }

                .item:nth-child(even){
                    align-self: flex-end;
                    flex-direction: row-reverse;
                }
                .item:nth-child(even) > .item-info{
                    background-image: linear-gradient(to left, whitesmoke, transparent);
                }
                .text p{
                    font-size: 1.5vmax;
                }
            .item-info{
                box-sizing: border-box;
                display: flex;
                font-size: 1.5vmax;
                height: 100%;
                margin: 0;
                padding: 0;
                padding: .5vh;
                width: 65vw;
                text-align: center;
            }
    }
</style>