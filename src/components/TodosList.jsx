import PropTypes from 'prop-types';

const TodosList = (props) => {
  TodosList.propTypes = {
    todosProps: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
      }),
    ),
  };

  TodosList.defaultProps = {
    todosProps: [],
  };

  const { todosProps } = props;

  return (
    <ul>
      {todosProps.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
};

export default TodosList;
