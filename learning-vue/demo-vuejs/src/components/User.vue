<template>
  <div>
    <h3>用户页面</h3>
    <span style="color: red">ID = {{userId}}</span>
    <br>
    <span>ID = {{$route.params.userId}}</span>
  </div>
</template>

<script>
  export default {
    name: "User",
    data() {
      return {
        id: '',
        name: '',
      }
    },
    computed: {
      userId() {
        // $router为VueRouter示例，使用$router.push()可导航到不同url
        // $route为当前router跳转对象，里面可获取name、path、query、params等
        // 这里$route.params的userId字段就是在router/insdex.js中配置的动态路由的参数字段名
        return this.$route.params.userId;
      }
    }
  }
</script>

<style scoped>

</style>
