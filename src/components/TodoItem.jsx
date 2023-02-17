import PropTypes from 'prop-types';

const TodoItem = (props) => {
  const { itemProp } = props;

  TodoItem.propTypes = {
    itemProp: PropTypes.string,
  };

  TodoItem.defaultProps = {
    itemProp: '',
  };

  return <li key={itemProp.id}>{itemProp.title}</li>;
};

export default TodoItem;
