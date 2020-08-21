import React, { useState } from 'react';

import Input from '../Input';
import Button from '../Button';

function Form({ submitHandler, cancelHandler, initialData, loading }) {

  const [title, setTitle] = useState(initialData.title || '');
  const [description, setDescription] = useState(initialData.description || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    const status = initialData.status || 'active';
    submitHandler({ title, description, status }, initialData.id);
  }

  const handleChange = (e) => {
    if (e.target.name === 'title') setTitle(e.target.value);
    if (e.target.name === 'description') setDescription(e.target.value);
  }

  const handleClear = () => {
    setTitle('');
    setDescription('');
  }

  return (
    <div className="modal-wrapper">
      <div className="modal-wrapper__cell">
        <div className="modal-form">
          <form onSubmit={handleSubmit}>
            <div className="modal-form__input">
              <Input name="title" placeholder="Title" changeHandler={handleChange} value={title} required={true} />
            </div>
            <div className="modal-form__input">
              <textarea className="modal-form__textarea" name="description" placeholder="Description" onChange={handleChange} value={description} />
            </div>
            <div className="modal-form__action">
              <Button type="reset" clickHandler={cancelHandler}>Cancel</Button>
              <Button type="reset" clickHandler={handleClear}>Clear</Button>
              <Button className="purple" type="submit">{initialData.title ? 'Update' : 'Add'}</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
