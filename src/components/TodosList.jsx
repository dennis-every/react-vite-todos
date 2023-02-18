import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodosList = (props) => {
  TodosList.propTypes = {
    todosProps: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        completed: PropTypes.bool,
      }),
    ),
    setTodos: PropTypes.func,
  };

  TodosList.defaultProps = {
    todosProps: [],
    setTodos: () => {},
  };

  const { todosProps, setTodos } = props;

  return (
    <ul>
      {todosProps.map((todo) => (
        <TodoItem
          key={todo.id}
          itemProp={todo}
          setTodos={setTodos}
        />
      ))}
    </ul>
  );
};

export default TodosList;
