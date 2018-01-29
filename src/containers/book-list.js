import React, {Component} from 'react';
// Force the connection with Redux - Import the connect property from React-Redux library
import {connect} from 'react-redux';
// Import the Action Creator - Select Book
import {selectBook} from '../actions/index';
// TO make sure this Action is go through all the reducers - bindActionCreators
import {bindActionCreators} from 'redux';



class BookList extends Component{
	renderList(){
		return this.props.books.map(book=>{
			return(
				<li 
					className="list-group-item" 
					key={book.title} 
					onClick={()=>this.props.selectBook(book)}>
					{book.title}
				</li>
			);
		});
	}
	render(){
		return(
			<ul className="col-sm-5 list-group">
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

// Function that is in charged to pass its result to all the reducers through the Dispatch function.
// Anything returned from here will end up as props on the BookList Container
function mapDispatchToProps(dispatch){
	// Key and value has the same name, so we just need it once - selectBook
	return bindActionCreators({ selectBook }, dispatch);
}


// Connection between data and props - This is the Key of the container.
/* Promote BookList from a component to a Container - It needs to know about this new dispatch method, 
   selectBook. Make it available as a prop. */
export default connect(mapStateToProps, mapDispatchToProps)(BookList);