//请求服务类

import MUtil from 'util/mm.jsx';

const _mm   = new MUtil();

class User{
	login(loginInfo){
		return _mm.request({
	    		type: 'post',
	    		url : '/manage/user/login.do',
	    		data: loginInfo
    	});
	}
   
	//检查登陆接口数据是否合法
	checkLoginInfo(loginInfo){
		let username = $.trim(loginInfo.username);
		let password = $.trim(loginInfo.password);
		//判断用户名为空
		if(typeof loginInfo.username !== 'string' || loginInfo.username.length === 0){
			return {
				status : false,
				msg:'用户名不能为空'
			}
		}
		//判断密码为空
		if(typeof loginInfo.password !== 'string' || loginInfo.password.length === 0){
			return {
				status : false,
				msg:'密码不能为空'
			}
		}
		return {
			status:true,
			msg:'验证通过'
		}
	}

	//退出登录
	logout(){
		return _mm.request({
	    		type: 'post',
	    		url : '/user/logout.do'
    	});
	}
 
    //获取用户列表 
	getUserList(pageNum){
		return _mm.request({
	    		type : 'post',
	    		url  : '/manage/user/list.do',
	    		data : {
	    			pageNum : pageNum
	    		}
    	});
	}
}

export default User;