import PropTypes from 'prop-types';

const TodoItem = (props) => {
  const { itemProp, handleChange } = props;

  TodoItem.propTypes = {
    itemProp: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }),
    handleChange: PropTypes.func,
  };

  TodoItem.defaultProps = {
    itemProp: {
      id: 0,
      title: '',
      completed: false,
    },
    handleChange: () => {},
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
