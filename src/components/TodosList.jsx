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
    handleChange: PropTypes.func,
  };

  TodosList.defaultProps = {
    todosProps: [],
    handleChange: () => {},
  };

  const { todosProps, handleChange } = props;

  return (
    <ul>
      {todosProps.map((todo) => (
        <TodoItem
          key={todo.id}
          itemProp={todo}
          handleChange={handleChange}
        />
      ))}
    </ul>
  );
};

export default TodosList;
