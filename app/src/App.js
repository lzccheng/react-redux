import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {count:0}
  }
  click(){
    function sum(num){
      let a = 0;
      for(let i=1;i<num;i++){
        a+=i*(i+1);
      };
      a+=(num-1)*num*(num+1);
      return a;
    };
    this.setState({count:sum(100)})
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hello React</h1>
        </header>
        <p className="App-intro">
          <button onClick={this.click.bind(this)} className="btn">click</button>
          <h1>{this.state.count}</h1>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
