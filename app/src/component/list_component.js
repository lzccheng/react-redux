import React from 'react';

class Item extends React.Component{
  static defaultProps={
    username:'',
    content:''
  }
  render(){
    return <div>
        <span style={{color:'blue',fontWeight:'bold'}}>{this.props.info.username}</span>:
        {this.props.info.content}
    </div>
  }
}

export default Item;
