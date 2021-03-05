<template>
    <div class="productcardpart">
        <div class="productcardcontainer">
            <div class="productcardimagepart">
                <div class="productcardimage" :style="{ height: getheight + 'px' }">
                    <div
                        class="image"
                        :style="{ backgroundImage: `url(${img})` }"
                    />
                </div>
            </div>
            <div class="productcardtextpart">
                <div class="productcardinfo">
                    <div class="productcardtitle">
                        {{title}}
                    </div>
                    <div class="productcardsex">
                        {{sex}}
                    </div>
                </div>
                <div class="productcardpurchase">

                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
    export default {
        data(){
            return{
                thiswidth: 0,
            }
        },
        props: {
            type: { type: String },
            img: {type: String},
            title: { type: String },
            sex: { type: String },
        },
        created () {
            window.addEventListener('resize', this.resizeevent);
        },
        destroyed () {
            window.removeEventListener('resize', this.resizeevent);
        },
        computed: {
            getheight: function () {
                return this.thiswidth*0.8*1.2;
            }
        },
        mounted(){
            this.thiswidth = Math.min(window.innerWidth*0.75/3, 320);
        },
        methods:{
            resizeevent(){
                this.thiswidth = Math.min(window.innerWidth*0.75/3, 320);
            },
        }
    }
</script>

<style lang="scss" scoped>
.productcardpart{
    flex-basis: 30%;
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
    margin-top: 30px;
    cursor: pointer;
    background-color: white;
    .productcardcontainer{
        width: 80%;
        margin: 10px 0 10px 0;
        .productcardimagepart{
            position: relative;
            .productcardimage{
                overflow: hidden;
                width: 100%;
                margin: auto;
                .image {
                    width: 100%;
                    height: 100%;
                    background-repeat: no-repeat;
                    background-size:cover;
                    background-position: center;
                    transition: all 0.5s;
                }
            }
        }
        .productcardtextpart{
            display: flex;
            flex-direction: row;
            .productcardinfo{
                .productcardtitle{
                    margin-top: 10px;
                }
                .productcardsex{
                    margin-top: 10px;
                }
            }
            .productcardpurchase{

            }
        }
    }
}
.productcardpart:hover .image {
    transform: scale(1.2);
}
</style>