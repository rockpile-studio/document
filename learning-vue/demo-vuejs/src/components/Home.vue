<template>
  <div>
    <h3>Home页面</h3>
    <span>Home页面内容：哈哈哈</span>
    <!-- 实现嵌套路由分两个步骤-->
    <!-- 1、创建对应的子组件，并在路由映射中配置对应的子路由-->
    <!-- 2、在组件内部使用<router-view>标签-->
    <!-- <router-link>标签中to属性，需要指定完整的路由path -->
    <router-link to="/home/news" tag="button">新闻</router-link>
    <router-link to="/home/message" tag="button">消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "Home",
    data() {
      return {}
    },
  }
</script>

<style scoped>

</style>
