//ProductRouter分路由

import React           from 'react';
import { BrowserRouter as Router ,Route , Redirect ,Switch ,Link} from 'react-router-dom';

import ProductList     from 'page/product/index/index.jsx';

class ProductRouter extends React.Component{
	render(){
		return (
            <Switch>
	            	<Route path="/product/index" component={ProductList}/>
	            	<Redirect exact from="/product" to="/product/index"/>
            </Switch>
		);
	}
}

export default ProductRouter;