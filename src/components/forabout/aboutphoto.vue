<template> 
    <div class="aboutphotopart">
        <div class="aboutphotocontainer">
            照片
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
    margin-top:100px;
    width: 100%;
    height: 400px;
    background-color: #7ee2a0;
    display: flex;
    justify-content: center;
    align-items: center;
    .aboutphotocontainer{
        position: relative;
        width: 60%;
        height: 350px;
        background-color: #3b7e52;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 30px;
    }
}
</style>