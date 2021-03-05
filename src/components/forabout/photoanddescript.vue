<template>
    <div>
      <ArticleContainer bg-color="#f5f7f9">
        <ArticleQuote
            text="“領先，因為用心。 在乎您的肌膚感受”"
        />
        <div class="abouttexttitle">
            公司簡介
        </div>
        <p>
            冠億興有限公司自2002年成立來，即自創品牌B&W HORSE和CHIC NEW以生產男女內褲、保暖衣、涼感機能衣、襪子、海灘褲、紗布巾和OEM國內各大品牌內著為主。
        </p>
        <P>
            專業製造生產 / 進出口 / 批發 ,專業一條龍為您服務。
        </P>
        <p>
            2005~2012年OEM代工煙斗男平口褲。
        </p>
        <p>
            2013~2017年OEM代工HangTen的所有男性內褲。
        </p>
        <p>
            另多家目前還在OEM的客人，基於商業保密，不在此敘述。
        </p>
      </ArticleContainer>
    </div>
</template>

<script>
import ArticleContainer from "@/components/ui/ArticleContainer.vue";
import ArticleQuote from "@/components/ui/ArticleQuote.vue";
export default {
  components: {
    ArticleContainer,
    ArticleQuote,
  },
};
</script>

<style lang="scss">
  .abouttexttitle{
    font-size: 30px;
    border-bottom: 1px solid #d1d1d1;
    padding: 20px 0 20px 0;
    margin: 80px 0 30px 0;
  }
</style>