<template> 
    <div class="bg">
        <upheader>

        </upheader>
        <space>
            
        </space>
        <productphoto>

        </productphoto>
        <!-- <categorybar>

        </categorybar> -->
        <productpage>
            
        </productpage>
        <bottomfooter>

        </bottomfooter>
    </div>
</template>

<script>
    import upheader from '@/components/common/upheader.vue'
    import space from '@/components/common/space.vue'
    import productphoto from '@/components/forproduct/productphoto.vue'
    // import categorybar from '@/components/forproduct/categorybar.vue'
    import productpage from '@/components/forproduct/productpage.vue'
    import bottomfooter from '@/components/common/bottomfooter.vue'

    export default {
        components:{
            upheader,
            space,
            productphoto,
            // categorybar,
            productpage,
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