import React ,{Component as Com} from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducers/comments';
import App from './App';



const store = createStore(reducer);



const state = {
  username:'lzcchenglzccheng',
  age:22
}
const redu = (sta={},action)=>{
   switch(action.type){
     case 'update_age':
      return {
        age:action.age
      }
    default:
      return sta;
   }
}

const ss = createStore(redu(state));



// render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('box'));

class Tt extends React.Component{
  render(){
    return (
      <h1>cheng</h1>
    )
  }
}



render(
  <Provider store={ss}>
    <Tt />
  </Provider>,
  document.getElementById('test'));
