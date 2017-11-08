import React from 'react';

class Lzc extends React.Component {
  click(){
    alert('this.123');
  }
  render(){
    return (
      <div>
        <h1>chencheng</h1>
        <button onClick={this.click.bind(this)}>click me</button>
      </div>
    )
  }
};

module.exports = Lzc;
