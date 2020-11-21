import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// 导入路由组件对象
import About from '../components/About'
// import Home from '../components/Home'
// import User from '../components/User'

// 在使用vue-router前，先通过Vue.use(plugin)安装导入路由对象插件
Vue.use(VueRouter)

// 路由懒加载推荐同这种写法
const Home = () => import('../components/Home')
const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')
const Profile = () => import('../components/Profile')

// 配置路由映射：组件和路径的映射关系
const routes = [
  // {
  //   path: '/',
  //   name: 'HelloWorld',
  //   component: HelloWorld
  // },
  // 设置默认路径
  {
    path: '/',
    meta: {title: '首页'},
    redirect: '/home' /*redirect重定向*/
  },
  {path: '/about', meta: {title: '关于'}, component: About},
  // ### 路由的懒加载 ###
  // 当打包构建应用时，Javascript包会变得非常大，影响页面加载
  // 如果能把不同路由对应的组件分割成不同的代码块，然后当路由被访问时才加载对应的组件，这样就更高效了
  {
    path: '/home',
    component: Home,
    meta: {title: '首页'},
    // 路由独享守卫
    beforeEnter: (to, from, next) =>  {
      console.log('=== $route beforeEnter ===');
      next();
    },
    // 嵌套路由
    // 比如在Home页面中，希望通过/home/news和/home/message访问一些内容
    // 一个路径映射一个组件，访问两个路径也会分别渲染两个组件
    children: [
      // 嵌套路由设置默认路径
      {path: '', redirect: 'news'},
      // 子组件的path不能用"/"开头
      {path: 'news', component: HomeNews},
      {path: 'message', component: HomeMessage},
    ],
  },
  {path: '/user/:userId', meta: {title: '用户'}, component: () => import('../components/User')},
  {path: '/profile', meta: {title: '档案'}, component: Profile},
]


// 创建路由实例（VueRouter），传入路由映射配置（routes）
// 然后，在Vue实例中挂载创建的路由实例
const router = new VueRouter({
  routes,
  mode: 'history',
})

// 前置守卫（Guard）
router.beforeEach((to, from, next) => {
    // url从from跳转到to页面时
    document.title = to.matched[0].meta.title;
    next();
  }
)

// 后置钩子（Hook）
router.afterEach((to, from) => {
    console.log('=== afterEach ===');
  }
)

export default router
