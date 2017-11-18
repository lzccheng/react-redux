import React from 'react';


export default class Input extends React.Component{

  constructor(){
    super()
    this.state = {
      content:'',
      username:''
    }
  }
  componentWillMount(){
    this.setState({
      username:this.props.username,
      content:this.props.content
    })
  }
  handleChange(e){
    this.setState({[e.target.name]:e.target.value})
  }
  handleClick(e){
    if(this.props.onClick){
      this.props.onClick({username:this.input.value,content:this.text.value});
    }
  }
  render(){
    return (
      <div>
        <p>
          <span>username:</span>
          <input type='text' value={this.state.username} name='username' onChange={this.handleChange.bind(this)}
          ref={(input)=>this.input=input}/>
        </p>
        <p>
          <span>content:</span>
          <textarea name='content' onChange={this.handleChange.bind(this)}
          ref={(text)=>this.text=text}>
          </textarea>
        </p>
        <p>
          <input type='button' value='submit' onClick={this.handleClick.bind(this)}/>
        </p>
      </div>
    )
  }
}
