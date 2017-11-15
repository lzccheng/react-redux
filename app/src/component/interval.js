import React from 'react';

class Interval extends React.Component{
  constructor(){
    super();
    let time = new Date();
    this.state = {
      time:time
    }
  }
  componentWillMount(){
    this.timer = setInterval(()=>{this.setState({time:new Date()})},1000)
  }
  render(){
    return <div><h1>{this.state.time}</h1></div>
  }
}
export default Interval;
