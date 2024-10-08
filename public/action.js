export const ADD_TODO = 'ADD_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const FILTER_TODO = 'FILTER_TODO';

export const addTodo = (description) => ({
  type: ADD_TODO,
  payload: { id: Date.now(), description, isDone: false }
});

export const editTodo = (id, newDescription) => ({
  type: EDIT_TODO,
  payload: { id, newDescription }
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: id
});

export const filterTodo = (status) => ({
  type: FILTER_TODO,
  payload: status
});
