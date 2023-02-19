import { TodosProvider } from '../context/TodosContext';

import InputTodo from './InputTodo';
import TodosList from './TodosList';

const TodosLogic = () => (
  <TodosProvider>
    <InputTodo />
    <TodosList />
  </TodosProvider>
);

export default TodosLogic;
