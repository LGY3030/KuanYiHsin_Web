<template> 
    <div class="productphotopart">
        <div class="image" />
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
.productphotopart{
    position: relative;
    width: 100%;
    height: 500px;
    .image {
        width: 100%;
        height: 100%;
        background-image: url("~@/assets/images/productpage.jpg");
        background-repeat: no-repeat;
        background-size:cover;
        background-position: top;
    }
}
</style>