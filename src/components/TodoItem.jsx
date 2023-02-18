import PropTypes from 'prop-types';
import styles from '@/styles/TodoItem.module.css';

const TodoItem = (props) => {
  const { itemProp, handleChange, delTodo } = props;
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
  };

  TodoItem.defaultProps = {
    itemProp: {
      id: 0,
      title: '',
      completed: false,
    },
    handleChange: () => {},
    delTodo: () => {},
  };

  return (
    <li key={itemProp.id} className={styles.item}>
      <div className={styles.content}>
        <input
          type="checkbox"
          checked={itemProp.completed}
          onChange={() => handleChange(itemProp.id)}
        />
        <button
          type="button"
          onClick={() => delTodo(itemProp.id)}
        >
          Delete
        </button>
        <span style={itemProp.completed ? completedStyle : null}>{itemProp.title}</span>
      </div>
    </li>
  );
};

export default TodoItem;
