//登陆页面

import React from 'react';
import MUtil from 'util/mm.jsx';
import User  from 'service/user-service.jsx';

const _mm   = new MUtil();
const _user = new User();

import './index.scss';

class Login extends React.Component{
	constructor(props){
		super(props);
		this.state = {
        	username:'',
        	password:'',
        	redirect: _mm.getUrlParam('redirect') || '/',
		}
	}
	
	componentWillMount(){
		document.title = '登陆 - MALL ADMIN';
	}
    
    //当用户名发生改变时
	onInputChange(e){
		let inputValue = e.target.value,
		    inputName  = e.target.name;
		this.setState({
			[inputName] : inputValue
		});
	}
    
    onInputKeyUp(e){
    	if(e.keyCode===13){
    		this.onSubmit();
    	}    
    }

    //当用户提交表单时
	onSubmit(){
		let loginInfo = {
    		username : this.state.username,
    		password : this.state.password
    	},
    	checkResult = _user.checkLoginInfo(loginInfo);
    	//验证通过
    	if(checkResult.status){
			_user.login(loginInfo).then((res) => {
			    _mm.setStorage('userInfo',res);
			    this.props.history.push(this.state.redirect);
	    	}, (errMsg) => {
				_mm.errTips(errMsg);
	    	});
    	}
    	//验证不通过
    	else{
			_mm.errTips(checkResult.msg);
    	}
	}
	
	render(){
		return (
				<div className="col-md-4 col-md-offset-4">
					<div className="panel panel-default login-panel">
				        <div className="panel-heading">欢迎登陆 -电商后台管理系统</div>
						<div className="panel-body">
					    	<div>
								 <div className="form-group">
								    <label htmlFor="exampleInputEmail1">用户名：</label>
								    <input type="text" 
								    name="username"
								    className="form-control" 
								    placeholder="请输入用户名"
								    onKeyUp={e=>this.onInputKeyUp(e)}
								    onChange={e=>this.onInputChange(e)}/>
								</div>
								<div className="form-group">
								    <label htmlFor="exampleInputPassword1">密码：</label>
								    <input type="password"
								    name="password" 
								    className="form-control" 
								    placeholder="请输入密码"
								    onKeyUp={e=>this.onInputKeyUp(e)}
								    onChange={e=>this.onInputChange(e)}/>
								</div>								
								<button className="btn btn-lg btn-success btn-block"
								onClick={e=>{this.onSubmit(e)}}>登陆</button>
							</div>
						</div>
					</div>
				</div>
		    )
	    }
    }

export default Login;