import { ADD_TODO, EDIT_TODO, TOGGLE_TODO, FILTER_TODO } from '../actions/actions';

const initialState = {
  todos: [],
  filter: 'all' // all, done, not_done
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload.id ? { ...todo, description: action.payload.newDescription } : todo
        )
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
        )
      };
    case FILTER_TODO:
      return {
        ...state,
        filter: action.payload
      };
    default:
      return state;
  }
};

export default todoReducer;
