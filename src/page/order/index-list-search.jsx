//搜素框组件

import React           from 'react';

class ListSearch extends React.Component{
	constructor(props){
		super(props);
		this.state ={
			orderNumber : '',
		}
	}

	//点击搜索按钮的时候
    onSearch(){
		this.props.onSearch(this.state.orderNumber);
    }

    //数据变化的时候 
	onValueChange(e){
		let name  = e.target.name,
		    value = e.target.value.trim();
		this.setState({
			[name] : value
		})  
	}
 
    //输入关键字后按回车自动提交 
    onSearchKeywordKeyup(e){
    	if(e.keyCode===13){
    		this.onSearch();
    	}	
    }

	render(){
		return (
           <div className="row search-wrap">
				<div className="col-mid-12">
					<div className="form-inline">
						<div className="form-group">
							<select className="form-control">
								<option value="">按订单号查询</option>
							</select>
						</div>
						<div className="form-group">
							<input type="text" 
							className="form-control"
							placeholder="订单号"
							name="orderNumber"
							onKeyUp={(e) => this.onSearchKeywordKeyup(e)}
							onChange={(e) => this.onValueChange(e)}/>
						</div>
						<button type="submit" 
						className="btn btn-primary"
						onClick={(e) => this.onSearch(e)}>搜索</button>
					</div>
				</div>
			</div>
		);
	}
}

export default ListSearch;