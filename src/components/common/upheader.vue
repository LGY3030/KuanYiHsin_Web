<template> 
    <div class="headerbar">
        <div class="barcontainer">
            <div class="anchorpart">
                <div class="eachanchor" @click="clickbeginning">
                    XXX有限公司
                </div>
                <div class="eachanchor" style="padding-left: 50px; border-right: 1px solid #9a9a9a;" @click="clickmain">
                    主頁
                </div>
                <div class="eachanchor" @click="clickabout" style="border-right: 1px solid #9a9a9a;">
                    關於我們
                </div>
                <div class="eachanchor" @click="clickproduct">
                    產品介紹
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

            }
        },
        
        mounted(){

        },

        methods:{
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
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    background-color: black;
    .barcontainer{
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        .anchorpart{
            flex: 2;
            height: 100%;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            //background-color: red;
            .eachanchor{
                color: white; 
                padding-left: 16px;
                padding-right: 16px;
                //background-color: yellow;
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