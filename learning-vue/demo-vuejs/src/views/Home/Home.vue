<template>
  <div>
    <h3>商城首页</h3>
    <div>Vuex共享属性：{{$store.state.count}}</div>
    <!-- 不要这样修改store中的属性，使用Vuex规定的mutations方法修改-->
    <!-- Vuex中store状态更新的唯一方式就是 通过mutation提交 -->
    <!-- <button @click="$store.state.count&#45;&#45;">-</button> -->
    <!-- <button @click="$store.state.count++">+</button> -->
    <button @click="increment(10)">+10</button>
    <button @click="increment(1)">+</button>
    <button @click="decrement">-(异步)</button>
    <div>Vuex getters，获取count的平方：
      {{$store.getters.squareCounter}}
    </div>
    <br>
    <div>Vuex getters，年龄大于20的学生：
      {{$store.getters.studentsAgeN(20)}}
    </div>
    <br>
    <div>Vuex getters，年龄大于16的学生数：
      {{$store.getters.studentsAge16Count}} 人
    </div>
    <br>
    <div>{{$store.state.book}}</div>
    <button @click="addPrice">增加书籍价格</button>
  </div>
</template>

<script>
  import {INCREMENT_COUNTER_N, DECREMENT_COUNTER} from "../../store/mutation.types";

  export default {
    name: "Home",
    methods: {
      // 携带参数的mutation，如果是多个参数通过对象传递
      increment(num) {
        // 1、mutation普通的提交风格
        // 通过$store.commit调用mutations中定义的方法
        // 通过mutations调用的方法，可以通过devtools进行调试
        this.$store.commit('incrementCounterN', num);
      },
      decrement() {
        // this.$store.commit('decrementCounter');
        // 使用类型常量提交
        // this.$store.commit(DECREMENT_COUNTER);

        // 2、mutation指定type属性的提交风格
        // this.$store.commit({
        //   type: 'decrementCounter',
        // });

        // 示例：通过action异步操作mutation
        // this.$store.dispatch('asynDecrement', '{message:"this is argument"}');
        // 如果希望action异步调用成功，通知外部程序，可以把payload声明为函数，action执行回调函数
        // this.$store.dispatch('asynDecrement',
        //   {
        //     message: 'this is argument',
        //     succ: () => {
        //       console.log('回调函数，通知方法执行成功');
        //     }
        //   });
        this.$store.dispatch('asynDecrementPromise', '{message:"this is argument"}')
          .then(succ => {
            console.log('回调函数，通知方法执行成功', succ);
          }, err => {
            console.log('回调函数，通知方法执行失败', err);
          })
      },
      addPrice() {
        this.$store.commit('addBookPriceProp');
      }
    }
  }
</script>

<style scoped>

</style>
