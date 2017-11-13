import React,{Component} from 'react';

class App extends Component {
  render(){
    return <div style={{color:'red',...this.props.style}}>
      {this.props.style}
    </div>
  }
}
export default App;
