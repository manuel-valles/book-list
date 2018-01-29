export function selectBook(book){
	// Returns an Action - Object with a type property
	return{
		type: 'BOOK_SELECTED',
		payload: book
	};
}