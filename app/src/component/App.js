import React,{Component} from 'react';
import Input from './input.js';
import List from './List.js';
class App extends Component {
  constructor(){
    super()
    this.state = {
      coms:[]
    }
  }
  submit(data){
    console.log(data);
    if (!data) return
    if (!data.username) return alert('请输入用户名')
    if (!data.content) return alert('请输入评论内容')
    this.state.coms.push(data)
    this.setState({coms:this.state.coms})
  }

  render(){
    return <div style={{...this.props.style}}>
      {this.props.style}
        <Input onSubmit={this.submit.bind(this)}/>
        <List coms={this.state.coms}/>
    </div>
  }
}
export default App;
