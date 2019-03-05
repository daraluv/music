import React from 'react'
import { Link } from 'react-router-dom'
import { Route, Redirect } from 'react-router'
import api from "../../api/api";
import './style.scss'

class Login extends React.Component {
  state = {
    phoneNumVal: "",
    passWordVal: ""
  };
  
  login = () => {
    this.getLoginInfo('dengdan_113@163.com','dd6780514');
    if(this.state.phoneNumVal) {

    }else if(this.state.passWordVal) {

    }else {
      alert('请输入用户名！')
    };

  };

  public getLoginInfo= async (email: any, password: any) => {
    const res = await api.login('dengdan_113@163.com','dd6780514');
    console.log('登录信息',res)
  }

  setPhoneNum = (e: any) => {
    this.setState({
        phoneNumVal: e.target.value
    });
  }

  setPassWord = (e: any) => {
    this.setState({
        passWordVal: e.target.value
    });
  }

  render() {

    return (
      <div className="login-content">
         <p>
          <input placeholder="手机号" onChange={(e)=>this.setPhoneNum(e)}/>
        </p>
        <p>
            <input placeholder="密码" onChange={(e)=>this.setPassWord(e)}/>
        </p>
        <button className="login-btn" onClick={this.login}>登 录</button>
      </div>
    );
  }
}

export default Login
