import React from 'react';
import ReactDOM , {render} from 'react-dom';
import './index.css';
import Header from './component/header.js';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import All from './component/App.js';
import './css/App.css';

let arr = [
  <All />
];
render(arr,document.getElementById('box'));
ReactDOM.render([<App />,<Header />], document.getElementById('root'));
// registerServiceWorker();
