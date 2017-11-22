import React from 'react';
import Input from '../component/input';
import {connect} from 'react-redux';
import {update_color} from '../reducer/reducer';



class Smart extends React.Component{
  handleClick(){
    console.log(this.props);
    this.props.onClick&&this.props.onClick('green')
  }
  render(){
    return (
      <Input value={this.props.value} onClick={this.handleClick.bind(this)} color={this.props.color}/>
    )
  }
}
const dis = (dis)=>{
  return {
    onClick:(color)=>{
      dis(update_color(color))
    }
  }
}
const state = (state)=>{
  return {
    value:'lzccheng',
    color:state.color
  }
}
export default connect(state,dis)(Smart);
