<template> 
    <div class="featurespart">
        <div class="featurescontainer">
            <div v-if="left_right==0" class="featuresphotopart">
                照片
            </div>
            <div class="featurestextpart">
                {{title}}
            </div>
            <div v-if="left_right==1" class="featuresphotopart">
                照片
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            title: { type: String },
            left_right: { type: Number },
        },
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
.featurespart{
    position: relative;
    width: 100%;
    height: 400px;
    margin-bottom: 50px;
    background-color: #907ee2;
    .featurescontainer{
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        .featuresphotopart{
            flex:1;
            background-color: burlywood;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .featurestextpart{
            flex:1;
            background-color: brown;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
}
</style>