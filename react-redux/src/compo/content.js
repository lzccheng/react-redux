import React,{Component} from 'react';
import PropTypes from 'prop-types';


export default class Content extends Component{
  static contextTypes = {
    store:PropTypes.object
  }
  constructor(){
    super()
    this.state = {themeColor:''}
  }
  componentWillMount () {
    const { store } = this.context
    this._updateThemeColor()
    store.subscribe(() => this._updateThemeColor())
  }
  _updateThemeColor(){
    const store = this.context.store;
    const state = store.getState();
    this.setState({themeColor:state.themeColor})
  }
  render(){
    return (
      <p style={{color:this.state.themeColor}}>{this.props.value}</p>
    )
  }
}
