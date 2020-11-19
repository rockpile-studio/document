// webpack会自动处理模块化之间的依赖，再打包成目标js文件
// dist文件夹：用于存放打包后的文件
// src文件夹：用于存放源代码
// - main.js：项目的入口文件
// - index.html：浏览器打开展示的首页html
// - package.json：通过npm init生成的，npm包管理的文件

console.log('hello world');

// 使用commonjs的模块化规范，这里可以不添加.js后缀，webpack自动会补上
// const {add, mul} = require('./mathUtils.js');
const {add, mul} = require('./mathUtils');

console.log(add(10,20));
console.log(mul(20, 30));

// 使用ES6的模块化规范
import {name, age, height} from './userInfo'

console.log('name', name);
console.log('age', age);
console.log('height', height);
