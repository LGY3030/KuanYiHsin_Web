<template> 
    <div class="footerblack">
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
        <div class="copyright">
            © 2021 XXX company All rights reserved.
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
            }
        },
    }
</script>

<style lang="scss" scoped>

.footerblack{
    position: relative;
    width: 100%;
    height: 300px;
    background-color: rgb(0, 0, 0);
    .contactpart{
        position: relative;
        top: 10vh;
        display: flex;
        flex-direction: row;
        justify-content:center;
        .eachcontact{
            width: 40px;
            height: 40px;
            margin-right: 12px;
            margin-left: 12px;
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
                color: #9a9a9a;;
            }
            .fa-instagram {
                background: black;
                color: #9a9a9a;;
            }
            .fa-line {
                background: black;
                color: #9a9a9a;;
            }
            .fa-shopping-cart {
                background: black;
                color: #9a9a9a;;
            }
        }
    }
    .copyright {
        position: relative;
        top: 13vh;
        width: 100%;
        text-align: center;
        color: #9a9a9a;
        font-size: 20px;
    }
}

</style>