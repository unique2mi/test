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



##### 7.虚拟DOM:优点：1.性能提升了；使得跨端应用得以实现【ReactNative】

- 真实DOM方法：【每次都要生成完整DOM，会耗费性能】
   - state数据
   - JSX模板
   - 数据+模板：生成真实DOM
   - 当数据发生变化=>数据+模板：重新生成真实DOM替换原有



- 改进方案【性能提升不明显】
   - state数据
   - JSX模板
   - 数据+模板：生成真实DOM
   - 当数据发生变化=>数据+模板：重新生成真实DOM与原有DOM比对
   - 替换两者比较中有差异的部分



- 虚拟DOM
   - state数据
   - JSX模板
   - **生成虚拟DOM**  ：js对象，用来描述真实DOM
   - 数据+模板：生成真实DOM
   - 当数据发生变化=>生成新的虚拟DOM
   - 比较两个虚拟DOM的区别找出差异
   - 直接操作DOM改变内容



##### 8.虚拟DOM的diff算法- 比较原始虚拟DOM和新的虚拟DOM

		- setState异步的设计
		- 虚拟DOM同层比对
		- key值为index的值的话，无法保持一致



##### 9.生命周期函数：在某一时刻组件会自动调用执行的函数

![image-20200319175836999](/Users/unique/Desktop/test/unique2mi/test/record/image/react生命周期.png)

	* render生命周期函数必须存在/自行定义
	* shouldComponentUpdate进行性能优化
	* ajax请求放在**componentDidMount**，（render会多次执行，因此不适合放在render中；componentWillMount会有冲突影响【更高阶使用情况】，constructor也可以）