<template>
  <div>
    <h3>我的中心</h3>
    <span>姓名：{{$route.query.name}}，年龄{{age}}，身高{{height}}</span>
  </div>
</template>

<script>
  export default {
    name: "Profile",
    data() {
      return {}
    },
    created() {
      console.log('=== Profile created ===');
    },
    destroyed() {
      console.log('=== Profile destroyed ===');
    },
    computed: {
      name() {
        // $router为VueRouter示例，使用$router.push()可导航到不同url
        // $route为当前router跳转对象，里面可获取name、path、query、params等
        return this.$route.query.name;
      },
      age() {
        return this.$route.query.age;
      },
      height() {
        return this.$route.query.height;
      }
    }
  }
</script>

<style scoped>

</style>
