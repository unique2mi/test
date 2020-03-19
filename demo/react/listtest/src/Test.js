import React, { Component } from 'react';

class Test extends Component{
    render(){
        console.log('test-render');
        const {content} = this.props;
        return(
            // <h1>{content}</h1>
            React.createElement('div',{},content)
        )
    }
}
export default Test;