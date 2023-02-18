import { useRef } from 'react';

const Form = () => {
  const ref = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-alert
    alert(ref.current.value);
  };

  return (
    <>
      <h1>React Form Handling</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          First Name:
          {' '}
          <input name="name" type="text" ref={ref} defaultValue="Enter name..." />
        </label>
        <input type="submit" />
      </form>
    </>
  );
};

export default Form;
