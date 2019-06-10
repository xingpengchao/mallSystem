import React from 'react';
import ReactDOM from 'react-dom';

import 'font-awesome/css/font-awesome.min.css';
import './index.css';
import './index.scss';

/*class HelloMessage extends React.Component {
  render() {
    return (
      <div>
        Hello {this.props.name}
      </div>
    );
  }
}

ReactDOM.render(
  <HelloMessage name="Taylor" />,
  document.getElementById('app')
);*/

ReactDOM.render(
	<div>
    <h1>Hello, world!</h1>,
    </div>,
    document.getElementById('app')
)
