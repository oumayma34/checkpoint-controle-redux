import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import AddTodo from './components/AddTodo';
import TaskList from './components/TaskList';
import Filter from './components/Filter';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Todo App</h1>
        <AddTodo />
        <Filter />
        <TaskList />
      </div>
    </Provider>
  );
};

export default App;
