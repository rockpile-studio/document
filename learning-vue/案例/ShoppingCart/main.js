const app = new Vue({
  el: '#app',
  data: {
    books: [
      {
        id: 50301,
        name: 'unix编程指南',
        price: 100.50,
        count: 1,
        publishDate: '2020-01-01'
      },
      {
        id: 50302,
        name: 'java编程思想',
        price: 200.80,
        count: 1,
        publishDate: '2020-01-01'
      },
      {
        id: 50303,
        name: '小学语文一年级',
        price: 300.00,
        count: 1,
        publishDate: '2020-01-01'
      },
    ]
  },
  methods: {
    increment(index) {
      this.books[index].count++;
    },
    decrement(index) {
      this.books[index].count--;
    },
    remove(index) {
      this.books.splice(index, 1);
    }
  },
  computed: {
    totalPrice() {
      let totalPrice = 0.0;
      // for( let i=0; i<this.books.length; i++ ){
      //   totalPrice = totalPrice + this.books[i].price * this.books[i].count;
      // }
      // 通过JS高阶函数的方式简化代码
      totalPrice = this.books.reduce((total,n) => (total += n.price * n.count), 0);
      return totalPrice;
    },
  },
  // 使用过滤器的方式对价格进行格式化等操作
  filters: {
    showPrice(price) {
      // .toFixed(2)保留两位小数
      return '￥' + price.toFixed(2);
    },
  },
});
