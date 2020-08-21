import React, { useState } from 'react';

import Api from '../../api/ApiUtils';
import Button from '../Button';

function Todo({ detail, deleteHandler, updateHandler, editHandler }) {

  const { id, title, description, created, updated, status } = detail;
  const [isDisable, setIsDisable] = useState(false);
  const [showAction, setShowAction] = useState(false);

  const toggleShowAction = () => {
    setShowAction(!showAction);
  }

  const deleteTodo = (e) => {
    e.stopPropagation();
    setIsDisable(true);

    Api.delete(`/todos/${id}`)
      .then(() => {
        deleteHandler(id);
      })
      .catch(err => console.log(err));
  }

  const toggleStatus = (e) => {
    e.stopPropagation();
    setIsDisable(true);

    const data = {
      title,
      description,
      status: status === 'active' ? 'done' : 'active'
    }

    Api.put(`/todos/${id}`, data)
      .then(todo => {
        updateHandler(id, todo.data);
      })
      .catch(err => console.log(err))
      .finally(() => {
        setIsDisable(false);
      });
  }

  const editTodo = (e) => {
    e.stopPropagation();
    editHandler(detail);
  }

  return (
    <div className="todo" onClick={toggleShowAction}>
      <div className="todo__detail">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="todo-date">
          <span className="todo-date__created">Created on {new Date(created * 1000).toDateString()}</span>
          {created !== updated &&
            <span className="todo-date__updated">Updated on {new Date(updated * 1000).toDateString()}</span>
          }
        </div>
      </div>
      {showAction &&
        <div className="todo__action">
          <Button type="button" className="green" clickHandler={toggleStatus} disabled={isDisable}>{status === 'done' ? 'Undone' : 'Done'}</Button>
          <Button type="button" className="purple" clickHandler={editTodo} disabled={isDisable}>Edit</Button>
          <Button type="button" className="blue" clickHandler={deleteTodo} disabled={isDisable}>Delete</Button>
        </div>
      }
    </div>
  );
}

export default Todo;
