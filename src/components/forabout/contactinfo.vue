<template>
    <div>
      <ArticleContainer bg-color="#f5f7f9">
        <div class="contactinfopart">
            <div class="eachcontactinfo">
                <div class="contactinfograph">
                    <i class="fas fa-phone"></i>
                </div>
                <div class="contactinfoinfo">
                    <div class="infotitle">
                        電話
                    </div>
                    <div class="infoinfo">
                        0911883558
                    </div>
                </div>
            </div>
            <div class="eachcontactinfo">
                <div class="contactinfograph">
                    <i class="far fa-envelope"></i>
                </div>
                <div class="contactinfoinfo">
                    <div class="infotitle">
                        電子信箱
                    </div>
                    <div class="infoinfo">
                        bnw8989@gmail.com
                    </div>
                </div>
            </div>
            <div class="eachcontactinfo">
                <div class="contactinfograph">
                    <i class="fas fa-location-arrow"></i>
                </div>
                <div class="contactinfoinfo">
                    <div class="infotitle">
                        地址
                    </div>
                    <div class="infoinfo">
                        新北市三重區中正北路315巷6弄13號
                    </div>
                </div>
            </div>
        </div>
      </ArticleContainer>
    </div>
</template>

<script>
import ArticleContainer from "@/components/ui/ArticleContainer.vue";

export default {
  components: {
    ArticleContainer,
  },
};
</script>

<style lang="scss">
    .contactinfopart{
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        flex-direction: column;
        @media (min-width: 768px) {
            flex-direction: row;
        }
        .eachcontactinfo{
            flex-basis: 50%;
            display: flex;
            flex-direction: row;
            padding-bottom:30px;
            //background-color: aquamarine;
            .contactinfograph{
                //background-color: cadetblue;
                width: 45px;
                height: 45px;
                border: 2px solid #c2972f;
                border-radius:50%;
                @media (min-width: 500px) {
                    width: 60px;
                    height: 60px;
                }
                .fas {
                    font-size: 16px;
                    color: #c2972f;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    text-decoration: none;
                    @media (min-width: 500px) {
                        font-size: 20px;
                    }
                }
                .far {
                    font-size: 16px;
                    color:#c2972f;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    text-decoration: none;
                    @media (min-width: 500px) {
                        font-size: 20px;
                    }
                }
            }
            .contactinfograph:hover{
                background-color: #ececec;
            }
            .contactinfoinfo{
                display: flex;
                flex-direction: column;
                .infotitle{
                    flex-basis: 50%;
                    display: flex;
                    align-items: center;
                    margin-left:10px;
                    color:#c2972f;
                    //background-color: brown;
                }
                .infoinfo{
                    flex-basis: 50%;
                    display: flex;
                    align-items: center;
                    margin-left:10px;
                    //background-color: beige;
                }
            }
        }
    }
</style>