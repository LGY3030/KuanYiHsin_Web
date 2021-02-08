<template> 
    <div class="productpagepart">
        <div :key="getproductflag" class="productpagecontainer">
            <productcard
                v-for="data in current"
                :key="data.title"
                :type="data.type"
                :title="data.title"
                :index="data.index"
            >
            </productcard>
        </div>
    </div>
</template>

<script>
    import productcard from '@/components/forproduct/productcard.vue'

    import fazeii from '@/assets/js/forproduct/fazeii.js'
    import haitancoo from '@/assets/js/forproduct/haitancoo.js'
    import pincocoo from '@/assets/js/forproduct/pincocoo.js'
    export default {
        components:{
            productcard
        },
        data(){
            return{
                fazeii,
                haitancoo,
                pincocoo,
                current: pincocoo,
            }
        },
        computed:{
            getproductflag(){
                return this.$store.state.productflag;
            }
        },
        watch:{
            getproductflag:{
                handler() {
                    if(this.$store.state.productflag == 1) this.current = this.pincocoo;
                    if(this.$store.state.productflag == 2) this.current = this.haitancoo;
                    if(this.$store.state.productflag == 3) this.current = this.fazeii;
                }
            }
        },
        mounted(){

        },

        methods:{

        },
    }
</script>

<style lang="scss" scoped>
.productpagepart{
    position: relative;
    width: 100%;
    background-color: #d0ecff;
    .productpagecontainer{
        max-width: 1280px;
        margin: auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        
    }
}
</style>