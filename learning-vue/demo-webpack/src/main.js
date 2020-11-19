// webpack会自动处理模块化之间的依赖，再打包成目标js文件
// dist文件夹：用于存放打包后的文件
// src文件夹：用于存放源代码
// - main.js：项目的入口文件
// - index.html：浏览器打开展示的首页html
// - package.json：通过npm init生成的，npm包管理的文件
// --> package.json中script执行时，会优先寻找本地的node_modules/.bin路径中的命令
// --> 如果没有找到，才会去全局的环境变量中寻找
// Vue-cli3已经升级到webpack，会将配置文件隐藏起来，不便于查看

console.log('hello world');

// 使用commonjs的模块化规范，这里可以不添加.js后缀，webpack自动会补上
// const {add, mul} = require('./mathUtils.js');
const {add, mul} = require('./js/mathUtils');

console.log(add(10, 20));
console.log(mul(20, 30));

// 使用ES6的模块化规范
import {name, age, height} from './js/userInfo'

console.log('name', name);
console.log('age', age);
console.log('height', height);
