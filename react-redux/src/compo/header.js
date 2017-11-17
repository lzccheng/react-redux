import React,{Component} from 'react';
import PropTypes from 'prop-types';

export default class Header extends Component{
  static contextTypes = {
    store:PropTypes.object,
    str:PropTypes.string
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
    console.log('update',this.context);
    const {store} = this.context;
    const state = store.getState();
    this.setState({themeColor:state.themeColor})
  }
  render(){
    return (
      <h1 style={{color:this.state.themeColor}}>{this.props.value}</h1>
    )
  }
}
