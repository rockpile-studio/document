<template>
  <div>
    <h3>个人中心</h3>
    <div>测试axios框架</div>
  </div>
</template>

<script>
  import axios from 'axios'

  // axios.defaults使用全局的配置进行网络请求
  // 设置访问根路径
  axios.defaults.baseURL = 'http://127.0.0.1:5030';
  axios.defaults.timeout = 5000;

  axios({
    url: 'http://127.0.0.1:5030/demo/server/info',
    method: 'GET'
  }).then(res => {
    console.log('server/info', res);
  })

  axios({
    url: '/demo/query/user',
    // params属性：url GET参数，自动拼接
    // http://127.0.0.1:5030/demo/query/user?id=50301&name=rockpile
    params: {
      id: '50301',
      name: 'rockpile',
    },
    method: 'GET',
  }).then(res => {
    console.log('query/user', res);
  }).catch(res => {
    console.log('query/user err: ', res);
  })

  axios.post('/demo/create/user', {
    name: 'rockpile',
    age: 18,
    interests: ['programming', 'running', 'reading'],
    tags: {hobby: 'gunpla'},
    createDate: '2020-01-01 3:00:00'
  }).then(res => {
    console.log('create/user', res);
  }).catch(res => {
    console.log('create/user err: ', res);
  })

  // axios发送并发请求
  axios.all([
    axios.get('/demo/query/user?id=50301&name=rockpile'),
    axios.post('/demo/create/user', {
      name: 'rockpile',
      age: 18,
      interests: ['programming', 'running', 'reading'],
      tags: {hobby: 'gunpla'},
      createDate: '2020-01-01 3:00:00'
    }),
  ]).then(results => {
    for (let result of results) {
      console.log('axios all', result.request.responseURL, result)
    }
  })

  import {httpClient} from '../../network/http-client'

  httpClient({
    url: '/demo/create/user',
    method: 'POST',
    data: {
      name: 'rockpile',
      age: 18,
      interests: ['programming', 'running', 'reading'],
      tags: {hobby: 'gunpla'},
      createDate: '2020-01-01 3:00:00'
    }
  }).then(result => {
    console.log('httpClient response:', result);
  }).catch(failure => {
    console.log('httpClient failure:', failure);
  });

  export default {
    name: "Profile"
  }
</script>

<style scoped>

</style>
