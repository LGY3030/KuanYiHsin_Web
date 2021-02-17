<template> 
    <div class="bg">
        <upheader>

        </upheader>
        <space>

        </space>
        <photoanddescript>

        </photoanddescript>
        <!-- <aboutphoto>
            
        </aboutphoto>
        <infoparagraph>

        </infoparagraph> -->
        <!-- <information>
            
        </information> -->
        <contactinfo>

        </contactinfo>
        <bottomfooter>

        </bottomfooter>
    </div>
</template>

<script>
    import upheader from '@/components/common/upheader.vue'
    import space from '@/components/common/space.vue'
    import photoanddescript from '@/components/forabout/photoanddescript.vue'
    // import aboutphoto from '@/components/forabout/aboutphoto.vue'
    // import infoparagraph from '@/components/forabout/infoparagraph.vue'
    // import information from '@/components/forabout/information.vue'
    import contactinfo from '@/components/forabout/contactinfo.vue'
    import bottomfooter from '@/components/common/bottomfooter.vue'

    export default {
        components:{
            upheader,
            space,
            photoanddescript,
            // aboutphoto,
            // infoparagraph,
            // information,
            contactinfo,
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