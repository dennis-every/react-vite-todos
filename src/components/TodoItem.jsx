import PropTypes from 'prop-types';

const TodoItem = (props) => {
  const { itemProp, handleChange, delTodo } = props;

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
    <li key={itemProp.id}>
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
      {itemProp.title}
    </li>
  );
};

export default TodoItem;
