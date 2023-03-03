<template>
  <div class="docker">
    <!-- block __emelent --modified -->
    <div v-for=" (item,index) in dockerList" :key="item.icon" 
    :class="{'docker__item':true,'docker__item--active': index === 0}"
    class="docker__item">
      <div class="iconfont" v-html="item.icon"></div>
      <div class="docker__title">{{item.text}}</div>
     
    </div>
  </div>
</template>
<script>

export default {
 name:'DockerPage',
setup(){
  const dockerList = [
    {icon:'&#xe6cb;',text:'首页'},
     {icon:'&#xe600;;',text:'购物车'},
     {icon:'&#xe626;',text:'订单'},
     {icon:'&#xe626;',text:'我的'}
  ]
  return {
    dockerList
  }
}
}
</script>
<style lang="scss" scoped>
@import "../../style/viriables.scss";
@import "../../style/mixins.scss";
.wrapper {
  position:absolute;
  overflow-y: auto;
  left: 0;
  top: 0;
  bottom: 0.5rem;
  right: 0;
  padding: 0 0.18rem 0.18rem;
}
.docker {
  display: flex;
  position: absolute;
   left: 0;
  bottom: 0;
  box-sizing: border-box;
  padding: 0 0.18rem;
 
  width: 100%;
  height: 0.49rem;
  border-top: 0.01rem solid $content-bgColor;
  color: $content-fontcolor;
  &__item {
    flex: 1;
    text-align: center;
    .iconfont {
      margin: 0.07rem 0.24rem 0.02rem;
      font-size: 0.18rem;
    }
    &--active {
      color: #1fa4fc;
    }
    &__title {
      font-size: 0.2rem;
      transform: scale(0.5 0.5);
      transform-origin: center top;
    }
  }
  // background: violet;
}
</style>