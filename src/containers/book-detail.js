import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component {
	// First time a user starts the app, the state is null
	// To avoid the error we can create an if statement to display a message
	render(){
		if (!this.props.book){
			return  <div className="col-sm-7">Select a book to get started.</div>;
		}

		return(
			<div className="col-sm-7">
				<h3>Details for:</h3>
				<div>Title: {this.props.book.title}</div>
				<div>Pages: {this.props.book.pages}</div>
			</div>
		);
	}
}

function mapStateToProps(state){
	return {
		book: state.activeBook
	};
}

export default connect(mapStateToProps)(BookDetail);