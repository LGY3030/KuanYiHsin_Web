<template> 
    <div class="bg">
        <upheader>

        </upheader>
        <mainphoto>

        </mainphoto>
        <features
            v-for="data in allfeatures"
            :key="data.title"
            :title="data.title"
            :left_right="data.left_right"
        >

        </features>
        <bottomfooter>

        </bottomfooter>
    </div>
</template>

<script>
    import upheader from '@/components/common/upheader.vue'
    import mainphoto from '@/components/formain/mainphoto.vue'
    import features from '@/components/formain/features.vue'
    import bottomfooter from '@/components/common/bottomfooter.vue'

    import allfeatures from '@/assets/js/formain/allfeatures.js'
    export default {
        components:{
            upheader,
            mainphoto,
            features,
            bottomfooter
        },
        data(){
            return{
                allfeatures
            }
        },
        
        mounted(){

        },

        methods:{

        },
    }
</script>

<style lang="scss" scoped>
.bg{
    position: relative;
    width: 100%;
    background-color:rgb(245, 247, 249);
}
</style>