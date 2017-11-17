import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {render} from 'react-dom';
import '../css/index.css';
import Btn from './btn.js';
import Header from './header.js';
import store from './store';
import Content from './content';

var str = 'lzccheng';
class Index extends Component{
  static childContextTypes = {
    store:PropTypes.object,
    str:PropTypes.string
  }
  getChildContext(){
    return {store,str};
  }

  render(){
    return (
      <div>
        <Header value='lzccheng'/>
        <Content value='gitgitgitgitcheng'/>
        <Btn value='red' style={{backgroundColor:'red'}}/>
        <Btn value='orange' style={{backgroundColor:'orange'}}/>
      </div>
    )
  }
}

render(<Index />,document.getElementById('box'));
