import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '@/styles/TodoItem.module.css';

const TodoItem = (props) => {
  const {
    itemProp, handleChange, delTodo, setUpdate,
  } = props;
  const [editing, setEditing] = useState(false);
  const [updateInput, setUpdateInput] = useState(itemProp.title);

  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  TodoItem.propTypes = {
    itemProp: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }),
    handleChange: PropTypes.func,
    delTodo: PropTypes.func,
    setUpdate: PropTypes.func,
  };

  TodoItem.defaultProps = {
    itemProp: {
      id: 0,
      title: '',
      completed: false,
    },
    handleChange: () => {},
    delTodo: () => {},
    setUpdate: PropTypes.func,
  };

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
      setUpdate(updateInput, itemProp.id);
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
        <button type="button" onClick={handleEditing}>Edit</button>
        <button
          type="button"
          onClick={() => delTodo(itemProp.id)}
        >
          Delete
        </button>
        <span style={itemProp.completed ? completedStyle : null}>{updateInput}</span>
      </div>
      <input
        type="text"
        value={updateInput}
        className={styles.textInput}
        style={editMode}
        onChange={(e) => setUpdateInput(e.target.value)}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
};

export default TodoItem;
