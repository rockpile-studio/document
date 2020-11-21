<template>
  <div>
    <h3>关于页面</h3>
    <span>About页面内容：呵呵呵</span>
  </div>
</template>

<script>
  export default {
    name: "About",
    created() {
      console.log('=== About created ===');
    },
    destroyed() {
      console.log('=== About destroyed ===');
    },
    // 组件内守卫
    beforeRouteEnter: (to, from, next) => {
      // 在渲染该组件的对应路由被confirm前调用
      // 不！能！获取组件实例'this'，因为当守卫执行前，组件实例还没被创建
      console.log('=== beforeRouteEnter ===');
      next();
    },
    beforeRouteUpdate: (to, from, next) => {
      // 在当前路由改变，但是该组件被复用时调用
      // 举例：对于一个带有动态参数的路径 /foo/:id，在/foo/1和/foo/2之间跳转时
      // 由于会渲染同样的Foo组件，因此组件实例会被复用，而这个钩子就会在这个情况下被调用
      // 可以访问组件实例 this
      console.log('=== beforeRouteUpdate ===');
      next();
    },
    beforeRouteLeave: (to, from, next) => {
      // 导航离开该组件的对应路由时被调用
      // 可以访问组件实例 this
      console.log('=== beforeRouteLeave ===');
      next();
    }
  }
</script>

<style scoped>

</style>
