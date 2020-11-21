<template>
  <!-- tab-bar标签栏 -->
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TabBar"
  }
</script>

<style scoped>

  #tab-bar {
    display: flex; /*弹性布局*/
    background-color: lightgray;
    position: fixed; /*生成绝对定位的元素*/
    /*元素的位置通过 left, top, right 以及 bottom 属性进行规定*/
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0px -1px 3px gray; /*阴影：x偏移 y偏移 模糊距离 颜色*/
  }


</style>
