<template>
  <div>
    <div class="title">{{message}}</div>
    <button @click="buttonClick">按钮</button>
    <Component></Component>
  </div>
</template>

<script>
  // import Component from './Component.vue'
  // 在webpack.config.js中配置"extensions: ['.js','.css','.vue']"后，可省略文件后缀的指定
  import Component from './Component'

  export default {
    name: "App",
    data() {
      return {
        message: 'hello Vue',
      }
    },
    components: {
      Component,
    },
    methods: {
      buttonClick() {
        console.log("点击按钮")
      }
    }
  }
</script>

<style scoped>
  .title {
    color: gray;
  }
</style>