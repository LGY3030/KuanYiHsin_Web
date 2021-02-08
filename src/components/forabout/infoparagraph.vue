<template> 
    <div class="infoparagraphpart">
        <div class="infoparagraphcontainer">
            文字描述
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
.infoparagraphpart{
    position: relative;
    width: 100%;
    background-color: #a6e27e;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 150px;
    .infoparagraphcontainer{
        position: relative;
        width: 60%;
        margin: 20px 0 20px 0;
        background-color: #799c62;
        font-size: 20px;
        word-wrap:break-word;
    }
}
</style>