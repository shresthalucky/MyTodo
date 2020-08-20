import React, { useState } from 'react';

import Button from '../Button';

function Form({ submitHandler, loading }) {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    submitHandler(title, description);
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
    <form onSubmit={handleSubmit}>
      <div>
        <input name="title" placeholder="Title" onChange={handleChange} value={title} />
      </div>
      <div>
        <textarea name="description" placeholder="Description" onChange={handleChange} value={description} />
      </div>
      <div>
        <Button type="reset" clickHandler={handleClear}>Clear</Button>
        <Button type="submit">Add</Button>
      </div>
    </form>
  );
}

export default Form;
