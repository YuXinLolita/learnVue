<template>
  <div class="wrapper">
    <StaticPart />
    <NearBy />
  <DockerPage />
  </div>
  
  
</template>


<script>
import StaticPart  from "./StaticPart.vue";
import NearBy from './NearBy.vue';
import DockerPage from './DockerPage.vue'

export default {
  name: "HomePage",
  components: {
    StaticPart,
    NearBy,
  DockerPage
  },
};
</script>


<style lang="scss">

</style>
