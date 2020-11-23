<template>
  <div>
    <router-view />
    <van-tabbar v-model="active" @change="onChange">
      <van-tabbar-item name="home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item name="knapsack" icon="search">背包</van-tabbar-item>
      <van-tabbar-item name="personalCenter" icon="friends-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 'home',
    };
  },
  methods: {
    onChange(name) {
      this.$router.push({path:`/layout/${name}`})
    }
  }
};
</script>