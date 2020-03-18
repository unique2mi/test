import React, { Component } from 'react';

class Todoitem extends Component{
    constructor(props){
        super(props);
        this.handleDelClick = this.handleDelClick.bind(this);
    }
    render(){
        return(
            <li onClick={this.handleDelClick}>{this.props.content}</li>
        )
    }
    handleDelClick(){
        const {handleDel, index} = this.props;
        handleDel(index);
    }
}

export default Todoitem;