import React ,{Component} from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer ,{update_color}from './reducer/reducer';
import Test from './app';



const store = createStore(reducer);


store.dispatch(update_color('red'))

render(
  <Provider store={store}>
    <Test />
  </Provider>,
  document.getElementById('box'));
