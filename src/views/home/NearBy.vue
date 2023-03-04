<template>
  <div class="nearby">
    <h3 class="nearby__title">附近店铺</h3>
    <router-link
      
      v-for="item in nearbyList"
      :key="item._id"
      :item="item"
      :hideBorder="true"
      :to="`/shop/${item._id}`"
    >
      <ShopInfo :item="item" />
    </router-link>
  </div>
</template>

<script>
import { ref } from "vue";
import { get } from "../../utils/request";
import ShopInfo from "../../components/ShopInfo.vue"; //组件不用大括号
const useNearbyListEffect = () => {
  const nearbyList = ref([]);
  const getNearbyList = async () => {
    const result = await get("/api/shop/hot-list");
    if (result?.errno === 0 && result?.data?.length) {
      nearbyList.value = result.data;
    }
  };
  return {
    nearbyList,
    getNearbyList,
  };
};

export default {
  name: "NearBy",
  components: {
    ShopInfo,
  },
  setup() {
    const { nearbyList, getNearbyList } = useNearbyListEffect();
    getNearbyList();
    return {
      nearbyList,
      // nearbyList
    };
  },
};
// const nearbyList = [
//   {
//   id:1,
//   imgUrl:'http://www.dell-lee.com/imgs/vue3/near.png',
//   title:'沃尔玛',
//   tags:['月售1万+','起送$0','基础运费$5'],
//   desc:'VIP尊享满89元减4元运费券 (每月3张)',
// },{
//   id:2,
//   imgUrl:'http://www.dell-lee.com/imgs/vue3/near.png',
//   title:'沃尔玛',
//   tags:['月售1万+','起送$5','基础运费$5'],
//   desc:'VIP尊享满89元减4元运费券 (每月3张)',
// },
// {
//   id:3,
//   imgUrl:'http://www.dell-lee.com/imgs/vue3/near.png',
//   title:'沃尔玛',
//   tags:['月售1万+','起送$5','基础运费$5'],
//   desc:'VIP尊享满89元减4元运费券 (每月3张)',
// },
// {
//   id:4,
//   imgUrl:'http://www.dell-lee.com/imgs/vue3/near.png',
//   title:'沃尔玛',
//   tags:['月售1万+','起送$5','基础运费$5'],
//   desc:'VIP尊享满89元减4元运费券 (每月3张)',
// },
// {
//   id:5,
//   imgUrl:'http://www.dell-lee.com/imgs/vue3/near.png',
//   title:'沃尔玛',
//   tags:['月售1万+','起送$5','基础运费$5'],
//   desc:'VIP尊享满89元减4元运费券 (每月3张)',
// },

// {
//   id:6,
//   imgUrl:'http://www.dell-lee.com/imgs/vue3/near.png',
//   title:'沃尔玛',
//   tags:['月售1万+','起送$5','基础运费$5'],
//   desc:'VIP尊享满89元减4元运费券 (每月3张)',
// },
// {
//   id:7,
//   imgUrl:'http://www.dell-lee.com/imgs/vue3/near.png',
//   title:'沃尔玛',
//   tags:['月售1万+','起送$5','基础运费$5'],
//   desc:'VIP尊享满89元减4元运费券 (每月3张)',
// },
// {
//   id:8,
//   imgUrl:'http://www.dell-lee.com/imgs/vue3/near.png',
//   title:'沃尔玛',
//   tags:['月售1万+','起送$5','基础运费$5'],
//   desc:'VIP尊享满89元减4元运费券 (每月3张)',
// },
// {
//   id:9,
//   imgUrl:'http://www.dell-lee.com/imgs/vue3/near.png',
//   title:'沃尔玛',
//   tags:['月售1万+','起送$5','基础运费$5'],
//   desc:'VIP尊享满89元减4元运费券 (每月3张)',
// },
// {
//   id:10,
//   imgUrl:'http://www.dell-lee.com/imgs/vue3/near.png',
//   title:'沃尔玛',
//   tags:['月售1万+','起送$5','基础运费$5'],
//   desc:'VIP尊享满89元减4元运费券 (每月3张)',
// }
// ]
</script>

<style lang="scss" scoped>
@import "../../style/viriables.scss";
@import "../../style/mixins.scss";
.nearby {
  &__title {
    margin: 0.16rem 0 0.04rem 0;
    font-size: 0.18rem;
    font-weight: normal;
    color: $content-fontColor;
  }
}
a {
  text-decoration: none;
  color:$content-fontColor
}
</style>
