import React from 'react';

class Ref extends React.Component{
  constructor(){
    super()
    this.state = {ref:'123'}
  }
  componentWillMount(){

  }
  componentDidMount (e) {
    console.log(this.props.children[0]);
    console.log(this.input);
    this.input.focus()
  }
  render(){
    return <h2>{this.state.ref}<input ref={(input) => this.input = input} /></h2>
  }
}
export default Ref;
