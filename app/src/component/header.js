import React , {Component} from 'react';

class User extends Component {
  render(){
    return <div>
                <span>name:</span><span>{this.props.user.name}</span><br/>
                <span>age:</span><span>{this.props.user.age}</span><br/>
                <span>height:</span><span>{this.props.user.height}</span><br/>
                <span>-------------------------</span>
          </div>
  }
}

class Header extends Component {

  render(){
    const data = [
      {name:'pangwei',age:50,height:120},
      {name:'p',age:70,height:90},
      {name:'pa',age:80,height:110},
      {name:'pan',age:10,height:50},
    ];
    let ele = data.map((user,i)=>(<User user={user} key={i} />));
    console.log(ele);
    return <h1>
              {ele}
          </h1>
  };
};

export default Header;
