<template> 
    <div class="headerbar">
        <div :class="{mobanchor:true, showmobanchor:isOpen}">
            <div class="eachone" @click="clickbeginning()">
                冠億興有限公司
            </div>
            <div class="eachone" @click="clickmain()">
                主頁
            </div>
            <div class="eachone" @click="clickabout()">
                關於我們
            </div>
            <div class="eachone" @click="clickproduct()">
                產品介紹
            </div>
        </div>
        <div class="barcontainer">
            <div v-if="detectflag" class="anchorpart_pc">
                <div class="eachanchor_pc" @click="clickbeginning">
                    冠億興有限公司
                </div>
                <div class="eachanchor_pc" style="padding-left: 20px; border-right: 1px solid #9a9a9a;" @click="clickmain">
                    主頁
                </div>
                <div class="eachanchor_pc" style="border-right: 1px solid #9a9a9a;" @click="clickabout">
                    關於我們
                </div>
                <div class="eachanchor_pc" @click="clickproduct">
                    產品介紹
                </div>
            </div>
            <div v-if="!detectflag" class="anchorpart_mob">
                <div class="eachanchor_mob" @click="openMenu">
                    選單
                    <i
                        :class="{
                        'haeder-bar__menu-button__arrow': true,
                        'haeder-bar__menu-button__arrow--white': true,
                        'haeder-bar__menu-button__arrow--up': isOpen,
                        'haeder-bar__menu-button__arrow--down': !isOpen
                        }"
                    />
                </div>
            </div>
            <div class="contactpart">
                <div class="eachcontact">
                    <a href="https://www.facebook.com/%E5%86%A0%E5%84%84%E8%88%88%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-1176015742452063" target="_blank" class="fab fa-facebook"></a>
                </div>
                <div class="eachcontact">
                    <a href="https://instagram.com/bnw_horse?igshid=qjamdg3v4w0n" target="_blank" class="fab fa-instagram"></a>
                </div>
                <div class="eachcontact">
                    <a href="https://line.me/R/ti/p/%40371zyvac" target="_blank" class="fab fa-line"></a>
                </div>
                <div class="eachcontact">
                    <a href="https://shopee.tw/bnw8888?smtt=0.0.9" target="_blank" class="fa fa-shopping-cart"></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                detectflag: true,
                isOpen: false,
                thislist: ["XXX有限公司", "主頁", "關於我們", "產品介紹"],
            }
        },
        created () {
            window.addEventListener('resize', this.resizeevent);
        },
        destroyed () {
            window.removeEventListener('resize', this.resizeevent);
        },
        mounted(){
            if(window.innerWidth>=768){
                this.detectflag=true;
                this.isOpen=false;
            }
            else this.detectflag=false;
        },

        methods:{
            resizeevent(){
                if(window.innerWidth>=768){
                    this.detectflag=true;
                    this.isOpen=false;
                }
                else this.detectflag=false;
            },
            openMenu() {
                this.isOpen = !this.isOpen
            },
            clickbeginning(){
                this.$router.push('/');
            },
            clickmain(){
                this.$router.push('/main');
            },
            clickabout(){
                this.$router.push('/about');
            },
            clickproduct(){
                this.$router.push('/product');
            },
        },
    }
</script>

<style lang="scss" scoped>
.headerbar{
    position: fixed;
    z-index: 300;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    background-color: black;
    .mobanchor{
        position: fixed;
        z-index: 100;
        top: 50px;
        width: 100%;
        height: 0px;
        display: flex;
        flex-direction: column;
        background-color: white;
        transition: height 0.3s ease-in-out;
        overflow: hidden;
        .eachone{
            flex: 1;
            display: flex;
            align-items: center;
            border-bottom: solid 1px #e6e6e6;
            color:#c4c4c4;
            padding-left:40px;
            cursor: pointer;
        }
        .eachone:hover{
            background-color: rgb(243, 243, 243);
            color:#979797;
        }
    }
    .showmobanchor{
        height: 160px;
    }
    .barcontainer{
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        .anchorpart_pc{
            flex: 2;
            height: 100%;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            //background-color: red;
            .eachanchor_pc{
                color: white; 
                padding-left: 16px;
                padding-right: 16px;
                cursor: pointer;
                //background-color: yellow;
            }
        }
        .anchorpart_mob{
            flex: 1;
            height: 100%;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            .eachanchor_mob{
                color: white; 
                padding-left: 16px;
                padding-right: 16px;
                cursor: pointer;
                .haeder-bar__menu-button__arrow {
                    border-style: solid;
                    border-width: 0 2px 2px 0;
                    display: inline-block;
                    padding: 3px;
                    margin-left: 3px;
                    transition: 0.333s ease-in-out;
                    &.haeder-bar__menu-button__arrow--white {
                        border-color: #ededed;
                    }
                    &.haeder-bar__menu-button__arrow--up {
                        transform: translateY(1px) rotate(-135deg);
                    }
                    &.haeder-bar__menu-button__arrow--down {
                        transform: translateY(-2px) rotate(45deg);
                    }
                }
            }
        }
        .contactpart{
            flex: 1;
            height: 100%;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            //background-color: rgb(107, 128, 128);
            .eachcontact{
                width: 35px;
                height: 35px;
                margin-right: 12px;
                //background-color:yellow;
                .fa {
                    font-size: 30px;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    text-decoration: none;
                }
                .fa:hover {
                    opacity: 0.7;
                }
                .fab {
                    font-size: 30px;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    text-decoration: none;
                }
                .fab:hover {
                    opacity: 0.7;
                }
                .fa-facebook {
                    background: black;
                    color: white;
                }
                .fa-instagram {
                    background: black;
                    color: white;
                }
                .fa-line {
                    background: black;
                    color: white;
                }
                .fa-shopping-cart {
                    background: black;
                    color: white;
                }
            }
        }
    } 
}
</style>