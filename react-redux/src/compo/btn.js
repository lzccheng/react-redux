import React  ,{Component} from 'react';
import '../css/index.css';
import PropTypes from 'prop-types';

export default class Btn extends Component {
  static contextTypes = {
    store:PropTypes.object
  }
  static defaultProps = {
    value:'btn'
  }
  handleChangeColor(e){
    const {store} = this.context;
    store.dispatch({
      type:'CHANGE_COLOR',
      themeColor:e.target.value
    })
  }
  render(){
    return (
      <input type='button' className='btn' value={this.props.value} onClick={this.handleChangeColor.bind(this)} style={{...this.props.style}}/>
    )
  }
}
