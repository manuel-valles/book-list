import React, {Component} from 'react';
// Import the BookList Component
import BookList from '../containers/book-list';
// Import the BookList Component
import BookDetail from '../containers/book-detail';

export default class App extends Component {
	render(){
		return (
			<div className="row">
				<BookList />
				<BookDetail />
			</div>
		);
	}
}