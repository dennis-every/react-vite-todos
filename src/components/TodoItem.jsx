/* eslint-disable react/prop-types */
import { useState, useRef } from 'react';
// import PropTypes from 'prop-types';
import { FaTrash } from 'react-icons/fa';
import { AiFillEdit } from 'react-icons/ai';
import { useTodosContext } from '../context/TodosContext';
import styles from '@/styles/TodoItem.module.css';

const TodoItem = (props) => {
  // eslint-disable-next-line react/prop-types
  const { itemProp } = props;
  const { handleChange, delTodo, setUpdate } = useTodosContext();
  const [editing, setEditing] = useState(false);
  const editInputRef = useRef(null);

  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  // TodoItem.propTypes = {
  //   itemProp: PropTypes.shape({
  //     id: PropTypes.string.isRequired,
  //     title: PropTypes.string.isRequired,
  //     completed: PropTypes.bool.isRequired,
  //   }),
  //   handleChange: PropTypes.func,
  //   delTodo: PropTypes.func,
  //   setUpdate: PropTypes.func,
  // };

  // TodoItem.defaultProps = {
  //   itemProp: {
  //     id: 0,
  //     title: '',
  //     completed: false,
  //   },
  //   handleChange: () => {},
  //   delTodo: () => {},
  //   setUpdate: PropTypes.func,
  // };

  const handleEditing = () => {
    setEditing(true);
  };

  const viewMode = {};
  const editMode = {};
  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setUpdate(editInputRef.current.value, itemProp.id);
      setEditing(false);
    }
  };

  return (
    <li key={itemProp.id} className={styles.item}>
      <div className={styles.content} style={viewMode}>
        <input
          type="checkbox"
          checked={itemProp.completed}
          onChange={() => handleChange(itemProp.id)}
        />
        <button type="button" onClick={handleEditing}>
          <AiFillEdit style={{ color: '#5e5e5e', fontSize: '16px' }} />
        </button>
        <button
          type="button"
          onClick={() => delTodo(itemProp.id)}
        >
          <FaTrash style={{ color: '#5e5e5e', fontSize: '16px' }} />
        </button>
        <span style={itemProp.completed ? completedStyle : null}>{itemProp.title}</span>
      </div>
      <input
        type="text"
        ref={editInputRef}
        defaultValue={itemProp.title}
        className={styles.textInput}
        style={editMode}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
};

export default TodoItem;
