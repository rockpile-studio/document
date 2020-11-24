import axios from "axios";

export function httpClient(config) {
  // 针对axios访问不同地址服务器的情况，较少axios全局对象的使用
  // 创建Axios实例
  const axiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:5030',
    timeout: 5000,
  })

  // axios提供了拦截器，用于在每次发送请求或回复，进行对应的处理
  axiosInstance.interceptors.request.use(
    (config) => {
      // request拦截success
      console.log('axios.interceptors.request.success', config);
      // 请求成功拦截的应用场景：
      // 1、config中的一些信息不符合服务器的要求，比如：http-header
      // 2、每次发送网络请求时，在界面显示一个请求图标（isloading=true），在网络请求成功后isloading=false
      // 3、一部分网络请求（比如登陆），必须携带token等特殊信息，当不满足时拦截跳转login页面
      return config;
    },
    (error) => {
      // request拦截failuare
      console.log('axios.interceptors.request.failuare', error);
    }
  )
  // 响应拦截
  axiosInstance.interceptors.response.use(
    // response拦截success
    (response) => {
      console.log('axios.interceptors.response.success', response);
      return response.data;
    },
    // response拦截failure
    (error) => {
      console.log('axios.interceptors.response.failuare', error);
    }
  )

  // 由于axiosInstance(config)返回的就是AxiosPromise，不用封装then-catch
  return axiosInstance(config);

  // return new Promise((resolve, reject) => {
  //   const axiosInstance = axios.create({
  //     baseURL: 'http://127.0.0.1:5030', timeout: 5000,
  //   })
  //   axiosInstance(config)
  //     .then((result) => {
  //       resolve(result);
  //     }).catch((err) => {
  //     reject(err);
  //   })
  // })
}
