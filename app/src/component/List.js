import React from 'react';
import Item from './list_component.js';

class List extends React.Component{
  static defaultProps = {
    coms:[]
  }
  render(){
    return <div style={this.props.style} className={this.props.className}>
        {this.props.coms.map((el,i)=>(<Item info={el} key={i} />))}
    </div>
  }
}
export default List;
