import PropTypes from 'prop-types';
import { useState } from 'react';

const InputTodo = (props) => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const { addTodoItem } = props;

  InputTodo.propTypes = {
    addTodoItem: PropTypes.func,

  };

  InputTodo.defaultProps = {
    addTodoItem: PropTypes.func,
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodoItem(title.trim());
      setTitle('');
      setMessage('');
    } else {
      setMessage('Please add item');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add todo..."
          value={title}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      <span>{message}</span>
    </>
  );
};

export default InputTodo;
