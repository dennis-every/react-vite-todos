import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodosList = (props) => {
  TodosList.propTypes = {
    todosProps: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        completed: PropTypes.bool,
      }),
    ),
    handleChange: PropTypes.func,
    delTodo: PropTypes.func,
  };

  TodosList.defaultProps = {
    todosProps: [],
    handleChange: () => {},
    delTodo: () => {},
  };

  const { todosProps, handleChange, delTodo } = props;

  return (
    <ul>
      {todosProps.map((todo) => (
        <TodoItem
          key={todo.id}
          itemProp={todo}
          handleChange={handleChange}
          delTodo={delTodo}
        />
      ))}
    </ul>
  );
};

export default TodosList;
