import Vue from 'vue'
import Vuex from 'vuex'
// Vuex是专门为Vuejs应用程序开发的状态管理模式
// 采用"集中式存储管理"应用所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化
// 简单理解，就是将多个组件共享的变量存储在一个对象里面，相当于是一个全局的单例模式

// 一般有哪些状态需要用到多组件共享？
// 1、比如用户的登录状态，用户名称、头像、地理位置等信息
// 2、比如商品的收藏、购物车中的物品等
// 这些状态信息，都可以放在统一的地方，对它们进行保存和管理，并且是响应式的
// 安装 npm install vuex --save
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

// 安装vuex插件：Vue.use()会执行Vuex中的install方法
Vue.use(Vuex)

const state = {
  count: 100,
  students: [
    {id: 50301, name: 'hua', age: 18},
    {id: 50302, name: 'ming', age: 24},
    {id: 50303, name: 'hong', age: 30},
  ],
  book: {id: 5030, name: "python机器学习"},
};

// 创建Vuex对象
const store = new Vuex.Store({
  // Vuex.store中的state是响应式的，当state中的数据发生变化时，Vue组件会自动更新
  // 编码是需要遵守Vuex对应的规则：
  // - 提前在store中初始化所需的属性
  // - 当给state中的对象添加新属性时，使用以下方式：
  // 1、Vue.set(obj, 'newProp', 123)
  // 2、通过新对象给旧对象重新赋值
  state,
  // Vuex中store状态更新的唯一方式就是 通过mutation提交
  mutations,
  // action类似mutation，使用action替代mutation进行异步操作的提交
  actions,
  // getters实现的功能类似于组件中的computed属性
  getters,
  // Vuex允许开发者将store分隔成模块（Module），而每个模块都拥有自己的state、mutations、getters、actions
  modules: {}
})

// 导出store对象
export default store;
