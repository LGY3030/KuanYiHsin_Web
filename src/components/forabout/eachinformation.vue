<template> 
    <div class="eachsection">
        <div class="eachtitle">
            {{title}}
        </div>
        <div v-if="link.length>0" class="eachcontent">
            <a  href="link" target="_blank">
                {{content}}
            </a>
        </div>
        <div v-else class="eachcontent">
            {{content}}
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            title: { type: String },
            content: { type: String },
            link: { type: String },
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
    .eachsection{
        position: relative;
        width: 100%;
        margin: 5px 0 5px 0;
        display: flex;
        flex-direction: row;
        font-size: 18px;
        
        .eachtitle{
            width: 100px;
            //background-color: red;
        }
        .eachcontent{
            //background-color: burlywood;
            a{
                text-decoration: none;
                color: rgb(46, 75, 172);
            }
        }
    }
</style>