// getters实现的功能类似于组件中的computed属性
export default {
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
}
