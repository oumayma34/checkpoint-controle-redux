import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';

const TaskList = () => {
  const todos = useSelector((state) => state.todos);
  const filter = useSelector((state) => state.filter);

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'done') return todo.isDone;
    if (filter === 'not_done') return !todo.isDone;
    return true;
  });

  return (
    <div>
      {filteredTodos.map((todo) => (
        <Task key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TaskList;
