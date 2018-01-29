import React, {Component} from 'react';
// Force the connection with Redux - Import the connect property from React-Redux library
import {connect} from 'react-redux';


class BookList extends Component{
	renderList(){
		return this.props.books.map(book=>{
			return(
				<li className="list-group-item" key={book.title}>{book.title}</li>
			);
		});
	}
	render(){
		return(
			<ul className="col-md-5 list-group">
				{this.renderList()}
			</ul>
		);
	}
	
};

// Function that takes all the state of the App
/* Every time the state changes our Container will re-render, 
   updating the books list. */
function mapStateToProps(state){
	// It will show as props in BookList
	return {
		books: state.books
	};
}

// Connection between data and props - This is the Key of the container.
export default connect(mapStateToProps)(BookList);