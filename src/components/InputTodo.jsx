import PropTypes from 'prop-types';
import { useState } from 'react';

const InputTodo = (props) => {
  const [title, setTitle] = useState('');

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
    } else {
      alert('Please add item');
    }
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
