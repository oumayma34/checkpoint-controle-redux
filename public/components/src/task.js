import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTodo, toggleTodo } from '../actions/actions';

const Task = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(todo.description);
  const dispatch = useDispatch();

  const handleEdit = () => {
    if (isEditing) {
      dispatch(editTodo(todo.id, newDescription));
    }
    setIsEditing(!isEditing);
  };

  return (
    <div>
      {isEditing ? (
        <input
          type="text"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
        />
      ) : (
        <span style={{ textDecoration: todo.isDone ? 'line-through' : 'none' }}>
          {todo.description}
        </span>
      )}
      <button onClick={() => dispatch(toggleTodo(todo.id))}>
        {todo.isDone ? 'Undo' : 'Done'}
      </button>
      <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
    </div>
  );
};

export default Task;
