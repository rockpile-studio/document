<template>
  <div id="app">
    <img src="./assets/logo.png" style="width: 100px; height: 100px">
    <!-- <router-view/> -->
    <br>
    <!-- 使用路由：通过<router-link>和<router-view>标签 -->
    <!-- <router-link>标签是vue-router中已经内置的组件，它默认会被渲染成一个<a>标签，点击后实现url跳转 -->
    <!-- 当<router-link>对应的路由匹配成功时，互自动给当前元素设置一个router-link-active的class -->
    <!-- 在进行高亮显示的导航菜单或者底部tabbar时，会使用到该类 -->
    <router-link to="/home">首页</router-link>
    <!-- 动态路由 -->
    <!-- 在某些情况下，一个页面的path路径可能不确定，url需要拼上用户ID -->
    <!-- 这种Path和Component的匹配关系，称为动态路由（也是路由传递数据的一中方式）-->
    <!-- 传递参数 - params类型-->
    <!-- 配置路由格式：/router/:id-->
    <!-- 传递的方式：在path后面跟上对应的参数值-->
    <!-- 传递后形成的路径：/router/uid50301-->
    <router-link :to="'/user/'+userId" tag="button">用户</router-link>
    <!-- 传递参数 - query类型-->
    <!-- 配置路由格式：/router（即普通配置）-->
    <!-- 传递的方式：对象中使用query的key作为传递方式-->
    <!-- 传递后形成的路径：/router?id=uid50301-->
    <router-link :to="{path: '/profile', query: {name:'rockpile', age:18, height:180}}" tag="button">档案</router-link>
    <!-- <router-link>的相关属性：-->
    <!-- # to：用于指定跳转的路径-->
    <!-- # tag：指定<router-link>之后渲染成什么组件，比如渲染成button、li等-->
    <!-- # replace：指定replace属性不会留下history记录，后退键不能返回到上一个页面-->
    <router-link to="/about" tag="button" replace>关于</router-link>
    <!-- keep-alive是Vue内置的组件，可以使被包含的组件保留状态，避免重新渲染。-->
    <!-- router-view也是一个组件，如果直接包在keep-alive里面，所有路径匹配到的视图组件都会被缓存-->
    <!-- keep-alive有两个重要的属性-->
    <!-- include 字符串或正则表达式，只要匹配的组件name就会被缓存-->
    <!-- exclude 字符串或正则表达式，任何匹配的组件name都不会被缓存-->
    <keep-alive exclude="Profile,User">
      <!-- router-view是用来指定router-link指定url的组件渲染页面的位置 -->
      <!-- 网页的其他内容，比如顶部的标题/导航，或底部的版权信息等，回合<router-view>处于同一级别 -->
      <!-- 路由切换时，切换的是<router-view>挂载的组件，其他内容不会发生改变 -->
      <router-view></router-view>
    </keep-alive>
    <br>
    <button @click="homeClick">Home</button>
    <button @click="profileClick">Profile</button>
    <button @click="aboutClick">About</button>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        userId: '50301',
      }
    },
    methods: {
      homeClick() {
        console.log('homeClick');
        // 通过代码的方式修改路径
        // vue-router在所有的组件中都增加一个$router的属性
        this.$router.push('/home');
      },
      aboutClick() {
        console.log('aboutClick');
        this.$router.replace('/about');
      },
      profileClick() {
        this.$router.push(
          {
            path: '/profile',
            query: {
              name: 'xinxin',
              age: 6,
              height: 130
            }
          }
        )
      }
    }
  }
</script>

<style>
  .router-link-active {
    color: red;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
