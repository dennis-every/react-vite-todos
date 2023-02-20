// import PropTypes from 'prop-types';
import { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import { useTodosContext } from '../context/TodosContext';

const InputTodo = () => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const { addTodoItem } = useTodosContext();

  // InputTodo.propTypes = {
  //   addTodoItem: PropTypes.func,

  // };

  // InputTodo.defaultProps = {
  //   addTodoItem: PropTypes.func,
  // };

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
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          placeholder="Add todo..."
          value={title}
          onChange={handleChange}
          className="input-text"
        />
        <button className="input-submit" type="submit">
          <FaPlusCircle />
        </button>
      </form>
      <span className="submit-warning">{message}</span>
    </>
  );
};

export default InputTodo;
