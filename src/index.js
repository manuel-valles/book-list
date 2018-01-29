// Import the module React to deal with Components
import React, {Component} from 'react';
// Import the module ReactDOM to Render Components to the DOM
import ReactDOM from 'react-dom';

// Our React Component - App
class App extends Component{
	render(){
		return(
		<div className="container">
			Starting Book List App
		</div>
		);
	}
};

ReactDOM.render(<App />, document.querySelector('.bookApp'));