<template>
    <div :id="`${title}`" class="productcardpart" @mouseover="getid(index)" @mouseleave="getid(0)">
        <div class="productcardcontainer">
            {{title}}
        </div>
    </div>
</template>
  
<script>
    export default {
        data(){
            return{
                previous: 0,
            }
        },
        props: {
            type: { type: String },
            title: { type: String },
            index: { type: Number },
        },
        methods:{
            getid(num){
                if(num==0){
                    document.getElementById(this.type+"_"+(this.previous).toString()).style.flexBasis = "33.3%";
                    if(this.previous%3==1){
                        if(document.getElementById(this.type+"_"+(this.previous+1).toString())) document.getElementById(this.type+"_"+(this.previous+1).toString()).style.flexBasis = "33.3%";
                        if(document.getElementById(this.type+"_"+(this.previous+2).toString())) document.getElementById(this.type+"_"+(this.previous+2).toString()).style.flexBasis = "33.3%";
                    }
                    else if(this.previous%3==2){
                        if(document.getElementById(this.type+"_"+(this.previous+1).toString())) document.getElementById(this.type+"_"+(this.previous+1).toString()).style.flexBasis = "33.3%";
                        document.getElementById(this.type+"_"+(this.previous-1).toString()).style.flexBasis = "33.3%";
                    }
                    else{
                        document.getElementById(this.type+"_"+(this.previous-1).toString()).style.flexBasis = "33.3%";
                        document.getElementById(this.type+"_"+(this.previous-2).toString()).style.flexBasis = "33.3%";
                    }
                }
                else{
                    document.getElementById(this.title).style.flexBasis = "40%";
                    if(num%3==1){
                        if(document.getElementById(this.type+"_"+(num+1).toString())) document.getElementById(this.type+"_"+(num+1).toString()).style.flexBasis = "30%";
                        if(document.getElementById(this.type+"_"+(num+2).toString())) document.getElementById(this.type+"_"+(num+2).toString()).style.flexBasis = "30%";
                    }
                    else if(num%3==2){
                        if(document.getElementById(this.type+"_"+(num+1).toString())) document.getElementById(this.type+"_"+(num+1).toString()).style.flexBasis = "30%";
                        document.getElementById(this.type+"_"+(num-1).toString()).style.flexBasis = "30%";
                    }
                    else{
                        document.getElementById(this.type+"_"+(num-1).toString()).style.flexBasis = "30%";
                        document.getElementById(this.type+"_"+(num-2).toString()).style.flexBasis = "30%";
                    }
                    this.previous=num;
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
.productcardpart{
    flex-basis: 33.3%;
    display: flex;
    justify-content: center;
    background-color: turquoise;
    margin-bottom: 100px;
    margin-top: 100px;
    transition: flex-basis .3s;
    .productcardcontainer{
        width: 90%;
        height: 400px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: cadetblue;
    }
}

</style>