import { useState } from 'react';

const InputTodo = () => {
  const [title, setTitle] = useState('');

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add todo..."
        value={title}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default InputTodo;
