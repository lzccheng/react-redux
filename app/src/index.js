import React from 'react';
import ReactDOM , {render} from 'react-dom';
import './index.css';
import Header from './component/header.js';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import All from './component/App.js';
import './css/App.css';
import Input from './component/input.js';
import Interval from './component/interval.js';
import Ref from './component/ref.js';

let arr = [
  <Ref><div>789</div><h3>lzcche4ng</h3></Ref>,
  <All />,
  <App />,
];
render(arr,document.getElementById('box'));
