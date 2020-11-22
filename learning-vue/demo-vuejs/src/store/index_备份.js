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

import {INCREMENT_COUNTER_N, DECREMENT_COUNTER} from "./mutation.types";

// 安装vuex插件：Vue.use()会执行Vuex中的install方法
Vue.use(Vuex)

// 创建Vuex对象
const store = new Vuex.Store({
  // Vuex.store中的state是响应式的，当state中的数据发生变化时，Vue组件会自动更新
  // 编码是需要遵守Vuex对应的规则：
  // - 提前在store中初始化所需的属性
  // - 当给state中的对象添加新属性时，使用以下方式：
  // 1、Vue.set(obj, 'newProp', 123)
  // 2、通过新对象给旧对象重新赋值
  state: {
    count: 100,
    students: [
      {id: 50301, name: 'hua', age: 18},
      {id: 50302, name: 'ming', age: 24},
      {id: 50303, name: 'hong', age: 30},
    ],
    book: {id: 5030, name: "python机器学习"},
  },
  // Vuex中store状态更新的唯一方式就是 通过mutation提交
  // 通常情况下，Vuex要求在mutation中的方法必须是同步方法
  // 主要是因为当我们使用devtools时，可以帮助我们捕获mutation的快照
  // 但是如果是异步操作，那么devtools将不能很好地跟踪异步操作什么时候会被完成
  // 必须使用action替代mutation进行异步操作的提交
  mutations: {
    incrementCounterN(state, num) {
      state.count += num;
    },
    // 通过mutation类型常量的方式声明，官方推荐使用类型常量定义mutation
    // decrementCounter(state) {
    [DECREMENT_COUNTER](state) {
      state.count--;
    },
    addBookPriceProp(state) {
      // - 当给state中的对象添加新属性时，使用以下方式：
      // 1、Vue.set(obj, 'newProp', 123)
      // 2、通过新对象给旧对象重新赋值
      // 该方式不是响应式的，改为使用Vue.delete
      // delete state.book.price;
      Vue.delete(state.book, 'price');
      Vue.set(state.book, 'price', state.count);
    }
  },
  // action类似mutation，使用action替代mutation进行异步操作的提交
  actions: {
    // 如果不用传递参数，action编码：asynDecrement(context)
    asynDecrement(context, payload) {
      setTimeout(() => {
        context.commit(DECREMENT_COUNTER);
        // console.log(payload);
        // 如果希望action异步调用成功，通知外部程序，可以把payload声明为函数，action执行回调函数
        console.log(payload.message);
        payload.succ();
      }, 2000)
    },
    //  改写成Promise的实现代码
    asynDecrementPromise(context, payload) {
      return new Promise(resolve => {
        setTimeout(() => {
          context.commit(DECREMENT_COUNTER);
          console.log(payload);
          resolve('test');
        }, 2000)
      })
    },
  },
  // getters实现的功能类似于组件中的computed属性
  getters: {
    squareCounter(state) {
      return state.count * state.count;
    },
    // getters默认是不能传递参数的，如果需要传递参数，getters本身要返回另一个函数
    studentsAgeN(state) {
      // 可通过箭头函数简写为
      // return age => state.students.filter(s => s.age > age);
      return function (age) {
        return state.students.filter(s => s.age > age);
      }
    },
    studentsAge16Count(state, getters) {
      return getters.studentsAgeN(16).length;
    },
    studentById(state) {
      return studentId => {
        return state.students.filter(s => s.id === studentId);
      }
    },
  },
  // Vuex允许开发者将store分隔成模块（Module），而每个模块都拥有自己的state、mutations、getters、actions
  modules: {}
})

// 导出store对象
export default store;
