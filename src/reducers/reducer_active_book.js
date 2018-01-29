// State argument is not the App state. It's the state for which is responsible.
// A reducer is gonna be call every time an action is dispatch by our App.
// For undefined states, the App would throw an error unless we set a null default value.
export default function(state = null, action){
	// If the reducer cares about the action it will return a new state.
	switch(action.type){
		case 'BOOK_SELECTED':
			return action.payload;
	}
	// If the reducer don't care about the action.
	return state;
}