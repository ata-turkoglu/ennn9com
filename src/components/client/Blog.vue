<template>
    <div id="blog">
        <h2>Başlık</h2>
        <div id="container">
            <div id="leftside">
                <img src="../../assets/images/offers/offer1.jpg">
                <img src="../../assets/images/offers/offer10.jpg">
                <img src="../../assets/images/offers/offer15.jpg">
            </div>
            <div id="content">
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere suscipit expedita, necessitatibus nobis consectetur quam alias in provident esse sed nemo, a culpa repellat excepturi eos, libero omnis commodi. Placeat?
                    Alias illum quas consequatur quia asperiores numquam neque impedit placeat iste dolores in facere doloremque enim fugiat, est perspiciatis natus, odio, ullam beatae corrupti? Reiciendis eaque vel neque deleniti laboriosam.
                    Voluptas obcaecati sit ex voluptatum! Suscipit accusamus maiores harum excepturi repudiandae ipsa nostrum distinctio adipisci tempore explicabo similique facere tenetur rerum porro officiis sed, quidem, quas quibusdam officia eos quisquam!
                    Eligendi quidem laborum aliquid dolorum enim assumenda sit, voluptates, vero qui ea corporis non, cum numquam eaque maxime aliquam facilis atque tenetur esse commodi! Quasi nisi incidunt rerum perferendis quas?
                <img src="../../assets/images/fashion/f3.jpg">
                    Commodi nostrum quas dicta animi assumenda, neque, asperiores aut autem reprehenderit iusto eaque sit similique, qui unde magni nihil! Harum eveniet nostrum porro iure consequatur reiciendis illo labore fuga error!
                    Id, voluptas nobis soluta similique esse dolorum, ipsam fuga natus pariatur, voluptatibus quas architecto. Nostrum, itaque. Quasi unde, aliquam dignissimos quia minus doloremque, error hic earum, corporis cum expedita neque!
                    Molestias, nostrum esse! Tempore eveniet consequatur, animi fugiat neque repellat temporibus? Molestiae alias facilis fuga magni dolorem labore nemo ad ducimus. Doloribus ullam reprehenderit voluptatum atque vero, ipsum dolore non.
                    Ad porro esse ipsum accusantium suscipit neque repellat quos consequatur ullam explicabo ab fugit totam eaque, aut quo illum commodi sapiente provident quam, maiores, officia laboriosam illo alias? Nesciunt, numquam.
                    Ipsa nihil deserunt quas fuga quaerat consectetur consequatur, hic facere dicta quia nesciunt modi necessitatibus accusamus. Possimus, illum quaerat nemo culpa nulla laboriosam? Quos quis consequuntur tempora laboriosam odio dolorum.
                    Distinctio illum commodi, dolores, incidunt, excepturi iusto voluptates vel perferendis corrupti explicabo minus facere optio perspiciatis nesciunt cupiditate tempore. At nulla nesciunt cumque fugit non laborum numquam doloremque beatae vel.
                </p>
            </div>
            <div id="rightside">
                <div class="r-item">
                    <img src="../../assets/images/fashion/f9.jpg">
                </div>
                <div class="r-item">
                    <img src="../../assets/images/fashion/f10.jpg">
                </div>
                <div class="r-item">
                    <img src="../../assets/images/fashion/f11.jpg">
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
    #blog{
        position: relative;
        box-sizing: border-box;
        height: 100%;
        width: 100%;
        padding: 1vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
        h2{
            box-sizing: border-box;
        }
        #container{
            box-sizing: border-box;
            display: grid;
            grid-template-columns: 10% 1fr 20%;
            grid-gap: 1vw;
        }
            #leftside{
                box-sizing: border-box;
                display: flex;
                height: 25vh;
                width: 100%;
                flex-direction: column;
                align-items: center;
                justify-content: flex-start;
            }
                #leftside img{
                    box-sizing: border-box;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    margin-bottom: 2vh;
                }
            #content{
                box-sizing: border-box;
                display: flex;
                width: 100%;
                height: 100%;
                text-indent: 3vw;
                text-align: left;
                line-height: 3.5vh;
                font-size: 1.1vmax;
                background-color: whitesmoke;
                padding: 3vw;
            }
                #content p{
                    box-sizing: border-box;
                    text-orientation: sideways;
                }
                #content img{
                    box-sizing: border-box;
                    width: auto;
                    height: 40vh;
                    object-fit: cover;
                    margin-block: 2vh;
                }
            #rightside{
                box-sizing: border-box;
                display: flex;
                height: 100%;
                width: 100%;
                flex-direction: column;
                align-items: center;
                justify-content: flex-start;
            }
                .r-item{
                    box-sizing: border-box;
                    height: 50vh;
                    width: 100%;
                    margin-bottom: 2vh;
                }
                    .r-item img{
                        box-sizing: border-box;
                        height: 100%;
                        width: 100%;
                        object-fit: cover;
                    }
</style>