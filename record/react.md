#### ReactJS:函数性编程



##### 1.Vue vs React

Vue:丰富的API  React:灵活性



##### 2.使用

create-react-app？

```javascript
// app.js
// 函数组件（性能高一点，新版）
import React from 'react';

function App() {
  //jsx 语法
  // js里面的标签
  return (
    <div>
      hello mi today!
    </div>
  );
}

//旧版：类组件
//import React, {Component} from 'react';
//等价于 (解构赋值)
//import React from 'react';
//Component = React.Component;
// class App extends React.Component{
//   render(){
//     return(
//       <div>
//         hello mi today!
//       </div>
//     );
//   }
// }
export default App;

```





##### 3.注意

- 哪个组件用到JSX，都要引入一次React
- 类组建跟函数组建均可以使用（函数组建性能高一点）



##### 4.响应式设计思想

##### 5.事件绑定

##### 6.sth

- 声明式开发：节约大量DOM操作【原生：命令式】
- 与其他框架并存
- 组件化
- 单向数据流
- 视图层框架（组件间复杂传值的问题需要其他redux等等辅助开发）
- 函数式编程
  - 可以代码拆分
  - 自动化测试便捷



