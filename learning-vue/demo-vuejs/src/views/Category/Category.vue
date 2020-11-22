<template>
  <div>
    <h3>商品分类</h3>
    <div>Vuex共享属性：{{$store.state.count}}</div>
    <div>Vuex getters，获取count的平方：
      {{$store.getters.squareCounter}}
    </div>
  </div>
</template>

<script>
  export default {
    name: "Category"
  }
</script>

<style scoped>

</style>
