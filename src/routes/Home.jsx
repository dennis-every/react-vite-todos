/* eslint-disable import/extensions */
import TodosLogic from '@/components/TodosLogic';
import Header from '@/components/Header';

const Home = () => (
  // <div className="wrapper">
  <div className="todos">
    <Header />
    <TodosLogic />
  </div>
  // </div>
);
export default Home;
