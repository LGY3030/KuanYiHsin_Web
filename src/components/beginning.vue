<template> 
    <div class="bg">
        <div :class="{textpart:true, active:showflag}">
            <p>XXX有限公司</p>
            <p>平口褲 | 發熱衣 | 足弓襪</p>
        </div>
        <div :class="{buttonpart:true, active:getbeginningflag}" @click="clickgetin">
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
        bottom: 17%;
        color:#a3a3a3;
        font-size: 22px;
        line-height: 34px;
        font-family: 'Noto Serif TC', serif;
        @media (min-width: 768px) AND (max-width: 960px) {
            font-size: 25px;
            line-height: 36px;
        }
        @media (min-width: 960px) {
            font-size: 30px;
            line-height: 42px;
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
        opacity: 0;
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
    .active{
        opacity: 1;
    }
    /* .buttonpart:hover{
        background-color: rgba(228, 228, 228, 0.5);
    } */
}
</style>