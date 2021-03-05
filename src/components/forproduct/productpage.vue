<template> 
    <div class="productpagepart">
        <div class="categorybar">
            <div class=categoryblock>
                <div class="categorytitle">
                    產品分類
                </div>
                <div class="categoryself">
                    <div class="categoryname">
                        <div :class="{eachcategoryname:true, changecolor:nameflag==1}" @click="changeproductflag(1)" @mouseover="cursorover(1)" @mouseleave="cursorleave(0)"> 
                            平口褲
                        </div>
                        <div :class="{eachcategoryname:true, changecolor:nameflag==2}" @click="changeproductflag(2)" @mouseover="cursorover(2)" @mouseleave="cursorleave(0)">
                            海灘褲
                        </div>
                        <div :class="{eachcategoryname:true, changecolor:nameflag==3}" @click="changeproductflag(3)" @mouseover="cursorover(3)" @mouseleave="cursorleave(0)">
                            發熱衣
                        </div>
                    </div>
                    <div class="categorynumber">
                        <div :class="{eachcategorynumber:true, changecolor:nameflag==1}" @click="changeproductflag(1)" @mouseover="cursorover(1)" @mouseleave="cursorleave(0)">
                            10
                        </div>
                        <div :class="{eachcategorynumber:true, changecolor:nameflag==2}" @click="changeproductflag(2)" @mouseover="cursorover(2)" @mouseleave="cursorleave(0)">
                            5
                        </div>
                        <div :class="{eachcategorynumber:true, changecolor:nameflag==3}" @click="changeproductflag(3)" @mouseover="cursorover(3)" @mouseleave="cursorleave(0)">
                            12
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="productside">
            <div class="productoption">
                <div class="optionbar">
                    <div class="eachoption">
                        <i class="fas fa-list"> </i>
                    </div>
                    <div class="eachoption">
                        <i class="fas fa-th-large"></i>
                    </div>
                </div>
            </div>
            <div :key="getproductflag" class="productpagecontainer">
                <productcard
                    v-for="data in current"
                    :key="data.title"
                    :type="data.type"
                    :img="data.img"
                    :title="data.title"
                    :sex="data.sex"
                >
                </productcard>
            </div>
        </div>
        
    </div>
</template>

<script>
    import productcard from '@/components/forproduct/productcard.vue'

    import fazeii from '@/assets/js/forproduct/fazeii.js'
    import haitancoo from '@/assets/js/forproduct/haitancoo.js'
    import pincocoo from '@/assets/js/forproduct/pincocoo.js'

    export default {
        components:{
            productcard
        },
        data(){
            return{
                fazeii,
                haitancoo,
                pincocoo,
                current: pincocoo,
                flag: 1,
                nameflag: 0,
            }
        },
        computed:{
            getproductflag(){
                return this.flag;
            }
        },
        watch:{
            getproductflag:{
                handler() {
                    if(this.flag == 1) this.current = this.pincocoo;
                    if(this.flag == 2) this.current = this.haitancoo;
                    if(this.flag == 3) this.current = this.fazeii;
                }
            }
        },
        mounted(){

        },

        methods:{
            changeproductflag(num){
                this.flag=num;
            },
            cursorover(num){
                this.nameflag=num;
            },
            cursorleave(num){
                this.nameflag=num;
            }
        },
    }
</script>

<style lang="scss" scoped>
.productpagepart{
    position: relative;
    width: 100%;
    max-width: 1280px;
    padding: 0 25px 50px 25px;
    display: flex;
    flex-direction: row;
    left: 0;
    right: 0;
    margin: auto;
    background-color: #f5f5f5;
    .categorybar{
        flex-basis: 20%;
        padding-top: 150px;
        //border-right: 1px solid #d1d1d1;
        .categoryblock{
            display: flex;
            flex-direction: column;
            padding: 20px;
            background-color: white;
            .categorytitle{
                font-size: 22px;
                font-family: 'Noto Sans TC', sans-serif;
                font-weight: 500;
                padding: 15px 0 15px 0;
                margin-bottom: 15px;
                background-color:#f5f5f5;
            }
            .categoryself{
                display: flex;
                flex-direction: row;
                .categoryname{
                    .eachcategoryname{
                        font-size: 18px;
                        font-family: 'Noto Sans TC', sans-serif;
                        font-weight: 300;
                        margin-bottom: 15px;
                        cursor: pointer;
                    }
                    .changecolor{
                        color: blue;
                    }
                }
                .categorynumber{
                    flex-grow: 1;
                    text-align: end;
                    .eachcategorynumber{
                        font-size: 18px;
                        font-family: 'Oswald', sans-serif;
                        font-weight: 300;
                        margin-bottom: 15px;
                        cursor: pointer;
                    }
                    .changecolor{
                        color: blue;
                    }
                }
            }
        }   
    }
    .productside{
        flex-basis: 80%;
        padding: 0 0 0 75px;
        .productoption{
            position: relative;
            width: 100%;
            height: 150px;
            .optionbar{
                position: absolute;
                width: 100%;
                bottom: 0;
                display: flex;
                justify-content: flex-end;
                border-bottom: 1px solid #d1d1d1;
                .eachoption{
                    width: 30px;
                    height: 30px;
                    margin-left: 10px;
                    margin-bottom: 15px;
                    bottom: 0;
                    border: 1px solid rgb(150, 150, 150);
                    cursor: pointer;
                    .fas {
                        font-size: 10px;
                        width: 100%;
                        height: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        text-decoration: none;
                    }
                    .fas:hover {
                        opacity: 0.7;
                    }
                    .fa-list {
                        color: rgb(150, 150, 150);
                    }
                    .fa-th-large{
                        color: rgb(150, 150, 150);
                    }
                }
            }
        }
        .productpagecontainer{
            display: grid;
            grid-gap: 35px;
            grid-template-columns: 1fr 1fr 1fr;
        }
    }
    
}
</style>