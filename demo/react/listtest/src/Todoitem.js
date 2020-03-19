import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Todoitem extends Component{
    constructor(props){
        super(props);
        this.handleItemDel= this.handleItemDel.bind(this);
    }
    shouldComponentUpdate(nextProps, nextState){
        if(nextProps.content !== this.props.content){
            return true;
        }else{
            return false;
        }
    }
    render(){
        console.log('child-render');
        const {content} = this.props;
        return(
            <li onClick={this.handleItemDel}>{content}</li>
        )
    }
     //一个组件从父组件接收了参数
    //只要父组件的render参数重新执行了，子组件的这个函数就会被执行
    //如果组件第一次存在于父组件中不会执行，如果组件之前已经存在于父组件中才会执行
     componentWillReceiveProps(){
         console.log('item-componentWillReceiveProps');
    }
    //组件即将被剔除的时候执行
    componentWillUnmount(){
        console.log('item-componentWillUnmount');
    }
    handleItemDel(){
        const {handleItemDel, index} = this.props;
        handleItemDel(index);
    }
}

Todoitem.propTypes = {
    index: PropTypes.number,
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, //必填项
    handleItemDel: PropTypes.func,

}
Todoitem.defaultProps = {
}
export default Todoitem;