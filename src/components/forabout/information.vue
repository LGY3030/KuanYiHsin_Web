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
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
    .informationcontainer{
        position: relative;
        width: 100%;
        margin: auto;
        padding: 24px 16px 24px 16px;
        display: flex;
        flex-direction: column;
        border: 1px solid #dcdddd;
        @include pad {
            max-width: 576px;
        }
        @include pc {
            max-width: 720px;
        }
    }
}
</style>