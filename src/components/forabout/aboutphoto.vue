<template> 
    <div class="aboutphotopart">
        <div class="aboutimage"/>
        <div class="aboutimagecover">
        </div>
        <div class="aboutnamepart">
            <div class="aboutname">
                冠億興有限公司
            </div>
            <div class="aboutgraph">
                <img src="~@/assets/images/aboutpagename.png" />
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

        },
    }
</script>

<style lang="scss" scoped>
.aboutphotopart{
    position: relative;
    width: 100%;
    height: 650px;
    display: flex;
    justify-content: center;
    align-items: center;
    .aboutimage {
        width: 100%;
        height: 100%;
        background-image: url("~@/assets/images/aboutpage.jpg");
        background-repeat: no-repeat;
        background-size:cover;
        background-position: center;
    }
    .aboutimagecover{
        position: absolute;
        z-index: 200;
        top:0;
        left:0;
        width: 100%;
        height: 100%;
        background-color: black;
        opacity: 0.4;
    }
    .aboutnamepart{
        position: absolute;
        z-index: 205;
        display: flex;
        flex-direction: column;
        .aboutname{
            font-size: 17px;
            color:white;
            margin-bottom: 20px;
            text-align: center;
            letter-spacing: 5px;
        }
        .aboutgraph{
            width: 200px;
            img{
                width: 100%;
                height:100%;
            }
        }
    }
}
</style>