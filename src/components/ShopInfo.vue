<template>
<!-- <h1>小荷才露尖尖角</h1> -->
  <div class="shop">
    <img class="shop__img" :src="item.imgUrl" />
    <div
      :class="{
        shop__content: true,
        'shop__content--bordered': hideBorder ? true : false,
      }"
    >
      <div class="shop__content__title">{{ item.name }}</div>
      <div class="shop__content_tags">
        <span class="shop__content__tag"> 月售:{{ item.sales }}</span>
        <span class="shop__content__tag"> 起送:{{ item.expressLimit }}</span>
        <span class="shop__content__tag">
          基础运费:{{ item.expressPrice }}</span
        >
      </div>
      <p class="shop__content__highlight">
        {{ item.slogan }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShopInfo",
  props: ["item", "hideBorder"],
  setup() {
  },
};
</script>

<style lang="scss" scoped>
@import "../style/viriables.scss";
@import "../style/mixins.scss";
.shop {
  display: flex;
  padding-top: 0.12rem;

  &__img {
    margin-right: 0.16rem;
    width: 0.56rem;
    height: 0.56rem;
   
  }
   &__content {
      &--bordered{
        border-bottom: 1px solid $content-bgColor;
      }

      flex: 1;
      padding-bottom: 0.12rem;
      &__title {
        line-height: 0.22rem;

        font-size: 0.16rem;
        color: $content-fontColor;
      }
      &__tags {
        margin-top: 0.08rem;
        line-height: 0.18rem;
        font-size: 0.13rem;
        color: $content-fontColor;
      }
      &__tag {
        margin-right: 0.16rem;
      }
      &__highlight {
        color: #e93b3b;
        line-height: 0.18rem;
        font-size: 0.13rem;
        margin: 0.08rem 0 0 0;
      }
    }
}
</style>