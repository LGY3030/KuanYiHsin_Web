<template> 
    <div class="categorypart">
        <div class="barcontain">
            <div class="eachcategory" style="background-color: aquamarine; margin-left: 16px;" @click="changeproductflag(1)">
                平口褲
            </div>
            <div class="eachcategory" style="background-color: rgb(171, 230, 210);" @click="changeproductflag(2)">
                海灘褲
            </div>
            <div class="eachcategory" style="background-color: rgb(39, 80, 66);" @click="changeproductflag(3)">
                發熱衣
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
            changeproductflag(num){
                this.$store.state.productflag=num;
            }
        },
    }
</script>

<style lang="scss" scoped>
    .categorypart{
        position: relative;
        width: 100%;
        height: 50px;
        border-bottom: 1px solid black;
        border-top: 1px solid black;
        background-color: #e2bf7e;
        .barcontain{
            position: relative;
            width:100%;
            height:100%;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            .eachcategory{
                height: 100%;
                border-right: 1px solid black;
                padding: 0 30px 0 30px;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
            }
        }
    }
</style>