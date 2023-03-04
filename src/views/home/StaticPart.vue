<template>
  <div class="positon">
    <span class="iconfont positon__icon">&#xe8ff;</span>
    北京理工大学国防科技园2号楼10层 北京理工大学国防科技园2号楼10层
    北京理工大学国防科技园2号楼10层
    <span class="iconfont positon__notic">&#xe601;</span>
    <div class="search">
      <span class="iconfont">&#xe6e1;</span>
      <span class="search__text">山姆会员商店优惠商品</span>
    </div>
  </div>
  <div class="banner">
    <img
      class="banner__img"
      src="http://www.dell-lee.com/imgs/vue3/banner.jpg"
      alt=""
    />
  </div>
  <div class="icons">
    <div v-for="(item,index) in    staticList"
    :key="index" class="icons__item">
      <img
        class="icons__item__img"
        :src="item.src"
        alt=""
      />
      <p class="icons__item__desc">{{item.name}}</p>
    </div>
  </div>
  <div class="gap"></div>
</template>

 <script>
export default {
  name: "StaticPart",
  setup() {
    // :src ="`http://www.dell-lee.com/imgs/vue3/${item.src}.png`" src:超市
    const staticList = [
      { src: "http://www.dell-lee.com/imgs/vue3/超市.png", name: "超市便利" },
      { src: "http://www.dell-lee.com/imgs/vue3/菜市场.png", name: "菜市场" },
      { src: "http://www.dell-lee.com/imgs/vue3/水果店.png", name: "水果店" },
      { src: "http://www.dell-lee.com/imgs/vue3/鲜花.png", name: "鲜花绿植" },
      { src: "http://www.dell-lee.com/imgs/vue3/医药健康.png", name: "医药健康" },

      { src: "http://www.dell-lee.com/imgs/vue3/家居.png", name: "家居时尚" },
      { src: "http://www.dell-lee.com/imgs/vue3/蛋糕.png", name: "烘培蛋糕" },
      { src: "http://www.dell-lee.com/imgs/vue3/签到.png", name: "签到" },
      { src: "http://www.dell-lee.com/imgs/vue3/大牌免运.png", name: "大牌免运" },
      { src: "http://www.dell-lee.com/imgs/vue3/红包.png", name: "红包套餐" },
    ];
    return {
      staticList
    }
  },
};
</script>


  <style lang="scss" scoped>
@import "../../style/viriables.scss";
@import "../../style/mixins.scss";
.positon {
  position: relative;
  padding: 0.16rem 0.24rem 0.16rem 0;
  line-height: 0.22rem;
  font-size: 0.16rem;
  color: $content-fontColor;
  @include ellipsis;
}

.positon__icon {
  position: relative;
  top: 0.01rem;
  font-size: 0.2rem;
  //margin-right:.08rem
}
.positon__notic {
  position: absolute;
  right: 0;
  font-size: 0.2rem;
  top: 0.17rem;
}
.search {
  height: 0.32rem;
  background-color: $search-bgColor;
  color: $search-fontColor;
  border-radius: 0.16rem;
  font-size: 0.14rem;
  margin-block: 0.12rem;
  .iconfont {
    display: inline-block;
    padding: 0 0.08rem 0 0.16rem;
    font-size: 0.2rem;
  }
  &__text {
    display: inline-block;
    font-size: 0.14rem;
  }
}
.banner {
  height: 0; //防止抖动 宽高比 高除以宽 1388 * 238 238 / 138 = 0.2539
  overflow: hidden; //防止抖动
  padding-bottom: 25.4%; // 防止抖动
  &__img {
    width: 100%;
  }
}
.icons {
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.16rem;
  &__item {
    width: 20%;

    &__img {
      display: block;
      width: 0.4rem;
      height: 0.4rem;
      margin: 0 auto;
    }
    &__desc {
      margin: 0.06rem 0 0.16rem 0;
      text-align: center;
      color: $content-fontColor;
    }
  }
}
.gap {
  margin: 0 -0.18rem;
  height: 0.1rem;
  background-color: $content-bgColor;
}
</style>