import Vue from 'vue'
import App from './App'
// import router from './router/index'
// 这里是一个简写语法，如果导入的是目录，自动匹配该目录的index文件
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // 在Vue实例中挂载创建的路由实例
  router,
  render: h => h(App)
})


