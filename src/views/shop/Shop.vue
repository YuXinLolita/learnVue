<template>
  <div class="wrapper">
    <div class="search">
      <div class="search__back iconfont" @click="handleBackClick">&#xe602;</div>
      <div class="search__content">
        <span class="search__content__icon iconfont">&#xe6e1;</span>
        <input class="search__content__input" placeholder="请输入商品名称" />
      </div>
    </div>
    <ShopInfo :item="item" :hideBorder="false" v-show="item.imgUrl"/>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import { useRouter, useRoute } from "vue-router";
import { get } from "../../utils/request";
import ShopInfo from "../../components/ShopInfo.vue";

//获取当前商铺信息
const useShopInfoEffect = () => {
  const route = useRoute();
  const data = reactive({ item: {} });
  const getItemDate = async () => {
    const result = await get(`/api/shop/${route.params.id}`);
    // console.log('*** 123')
    if (result?.errno === 0 && result?.data) {
      data.item = result.data;
    }
  };
  const { item } = toRefs(data);
  return {
    item,
    getItemDate,
  };
};
//点击回退逻辑
const useBackRouterEffect = () => {
  const router = useRouter(); //useRouter函数
  const handleBackClick = () => {
    router.back();
  };
  return {
    handleBackClick,
  };
};

export default {
  name: "ShopPage",
  components: {
    ShopInfo,
  },
  setup() {
    const { item, getItemDate } = useShopInfoEffect();
    const {handleBackClick} = useBackRouterEffect()
    getItemDate();
    return {
      item,
      handleBackClick,
    };
    // console.log(route.params.id )
    //const data = reactive({   item : {}  })

    // const item = {
    // expressLimit: 0,
    // expressPrice: 5,
    // imgUrl: "http://www.dell-lee.com/imgs/vue3/near.png",
    // name: "沃尔玛",
    // sales: 10000,
    // slogan: "VIP尊享满89元减4元运费券",
    // _id: "1",
    //};
  },
};
</script>

<style lang="scss" scoped>
@import "../../style/viriables.scss";
// @import "../../style/mixins.scss";
.wrapper {
  padding: 0 0.18rem;
}
.search {
  display: flex;
  margin: 0.2rem 0 0.16rem 0;
  height: 0.32rem;
  &__back {
    height: 0.32rem;
    width: 0.3rem;
    font-size: 0.3rem;
    color: #b6b6b6;
  }
  &__content {
    display: flex;
    flex: 1;
    // line-height: 0.32rem;
    background-color: $search-bgColor;
    border-radius: 0.16rem;
    &__icon {
      width: 0.44rem;
      text-align: center;
      color: $search-fontColor;
    }
    &__input {
      width: 100%;
      display: block;
      padding-right: 0.2rem;
      border: none;
      outline: none;
      background: none;
      height: 0.32rem;
      font-size: 0.14rem;
      &::placeholder {
        color: $content-fontColor;
      }
    }
  }
}
</style>