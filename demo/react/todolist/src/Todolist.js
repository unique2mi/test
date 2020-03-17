import React, { Component, Fragment } from "react";
// 等同于
// import React from 'react';
// const Fragment = React.Fragment;
import Todoitem from "./Todoitem";
import "./style.css";
// 返回必须包含在一个元素中
class Todolist extends Component {
  constructor(props) {
    super(props); //调用父类的构造函数
    this.state = {
      inputVal: "",
      todoList: []
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleItemDel = this.handleItemDel.bind(this);
  }
  render() {
    return (
      <Fragment>
        {/* JSX语法注释的写法 */}
        {
          // 单行JSX语法注释的写法
        }
        <div>
          {/* className **/}
          {/* htmlFor代替for的表示（避免与循环重复） **/}
          <label htmlFor="inputTag">输入内容：</label>
          <input
            id="inputTag"
            className="input"
            value={this.state.inputVal}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleButtonClick}>提交</button>
        </div>
        <ul>
          {this.getTodoItem()}
          {/* 会自动转义标签 **/}
          {/* {this.state.todoList.map((item, index) => {
            return (
              <li 
                key={index} 
                onClick={this.handleItemDel.bind(this, index)}
              >
                {item}
              </li>
            );
          })} */}
          {/* 一般不建议使用：不会自动转义标签： __html属性 **/}
          {}
        </ul>
      </Fragment>
    );
  }
  getTodoItem(){//代码拆分
    return this.state.todoList.map((item, index) => {
      return (
        <Fragment key={index}>
          {
            <Todoitem 
              index={index} 
              content={item}
              handleItemDel = {this.handleItemDel} />
          }
          {/* <li
            key={index}
            onClick={this.handleItemDel.bind(this, index)}
            dangerouslySetInnerHTML={{ __html: item }}
          ></li> */}
        </Fragment>
      );
    })
  }
  handleInputChange(e) {
    const value = e.target.value;
    this.setState(() => ({
      inputVal: value
    }))
    // this.setState({
    //   inputVal: e.target.value
    // });
  }
  handleButtonClick() {
    if (!this.state.inputVal) {
      alert("待办项不能为空");
      return;
    }
    this.setState((preState) => ({
      todoList:[...preState.todoList, preState.inputVal],
      inputVal : ''
    }))
    // this.setState({
    //   // ... 展开运算符
    //   todoList: [...this.state.todoList, this.state.inputVal],
    //   inputVal: ""
    // });
  }
  handleItemDel(idx) {
    //immutable state不允许做任何改变，不能直接更改（后续做性能优化会有问题）
    var isDel = window.confirm("是否删除该待办项？");
    if (!isDel) {
      return;
    }
    //写法一
    // const list = [...this.state.todoList];
    // list.splice(idx, 1);
    // this.setState({
    //   todoList: list
    // });
    
    //写法二 {list: list} 等价于 {list}
    this.setState((preState) => {
      const todoList = [...preState.todoList];
      todoList.splice(idx,1);
      return { todoList };
    })
  }
}
// function Todolist(){
//     return(
//         <Fragment>
//             <div><input /><button>提交</button></div>
//             <ul>
//                 <li>111</li>
//                 <li>111</li>
//                 <li>111</li>
//             </ul>
//         </Fragment>
//     );
// }

export default Todolist;
