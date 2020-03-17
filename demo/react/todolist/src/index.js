import React from 'react';
import ReactDOM from 'react-dom';
// all in js
// import './index.css';
import Todolist from './Todolist';
//pwa：progressive web application
//借助网页写app  https协议的服务器上 存储在浏览器内，断网后再次打开也能访问
// import * as serviceWorker from './serviceWorker';

//jsx:使用了就必须引入react
// JSX语法中，如果我们要使用自己创建的组件(组件开头必须是大写)：<App />
ReactDOM.render(<Todolist />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
