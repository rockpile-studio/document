import {DECREMENT_COUNTER} from "./mutation.types";

// action类似mutation，使用action替代mutation进行异步操作的提交
export default {
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
}
