import React, { useState } from 'react';

import Api from '../../api/ApiUtils';
import Button from '../Button';

function Todo({ detail, deleteHandler, updateHandler }) {

  const { id, title, description, created, updated, status } = detail;
  const [isDisable, setIsDisable] = useState(false);

  const deleteTodo = () => {

    setIsDisable(true);

    Api.delete(`/todos/${id}`)
      .then(() => {
        deleteHandler(id);
      })
      .catch(err => console.log(err));
  }

  const toggleStatus = () => {

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
      .catch(err => console.log(err));
  }

  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{created}</p>
      <p>{updated}</p>
      <div>
        <Button type="button" clickHandler={toggleStatus} disabled={isDisable}>{status === 'done' ? 'Undone' : 'Done'}</Button>
        <Button type="button" disabled={isDisable}>Edit</Button>
        <Button type="button" clickHandler={deleteTodo} disabled={isDisable}>Delete</Button>
      </div>
    </div>
  );
}

export default Todo;
