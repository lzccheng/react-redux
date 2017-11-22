import React from 'react';
import PropTypes from 'prop-types';

export default class Input extends React.Component{
  constructor(){
    super();
    this.state = {
      value:''
    }
  }
  componentWillMount(){
    this.props.value&&this.setState({value:this.props.value})
  }
  handleChange(e){
    console.log(this.props);
    this.setState({value:e.target.value})
  }
  handleClick(){
    console.log('input',this.props);
    this.props.onClick&&this.props.onClick()
  }
  render(){
    return (
      <div>
        <input type='text' value={this.state.value} style={{color:this.props.color}} onChange={this.handleChange.bind(this)}/><br />
        <input type='button' className='btn btn-success' value='click' onClick={this.handleClick.bind(this)}/>
      </div>
    )
  }
}
