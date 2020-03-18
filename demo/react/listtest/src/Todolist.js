import React, { Component, Fragment } from "react";
import Todoitem from './Todoitem';
class Todolist extends Component {
  constructor(props) {
    super(props);
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
        <div>
          <input
            value={this.state.inputVal}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleButtonClick}>提交</button>
        </div>
        <ul>
          {this.state.todoList.map((item, index) => {
            return(
                <Todoitem key={index} content={item} index={index} handleDel={this.handleItemDel}/>
            );
          })}
        </ul>
      </Fragment>
    );
  }
  handleInputChange(e) {
    const val = e.target.value;
    this.setState({
      inputVal: val
    });
  }
  handleButtonClick() {
    if (this.state.inputVal === "") {
      alert("代办项不能为空");
      return;
    }
    this.setState({
      todoList: [...this.state.todoList, this.state.inputVal],
      inputVal: ""
    });
  }
  handleItemDel(idx){
      const confirm = window.confirm("是否要删除该代办项？");
      if(confirm){
          const todoList = [...this.state.todoList];
          todoList.splice(idx, 1);
          this.setState({
              todoList,
          })
      }
  }
}

export default Todolist;
