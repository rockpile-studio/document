<template>
  <div>
    <tab-bar>
      <tab-bar-item link="home" activeColor="red">
        <!-- 这里路径开头的"~assets"是自定义的别名，详见webpack.base.config.js中resolve.alias配置 -->
        <img slot="item-icon" src="~assets/img/TabBar/home.png" alt="">
        <img slot="item-icon-active" src="~assets/img/TabBar/home-active.png" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item link="category" activeColor="red">
        <img slot="item-icon" src="../../assets/img/TabBar/profile.png" alt="">
        <img slot="item-icon-active" src="../../assets/img/TabBar/profile-active.png" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item link="shopcart" activeColor="red">
        <img slot="item-icon" src="../../assets/img/TabBar/home.png" alt="">
        <img slot="item-icon-active" src="../../assets/img/TabBar/home-active.png" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item link="profile" activeColor="red">
        <img slot="item-icon" src="../../assets/img/TabBar/profile.png" alt="">
        <img slot="item-icon-active" src="../../assets/img/TabBar/profile-active.png" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from "./TabBar";
  import TabBarItem from "./TabBarItem";

  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem,
    }
  }
</script>

<style scoped>

</style>
