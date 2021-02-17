<template> 
    <div class="bg">
        <div :class="{textpart:true, active:showflag}">
            <div class="companyname">冠億興有限公司</div>
            <div class="companyproduct">內衣褲 | 機能衣 | 機能襪</div>
            <div class="subtext">專業製造/進出口批發</div>
            <div class="subtext">Since 2002</div>
        </div>
        <div class="buttonpart" @click="clickgetin">
            點此進入 ➤
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{

            }
        },
        created () {
            window.addEventListener('load', this.loadevent);
        },
        destroyed () {
            window.removeEventListener('load', this.loadevent);
        },
        mounted(){

        },
        computed:{
            getbeginningflag(){
                return this.$store.state.beginningflag;
            }
        },
        methods:{
            loadevent(){
                this.$store.state.beginningflag=true;
            },
            clickgetin(){
                this.$router.push('/main');
            }
        }
    }
</script>

<style lang="scss" scoped>
.bg{
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 50px;
    background-image: url('~@/assets/images/beginning.jpg') ;
    background-repeat: no-repeat;
    background-size:cover;
    background-position: center;
    .textpart{
        position: absolute;
        right: 10%;
        bottom: 20%;
        color:#a3a3a3;
        font-family: 'Noto Serif TC', serif;
        text-align: right;
        .companyname{
            font-size: 32px;
            line-height: 42px;
            margin-bottom: 5px;
            @media (min-width: 768px) AND (max-width: 960px) {
                font-size: 37px;
                line-height: 47px;
            }
            @media (min-width: 960px) {
                font-size: 42px;
                line-height: 52px;
            }
        }
        .companyproduct{
            font-size: 15px;
            line-height: 25px;
            font-style: oblique;
            margin-bottom: 20px;
            @media (min-width: 768px) AND (max-width: 960px) {
                font-size: 18px;
                line-height: 28px;
            }
            @media (min-width: 960px) {
                font-size: 22px;
                line-height: 32px;
            }
        }
        .subtext{
            font-size: 12px;
            line-height: 22px;
            font-style: oblique;
            @media (min-width: 768px) AND (max-width: 960px) {
                font-size: 15px;
                line-height: 25px;
            }
            @media (min-width: 960px) {
                font-size: 18px;
                line-height: 28px;
            }
        }
    }
    .buttonpart{
        position: absolute;
        right: 10%;
        bottom: 10%;
        font-size: 25px;
        font-family: 'Noto Serif TC', serif;
        color:#e8e8e8;
        //border: 1px solid #e8e8e8;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: opacity .5s ease-in-out;
        animation: moveinout 1.5s; 
        animation-iteration-count: infinite;
        animation-timing-function: ease;
        @keyframes moveinout {
            0% { right: 10%; }
            50% { right: 8.5%; }
            100% { right: 10%; }
        }
        @media (min-width: 768px) AND (max-width: 960px) {
            font-size: 30px;
        }
        @media (min-width: 960px) {
            font-size: 35px;
        }
    }
    /* .buttonpart:hover{
        background-color: rgba(228, 228, 228, 0.5);
    } */
}
</style>