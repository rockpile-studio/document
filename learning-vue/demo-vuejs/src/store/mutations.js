import {INCREMENT_COUNTER_N, DECREMENT_COUNTER} from "./mutation.types";
import Vue from "vue";

// Vuex中store状态更新的唯一方式就是 通过mutation提交
// 通常情况下，Vuex要求在mutation中的方法必须是同步方法
// 主要是因为当我们使用devtools时，可以帮助我们捕获mutation的快照
// 但是如果是异步操作，那么devtools将不能很好地跟踪异步操作什么时候会被完成
// 必须使用action替代mutation进行异步操作的提交
export default {
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
}
