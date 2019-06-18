import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router ,Route ,Switch ,Link} from 'react-router-dom';

import Layout from 'component/layout/index.jsx'; 

import Home from 'page/home/index.jsx';

class APP extends React.Component{
	render(){
		return (
          <Router>
            <Layout>
	            <Switch>
		            <Route exact path="/" component={Home}/>
		            <Route path="/product" component={Home}/>
		            <Route path="/product-category" component={Home}/>
	            </Switch>
            </Layout>
          </Router>
		)
	}
}

ReactDOM.render(
    <APP/>,
    document.getElementById('app')
);