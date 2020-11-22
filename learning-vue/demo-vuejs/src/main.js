import Vue from 'vue'
import App from './App'
// import router from './router/index'
// 这里是一个简写语法，如果导入的是目录，自动匹配该目录的index文件
import router from './router'
// 挂载Vuex的Store对象
import store from './store/index'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // 在Vue实例中挂载创建的路由实例
  router,
  // 在Vue实例中挂载Vuex.store，底层代码会将store赋值给Vue.prototype.$store
  store,
  render: h => h(App)
})


