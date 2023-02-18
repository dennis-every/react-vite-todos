import { useState } from 'react';

const Form = () => {
  const [state, setState] = useState({
    fname: '',
    lname: '',
    message: '',
  });

  const handleChange = (e) => {
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <h1>Controller Form</h1>
      <form>
        <label htmlFor="fname">
          First Name:
          {' '}
          <input
            name="fname"
            type="text"
            value={state.fname}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label htmlFor="lname">
          Last Name:
          {' '}
          <input
            name="lname"
            type="text"
            value={state.lname}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label htmlFor="message">
          Your Message:
          <textarea
            name="message"
            value={state.message}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <hr />
        <br />
        <h5>
          Name:
          {' '}
          {state.fname}
          {' '}
          {state.lname}
        </h5>
        <br />
        <p>
          Message:
          {' '}
          {state.message}
        </p>
      </form>
    </>
  );
};

export default Form;
