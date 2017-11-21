import React  from 'react';
import {PropTypes} from 'prop-types';
import ReactDOM ,{ render} from 'react-dom';
import {createStore} from 'redux';
import {Provider,connect} from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


class Test extends React.Component{
  static propTypes = {
    username:PropTypes.String
  }
  render(){
    return (
      <div>
        <h1>lzccheng</h1>
      </div>
    )
  }
}

const state = {
  username:'lzccheng',
  content:'gitgitigt'
}
let reducer = (state={},action)=>{
  switch (action.type){
    case 'update_content':
      return {
        ...state,
        content:action.content
      };
      case 'update_username':
        return {
          ...state,
          username:action.username
        }
      case 'update_themeColor':
        return {
          ...state,
          themeColor:action.themeColor
        }
      default:
        return state;
  }
}
const action = {
  type:'',
  content:''
}
const store = createStore(reducer);
console.log(store);
console.log(store.getState());
store.dispatch({type:'update_content',content:'gitgitgit'})
store.dispatch({type:'update_username',username:'cheng'})
console.log(store.getState());

console.log(connect);
let mapStateToProps = (state)=>{
  return {
    username:state.username
  }
}


class content extends React.Component {
  render () {
    return (
      <div>
        <p style={{ color: this.props.themeColor }} onClick={this.props.onClick}>React.js 小书内容</p>
      </div>
    )
  }
}

const a = (state) => {
  return {
    themeColor: state.themeColor
  }
}
const dis = (dis)=>{
  return {
    onClick:()=>{
      dis({type:'update_themeColor',themeColor:'red'})
    }
  }
}
let Content = connect(a,dis)(content)
console.log('Content',Content);
render(<Provider store={store}><Content /></Provider>,document.getElementById('box'));

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
