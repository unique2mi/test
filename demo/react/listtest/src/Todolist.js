import React, { Component, Fragment } from 'react';
import Todoitem from './Todoitem';
import axios from 'axios';
// import Test from './Test';

class Todolist extends Component {
    constructor(props){
        super(props);
        this.state = {
            inputVal: '',
            todoList: [],
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDel = this.handleDel.bind(this);
    }
    // 即将被挂载到页面时执行
    componentWillMount(){
        console.log('componentWillMount');
    }
    render(){
        console.log('todolist-render');
        return(
            <Fragment>
                <div>
                    <label htmlFor="todoInput">代办项：</label>
                    <input id="todoInput" 
                        value= {this.state.inputVal}
                        onChange= {this.handleChange}
                        ref={(input) => {this.input = input}}/>
                    <button onClick= {this.handleSubmit}>提交</button>
                </div>
                {/* <Test content={this.state.inputVal} /> */}
                <ul>
                    {this.getItem()}
                </ul>
            </Fragment>
        )
    }
    // 被挂载到页面之后执行
    componentDidMount(){
        // console.log('componentDidMount');
        axios.get('./api/todolist')
        .then(()=>{
            alert("success");
        }).catch(()=>{
            alert("fail");
        });
    }
    // //组件被更新之前
    // shouldComponentUpdate(){
    //     console.log('shouldComponentUpdate');
    //     return true; // 是否更新组件，布尔类型
    // }
    // //组件被更新之前，如果shouldComponentUpdate返回true执行
    // componentWillUpdate(){
    //     console.log('componentWillUpdate');
    // }
    // //更新完成后
    // componentDidUpdate(){
    //     console.log('componentDidUpdate');
    // }
    // //一个组件从父组件接收了参数
    // //只要父组件的render参数重新执行了，子组件的这个函数就会被执行
    // //如果组件第一次存在于父组件中不会执行，如果组件之前已经存在于父组件中才会执行
    // componentWillReceiveProps(){
    //     console.log('componentWillReceiveProps');
    // }
    // //组件即将被剔除的时候执行
    // componentWillUnmount(){
    //     console.log('componentWillUnmount');
    // }
    getItem(){
        return(
            this.state.todoList.map((item, index)=>{
                return(
                    <Todoitem
                        key={index}
                        content={item}
                        index={index}
                        handleItemDel= {this.handleDel}/>
                )
            })
        )
    }
    handleChange(e){
        console.log(this.input);
        // ref：不建议使用，获取dom元素
        //setState异步函数，不会立即被执行
        const val = e.target.value;
        this.setState({
            inputVal: val,
        })
    }
    handleSubmit(){
        if(this.state.inputVal === ''){
            alert("代办项不能为空");
            return;
        }
        this.setState((preState)=>({
            todoList: [...preState.todoList,preState.inputVal],
            inputVal: ''
        }),() => {
            console.log('成功啦~');
        })
        // this.setState((preState)=>({
        //     todoList: [...preState.todoList,preState.inputVal],
        //     inputVal: ''
        // }))
        // const todoList = [...this.state.todoList, this.state.inputVal];
        // this.setState({
        //     todoList,
        //     inputVal: '',
        // })
    }
    handleDel(idx){
        const confirm = window.confirm("是否删除选中代办项？");
        if(!confirm) return;
        this.setState((preState)=>{
            const todoList = [...preState.todoList];
            todoList.splice(idx,1);
            return(
                {todoList}
            )
        })
        // const todoList = [...this.state.todoList];
        // todoList.splice(idx,1);
        // this.setState({
        //     todoList
        // })
    }
    
}
export default Todolist;