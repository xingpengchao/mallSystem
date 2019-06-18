//头部导航

import React      from 'react';
import {Link}     from 'react-router-dom';


class TopNav extends React.Component{
	constructor(props){
		super(props);
	}
    
    //退出登录
	Logout(){
      
	}
	render(){
		return(
            <div className="navbar navbar-default top-navbar">
	            <div className="navbar-header">
	                <Link className="navbar-brand" to="/index.html"><b>Happy</b>MMall</Link>
	            </div>

	            <ul className="nav navbar-top-links navbar-right">
	                <li className="dropdown">
	                    <a className="dropdown-toggle" href="javascript:;">
	                        <i className="fa fa-user fa-fw"></i> 
	                        <span>欢迎，adminxxx</span>
	                        <i className="fa fa-caret-down"></i>
	                    </a>
	                    <ul className="dropdown-menu dropdown-user">
	                        <li>
                        		<a onClick={() => {this.onLogout()}}>
	                        		<i className="fa fa-sign-out fa-fw"></i> 
	                        		<span>退出登录</span>
                        		</a>
	                        </li>
	                    </ul>
	                </li>
	            </ul>
	        </div>
		)
	}
}

export default TopNav; 