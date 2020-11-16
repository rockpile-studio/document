const app = new Vue({
  el: '#app',
  data: {
    books: [
      {
        id: 50301,
        name: 'unix编程指南',
        price: 100, count: 0,
        publishDate: '2020-01-01'
      },
      {
        id: 50302,
        name: 'java编程思想',
        price: 200,
        count: 0,
        publishDate: '2020-01-01'
      },
      {
        id: 50303,
        name: '小学语文一年级',
        price: 300,
        count: 0,
        publishDate: '2020-01-01'
      },
    ],
    totalPrice: 0,
  },
  methods: {
  }
});
