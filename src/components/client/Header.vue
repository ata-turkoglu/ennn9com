<template>
    <div id="header">
        <div id="lg">
            <p>ennn9</p>
        </div>

        <div v-show="menu" id="navigation">
            <router-link 
             tag="p"
             to="/"
             class="nav-item"
             exact-active-class="nav_item_active"
             @click.native="menuClose()"
            >Anasayfa</router-link>

            <router-link 
             tag="p"
             to="/bloglist"
             class="nav-item"
             exact-active-class="nav_item_active"
             @click.native="menuClose()"
            >Blog</router-link>

            <router-link 
             tag="p"
             to="/productgrouplist"
             class="nav-item"
             exact-active-class="nav_item_active"
             @click.native="menuClose()"
            >Karşılaştırmalar</router-link>

            <router-link 
             tag="p"
             to="/productlist"
             class="nav-item"
             exact-active-class="nav_item_active"
             @click.native="menuClose()"
            >Keşif</router-link>

            <router-link 
             tag="p"
             to="/addproduct"
             class="nav-item"
             exact-active-class="nav_item_active"
             @click.native="menuClose()"
            >Sağlık</router-link>
        </div>

        <div v-show="menu" id="tosocial">
            <div class="ts" @click="link('facebook')">
                <img src="../../assets/images/social/facebook.png" />
            </div>
            <div class="ts" @click="link('instagram')">
                <img src="../../assets/images/social/instagram.png" />
            </div>
            <div class="ts" @click="link('twitter')">
                <img src="../../assets/images/social/twitter.png" />
            </div>
        </div>

        <div v-if="menubutton" id="menu-btn" @click="menuChange()">
            <div class="menu-btn-burger"></div>
        </div>

    </div>
</template>

<script>
export default {
    
    
    data(){
        return{
            menu:false,
            menubutton:false,
        }
    },

    methods:{

        go(){
            this.$router.push({path:"/comparisonview"})
        },

        menuChange(){
            //this.menu=!this.menu
            let elem = document.getElementById("menu-btn")
            let nav = document.getElementById("navigation")
            let social = document.getElementById("tosocial")
            if(!this.menu){
                nav.classList.add("sdown")
                elem.classList.add("open")
                social.classList.add("sleft")
                this.menu=true
                setTimeout(() => {
                    social.classList.remove("sdown")
                    nav.classList.remove("sdown") 
                }, 400);
            }else{
                nav.classList.add("sup")
                elem.classList.remove("open")
                social.classList.add("sright")
                setTimeout(() => {
                    this.menu=false
                    nav.classList.remove("sup")
                    social.classList.remove("sright")
                }, 400);
            }
        },

        menuClose(){
            if(window.innerWidth<768){
                let elem = document.getElementById("menu-btn")
                let nav = document.getElementById("navigation")
                let social = document.getElementById("tosocial")
                nav.classList.add("sup")
                elem.classList.remove("open")
                social.classList.add("sright")
                setTimeout(() => {
                    this.menu=false
                    nav.classList.remove("sup")
                    social.classList.remove("sright")
                }, 400);
            }
        },

        resize(){
            if(window.innerWidth<768){
                this.menu=false
                this.menubutton=true
            }else{
                this.menu=true
                this.menubutton=false
            }
        }
    },

    created(){
        window.addEventListener("resize",this.resize)
        if(window.innerWidth<768){
            this.menu=false
            this.menubutton=true
        }else{
            this.menu=true
            this.menubutton=false
        }
    },

    beforeDestroy(){
        window.removeEventListener("resize",this.resize)
    },
}
</script>

