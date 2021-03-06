//页面标题

import React from 'react';

class PageTitle extends React.Component{
	constructor(props){
		super(props);
	}
	componentWillMount(){
		document.title = this.props.title + '-超市后台管理系统';
	}
	render(){
		return(
            <div className="row">
				<div className="col-md-12">
                    <h1 className="page-header">{this.props.title}</h1>
				</div>
            </div>
		);
	}
}

export default PageTitle; 