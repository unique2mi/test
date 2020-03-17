import React, { Component } from 'react';

class Todoitem extends Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    render(){
        const {content} = this.props;
        return(
            <li onClick={this.handleClick}>
                {/* {this.props.content} */}
                {content}
            </li>
        );
    };
    handleClick(){
        // console.log(this.props.handleItemDel);
        const {handleItemDel, index} = this.props;
        // this.props.handleItemDel(this.props.index);
        handleItemDel(index);
    }
}

export default Todoitem;