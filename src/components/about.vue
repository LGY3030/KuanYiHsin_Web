<template> 
    <div class="bg">
        <upheader>

        </upheader>
        <space>

        </space>
        <aboutphoto>
            
        </aboutphoto>
        <infoparagraph>

        </infoparagraph>
        <information>
            
        </information>
        <bottomfooter>

        </bottomfooter>
    </div>
</template>

<script>
    import upheader from '@/components/common/upheader.vue'
    import space from '@/components/common/space.vue'
    import aboutphoto from '@/components/forabout/aboutphoto.vue'
    import infoparagraph from '@/components/forabout/infoparagraph.vue'
    import information from '@/components/forabout/information.vue'
    import bottomfooter from '@/components/common/bottomfooter.vue'

    export default {
        components:{
            upheader,
            space,
            aboutphoto,
            infoparagraph,
            information,
            bottomfooter
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
.bg{
    position: relative;
    width: 100%;
    background-color: rgb(245, 247, 249);
}
</style>