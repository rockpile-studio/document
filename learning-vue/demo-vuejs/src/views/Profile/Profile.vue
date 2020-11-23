<template>
  <div>
    <h3>个人中心</h3>
    <div>测试axios框架</div>
    <!--  安装axios：npm install axios &#45;&#45;save-->
    <!--  axios支持多种请求方式：-->
    <!--  axios(config)-->
    <!--  axios.request(config)-->
    <!--  axios.get(url[, config])-->
    <!--  axios.delete(url[, config])-->
    <!--  axios.head(url[, config])-->
    <!--  axios.post(url[, data[, config]])-->
    <!--  axios.put(url[, data[, config]])-->
    <!--  axios.patch(url[, data[, config]])  -->
  </div>
</template>

<script>
  // 导入axios框架
  import axios from 'axios'

  axios({
    url: 'http://127.0.0.1:5030/demo/server/info',
    method: 'GET'
  }).then(res => {
    console.log('server/info', res);
  })

  axios({
    url: 'http://127.0.0.1:5030/demo/query/user',
    // params属性：url GET参数，自动拼接
    // http://127.0.0.1:5030/demo/query/user?id=50301&name=rockpile
    params: {
      id: '50301',
      name: 'rockpile',
    },
    method: 'GET',
  }).then(res => {
    console.log('query/user', res);
  })

  axios.post('http://127.0.0.1:5030/demo/create/user', {
    name: 'rockpile',
    age: 18,
    interests: ['programming', 'running', 'reading'],
    tags: {hobby: 'gunpla'},
    createDate: '2020-01-01 3:00:00'
  }).then(res => {
    console.log('create/user', res);
  })


  export default {
    name: "Profile"
  }
</script>

<style scoped>

</style>
