import React, { useState } from 'react';

import Button from '../Button';

function Form({ submitHandler, initialData, loading }) {

  const [title, setTitle] = useState(initialData.title || '');
  const [description, setDescription] = useState(initialData.description || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    const status = initialData.status || 'active';
    submitHandler({title, description, status}, initialData.id);
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
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input name="title" placeholder="Title" onChange={handleChange} value={title} />
        </div>
        <div>
          <textarea name="description" placeholder="Description" onChange={handleChange} value={description} />
        </div>
        <div>
          <Button type="reset" clickHandler={handleClear}>Clear</Button>
          <Button type="submit">{initialData.title ? 'Update' : 'Add'}</Button>
        </div>
      </form>
    </div>
  );
}

export default Form;
