import PropTypes from 'prop-types';

const TodoItem = (props) => {
  const { itemProp, setTodos } = props;

  TodoItem.propTypes = {
    itemProp: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }),
    setTodos: PropTypes.func,
  };

  TodoItem.defaultProps = {
    itemProp: {
      id: 0,
      title: '',
      completed: false,
    },
    setTodos: () => {},
  };

  const handleChange = (id) => {
    setTodos((prevState) => prevState.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    }));
  };

  return (
    <li key={itemProp.id}>
      <input
        type="checkbox"
        checked={itemProp.completed}
        onChange={() => handleChange(itemProp.id)}
      />
      {itemProp.title}
    </li>
  );
};

export default TodoItem;
