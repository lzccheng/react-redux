import React from 'react';

class Input extends React.Component{
  constructor(){
    super()
    this.state = {username:'123',content:'123'}
  }
  usernameChange(e){
    this.setState({username:e.target.value})
  }
  contentChange(e){
    this.setState({content:e.target.value})
  }
  submit(){
    if(this.props.onSubmit){
      this.props.onSubmit(this.state)
    };
    this.setState({content:''})
  }
  componentDidMount(){
    this.input.focus();
  }
  blur(e){
    this._saveusername(e.target.value)
  }
  _saveusername(username){
    localStorage.setItem('username',username)
  }
  componentWillMount(){
    this._loadusername()
  }
  _loadusername(){
    const username = localStorage.getItem('username');
    console.log(username);
    if(username){
      this.setState({username})
    }
  }
  render(){
    return <div>
            input component<br />
            <input type='text' value={this.state.username} onChange={this.usernameChange.bind(this)} onBlur={this.blur.bind(this)}/><br />
            <input type='text' onChange={this.contentChange.bind(this)} value={this.state.content} ref={(text)=>this.input = text}/><br />
            <input type='submit' onClick={this.submit.bind(this)} value='提交' />
          </div>
  }
}
export default Input;
