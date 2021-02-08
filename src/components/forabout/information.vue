<template> 
    <div class="informationpart">
        <div class="informationcontainer">
           <eachinformation
                v-for="data in allinfo"
                :key="data.title"
                :title="data.title"
                :content="data.content"
                :link="data.link"
           >
           </eachinformation>
        </div>
    </div>
</template>

<script>
    import eachinformation from '@/components/forabout/eachinformation.vue'

    import allinfo from '@/assets/js/forabout/allinfo.js'
    export default {
        components:{
            eachinformation
        },
        data(){
            return{
                allinfo
            }
        },
        
        mounted(){

        },

        methods:{

        },
    }
</script>

<style lang="scss" scoped>
.informationpart{
    position: relative;
    width: 100%;
    background-color: #e2d37e;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
    .informationcontainer{
        position: relative;
        width: 60%;
        margin: 20px 0 20px 0;
        background-color: #8a835f;
        display: flex;
        flex-direction: column;
    }
}
</style>