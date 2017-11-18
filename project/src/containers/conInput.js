import Input from '../component/input';
import {connect} from 'react-redux';
import React from 'react';
import {addComments} from '../reducers/comments';

class ConInput extends React.Component{
  constructor(){
    super();
    this.state = {
      username:'lzccheng',
      content:'laizhicheng'
    }
  }
  handleClick(value){
    console.log(value);
    if(this.props.onClick)this.props.onClick('value.content');
    // if(!localStorage.getItem('content'))localStorage.setItem('content',JSON.stringify([]));
    // localStorage.setItem('username',value.username);
    // localStorage.setItem('content',JSON.stringify(JSON.parse(localStorage.getItem('content')).concat(value.content)));
  }
  render(){
    return (
      <Input
      content={this.state.content}
      username={this.state.username}
      onClick={this.handleClick.bind(this)}/>
    )
  }
}

const stateToProps = (state)=>{
  console.log(123,state);
  return {

  }
}

const dispathToProps = (dispath)=>{
  return {
    onClick:(comment)=>{
      dispath(addComments(comment))
    }
  }
}

export default connect(stateToProps,dispathToProps)(ConInput);