<style scoped>
    #header{
        box-sizing: border-box;
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        height: 8vh;
        width: 100%;
        padding: 0;
        padding-inline: 1vw;
        margin: 0;
        margin-top: .3vh;
        background-color:whitesmoke;
    }
    #header::before{
        content: "";
        position: absolute;
        left: 0;
        top: -.3vh;
        height: .3vh;
        width: 100%;
        background-color: rgb(30,30,100);
    }
        #lg{
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            padding-inline: 1vw;
            height: 100%;
            font-size: 6vh;
            display: flex;
            align-items: flex-start;
            color: rgb(30, 30, 100);
            filter: drop-shadow(0 0 1vmax rgb(165, 165, 165));
        }
            #lg p{
                box-sizing: border-box;
                margin: 0;
                padding: 0;
                vertical-align: bottom;
            }

        #navigation{
            height: 100%;
            width: 100%;
            box-sizing: border-box;
            display: flex;
            align-items:center;
            justify-content: center;
            padding-inline: 10vw;
            /*background-color: rgb(250, 120, 120);*/
        }
            .nav-item{
                margin: 0;
                margin-inline: 2.5vw;
                padding: 0;
                position: relative;
                height: fit-content;
                box-sizing: border-box;
                font-weight: 700;
                font-size: 2.5vh;
                cursor:pointer;
                color: rgb(30, 30, 100);
                text-decoration: none;
                filter: drop-shadow(0 0 1vmax rgb(165, 165, 165));
                /*filter: drop-shadow( 0 0 .8vmax rgb(10, 10, 10, .4));*/
            }
            .nav-item::after{
                content: "";
                position: absolute;
                width: 120%;
                border-radius: .1vmax ;
                transform: scaleX(0);
                height: .16vmax;
                bottom: -25%;
                left: -10%;
                background-color: rgb(30, 30, 100);
                transform-origin: bottom right;
                transition: transform .25s ease-out;
            }
            .nav-item:hover:after{
                height: .16vmax;
                transform: scaleX(1);
                transform-origin: bottom left;
            }
            .nav_item_active::after{
                content: "";
                height: .2vmax;
                position: absolute;
                width: 120%;
                border-radius: .1vmax; 
                transform: none;
            }

        #tosocial{
            box-sizing: border-box;
            margin:0;
            padding: 0;
            height: 100%;
            width: fit-content;
            display: flex;
            align-items: center;
            justify-content: space-between;

        }
            .ts{
                box-sizing: border-box;
                margin: 0;
                padding: 0;
                height: fit-content;
                width: fit-content;
            }
                .ts img{
                    box-sizing: border-box;
                    margin: 0;
                    padding: 0;
                    height: 3vh;
                    margin-inline: .7vw;
                    width: auto;
                    object-fit: contain;
                }

        #menu-btn{
            box-sizing: border-box;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            align-self: center;
            width: 4vmax;
            height: 4vmax;
            cursor: pointer;
            transition: all .5s ease-in-out;
            margin-right: 1vw;
        }
            .menu-btn-burger{
                width: 4vmax;
                height: .5vmax;
                background: rgb(30, 30, 100);
                border-radius:.15vmax;
                transition: all .5s ease-in-out;
            }
                .menu-btn-burger::before,
                .menu-btn-burger::after{
                    content: "";
                    left: 0;
                    position: absolute;
                    width: 4vmax;
                    height: .5vmax;
                    background: rgb(30, 30, 100);
                    border-radius: .2vmax;
                    transition: all .5s ease-in-out;
                }
                .menu-btn-burger::before{
                    transform: translateY(-1.1vmax);
                }
                .menu-btn-burger::after{
                    transform: translateY(1.1vmax);
                }
                    #menu-btn.open .menu-btn-burger{
                        transform:translateX(2.5vmax);
                        background:transparent
                    }
                    #menu-btn.open .menu-btn-burger::before{
                        transform: rotate(45deg) translate(-2.5vmax,2.5vmax)
                    }
                    #menu-btn.open .menu-btn-burger::after{
                        transform: rotate(-45deg) translate(-2.5vmax,-2.5vmax)
                    }
                    
   

    @media screen and (max-width:768px){
        #header{
            height: 8vh;
            position: relative;
            margin-top:0;
            position: relative;
            z-index: 3;
            margin-top:.3vh;
        }
            #lg{
                font-size: 6vh;
            }
            #navigation{
                position: absolute;
                top: 100%;
                right: 0;
                height: fit-content;
                width: 100vw;
                min-height: 50vh;
                align-items: flex-end;
                justify-content: flex-start;
                flex-direction: column;
                background-color: white;
                z-index: 3;
                padding: 2vh;
            }
                .nav-item{
                    margin-block: 2vh;
                    font-size: 3vh;
                    font-weight: 400;
                }
            #tosocial{
                justify-content: flex-end;
                transform-origin: right;
            }
                .ts{
                    margin-left: 2vw;
                }

            @keyframes opainc{
                0%{
                    opacity: 0;
                }
                25%{
                    opacity: 0;
                }
                50%{
                    opacity: 0;
                }
                75%{
                    opacity: .5;
                }
                100%{
                    opacity: 1;
                }
            }

            @keyframes opadec{
                0%{
                    opacity: 1;
                }
                25%{
                    opacity: .5;
                }
                50%{
                    opacity: 0;
                }
                75%{
                    opacity: 0;
                }
                100%{
                    opacity: 0;
                }
            }

            @keyframes scaledown {
                from{
                    transform: scale(1,0);
                }
                to{
                    transform: scale(1,1);
                }
            }
            .sdown{
                transform-origin: top;
                animation: scaledown .4s ease-in-out, opainc .4s;
            }

            @keyframes scaleup {
                from{
                    transform: scale(1,1);
                }
                to{
                    transform: scale(1,0);
                }
            }

            .sup{
                transform-origin: top;
                animation: scaleup .4s ease-in-out, opadec .4s;
            }

            @keyframes scaleleft {
                from{
                    opacity: 0;
                    transform: translateX(100%);
                }
                to{
                    opacity: 1;
                    transform: translateX(0);
                }
            }

            .sleft{
                animation: scaleleft .4s ease-in-out;
            }

            @keyframes scaleright {
                from{
                    transform: translateX(0);
                    opacity: 1;
                    }
                to{
                    opacity: 0;
                    transform: translateX(100%);
                }
            }

            .sright{
                animation: scaleright .4s ease-in-out;
            }
            
    }

        

</style>